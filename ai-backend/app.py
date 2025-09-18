from transformers import pipeline
# Load image classification pipeline
classifier = pipeline("image-classification", model="google/vit-base-patch16-224")
# Image identification and product recommendation
@app.post("/image-identify")
async def image_identify(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    result = classifier(image)
    label = result[0]['label'] if result else 'unknown'
    # Recommend products based on label
    similar_products = [p for p in PRODUCTS if label.lower() in p['name'].lower() or label.lower() in p['description'].lower()]
    return {"label": label, "results": similar_products}
from fastapi import FastAPI, Query
from sentence_transformers import SentenceTransformer, util
from typing import List
import uvicorn
from fastapi import File, UploadFile
from PIL import Image
import io
import re

app = FastAPI()
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
# For image search, use CLIP
from transformers import CLIPProcessor, CLIPModel
clip_model = CLIPModel.from_pretrained("openai/clip-vit-base-patch16")
clip_processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch16")

# Example product data
PRODUCTS = [
    {"id": 1, "name": "Wireless Headphones", "description": "High-fidelity wireless headphones with noise cancellation.", "price": 900},
    {"id": 2, "name": "Smart Watch", "description": "Track your fitness and notifications with this stylish smart watch.", "price": 1500},
    {"id": 3, "name": "Running Shoes", "description": "Lightweight running shoes for all terrains.", "price": 1200},
    {"id": 4, "name": "Bluetooth Speaker", "description": "Portable speaker with deep bass and long battery life.", "price": 800},
    {"id": 5, "name": "Yoga Mat", "description": "Eco-friendly yoga mat with non-slip surface.", "price": 400},
    {"id": 6, "name": "Coffee Maker", "description": "Brew the perfect cup with this programmable coffee maker.", "price": 2000},
    {"id": 7, "name": "Gaming Mouse", "description": "Ergonomic mouse with customizable buttons and RGB lighting.", "price": 700},
    {"id": 8, "name": "Backpack", "description": "Durable backpack with multiple compartments for travel.", "price": 1100},
    {"id": 9, "name": "Sunglasses", "description": "UV-protected sunglasses with modern design.", "price": 600},
    {"id": 10, "name": "Water Bottle", "description": "Insulated water bottle keeps drinks cold for 24 hours.", "price": 350},
]

product_texts = [p["name"] + " " + p["description"] for p in PRODUCTS]
product_embeddings = model.encode(product_texts, convert_to_tensor=True)
# Precompute CLIP text embeddings for products
clip_text_embeds = clip_model.get_text_features(**clip_processor(text=product_texts, return_tensors="pt"))
@app.post("/image-search")
async def image_search(file: UploadFile = File(...)):
    # Read image from upload
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    # Get CLIP image embedding
    inputs = clip_processor(images=image, return_tensors="pt")
    image_embed = clip_model.get_image_features(**inputs)
    # Compute similarity to all product text embeddings
    scores = (image_embed @ clip_text_embeds.T).squeeze().tolist()
    # Get top 5 products
    top_indices = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)[:5]
    results = [PRODUCTS[i] for i in top_indices]
    return {"results": results}

@app.get("/search")
def search_products(query: str = Query(...)):
    # Parse price constraint from query
    price_limit = None
    query_lower = query.lower()
    price_match = re.search(r'(?:below|under|less than)\s*(\d+)', query_lower)
    if price_match:
        price_limit = float(price_match.group(1))

    # Use both name and description for semantic matching, case-insensitive
    query_embedding = model.encode(query_lower, convert_to_tensor=True)
    product_texts = [(p["name"] + " " + p["description"]).lower() for p in PRODUCTS]
    product_embeddings = model.encode(product_texts, convert_to_tensor=True)
    scores = util.cos_sim(query_embedding, product_embeddings)[0]
    sorted_indices = scores.argsort(descending=True)
    filtered = []
    for i in sorted_indices:
        prod = PRODUCTS[i]
        if price_limit is not None and 'price' in prod:
            if prod['price'] > price_limit:
                continue
        filtered.append(prod)
        if len(filtered) == 5:
            break
    return {"results": filtered}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7860)
