// --- Mock Product Data with Embeddings ---
window.PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-fidelity wireless headphones with noise cancellation.",
    price: 129.99,
    category: "Electronics",
    image_url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", // Headphones
    embedding: randomEmbedding()
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications with this stylish smart watch.",
    price: 199.99,
    category: "Electronics",
    image_url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80", // Smart Watch
    embedding: randomEmbedding()
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight running shoes for all terrains.",
    price: 89.99,
    category: "Footwear",
    image_url: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", // Running Shoes
    embedding: randomEmbedding()
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    price: 59.99,
    category: "Electronics",
    image_url: "https://images.unsplash.com/photo-1512446733611-9099a758e0c2?auto=format&fit=crop&w=400&q=80", // Bluetooth Speaker
    embedding: randomEmbedding()
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Eco-friendly yoga mat with non-slip surface.",
    price: 29.99,
    category: "Fitness",
    image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", // Yoga Mat
    embedding: randomEmbedding()
  },
  {
    id: 6,
    name: "Coffee Maker",
    description: "Brew the perfect cup with this programmable coffee maker.",
    price: 79.99,
    category: "Home Appliances",
  image_url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80", // Coffee Maker
    embedding: randomEmbedding()
  },
  {
    id: 7,
    name: "Gaming Mouse",
    description: "Ergonomic mouse with customizable buttons and RGB lighting.",
    price: 49.99,
    category: "Electronics",
  image_url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", // Gaming Mouse
    embedding: randomEmbedding()
  },
  {
    id: 8,
    name: "Backpack",
    description: "Durable backpack with multiple compartments for travel.",
    price: 39.99,
    category: "Accessories",
  image_url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", // Backpack
    embedding: randomEmbedding()
  },
  {
    id: 9,
    name: "Sunglasses",
    description: "UV-protected sunglasses with modern design.",
    price: 24.99,
    category: "Accessories",
  image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", // Sunglasses
    embedding: randomEmbedding()
  },
  {
    id: 10,
    name: "Water Bottle",
    description: "Insulated water bottle keeps drinks cold for 24 hours.",
    price: 19.99,
    category: "Fitness",
  image_url: "https://images.unsplash.com/photo-1524594154908-edd3600fa3b3?auto=format&fit=crop&w=400&q=80", // Water Bottle
    embedding: randomEmbedding()
  },
  {
    id: 11,
    name: "Laptop Stand",
    description: "Adjustable stand for ergonomic laptop use.",
    price: 34.99,
    category: "Electronics",
  image_url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", // Laptop Stand
    embedding: randomEmbedding()
  },
  {
    id: 12,
    name: "Desk Lamp",
    description: "LED desk lamp with touch controls and dimming.",
    price: 22.99,
    category: "Home Appliances",
  image_url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Desk Lamp
    embedding: randomEmbedding()
  },
  {
    id: 13,
    name: "Fitness Tracker",
    description: "Monitor your health stats with this sleek fitness tracker.",
    price: 59.99,
    category: "Fitness",
  image_url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80", // Fitness Tracker
    embedding: randomEmbedding()
  },
  {
    id: 14,
    name: "Wireless Charger",
    description: "Fast wireless charging pad for smartphones.",
    price: 27.99,
    category: "Electronics",
  image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", // Wireless Charger
    embedding: randomEmbedding()
  },
  {
    id: 15,
    name: "Travel Mug",
    description: "Spill-proof travel mug for hot and cold drinks.",
    price: 14.99,
    category: "Accessories",
  image_url: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", // Travel Mug
    embedding: randomEmbedding()
  },
  {
    id: 16,
    name: "Portable Power Bank",
    description: "Charge your devices on the go with this compact power bank.",
    price: 25.99,
    category: "Electronics",
  image_url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Power Bank
    embedding: randomEmbedding()
  },
  {
    id: 17,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with long battery life.",
    price: 79.99,
    category: "Electronics",
  image_url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", // Wireless Earbuds
    embedding: randomEmbedding()
  },
  {
    id: 18,
    name: "Smart Thermostat",
    description: "Control your home's temperature remotely.",
    price: 129.99,
    category: "Home Appliances",
  image_url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Smart Thermostat
    embedding: randomEmbedding()
  },
  {
    id: 19,
    name: "Resistance Bands",
    description: "Set of resistance bands for strength training.",
    price: 17.99,
    category: "Fitness",
  image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", // Resistance Bands
    embedding: randomEmbedding()
  },
  {
    id: 20,
    name: "Electric Toothbrush",
    description: "Rechargeable toothbrush for deep cleaning.",
    price: 49.99,
    category: "Home Appliances",
  image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Electric Toothbrush
    embedding: randomEmbedding()
  }
];

function randomEmbedding(dim=8) {
  return Array.from({length: dim}, () => Math.random());
}

// --- Utility: Cosine Similarity ---
function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// --- Semantic Embedding for Query ---
function queryEmbedding(query) {
  // Simple mock: hash words to numbers
  const words = query.toLowerCase().split(/\W+/);
  const emb = Array(8).fill(0);
  words.forEach((w, i) => {
    for (let j = 0; j < emb.length; j++) {
      emb[j] += (w.charCodeAt(0) || 0) * ((i+1)*(j+1)) % 7;
    }
  });
  // Normalize
  const norm = Math.sqrt(emb.reduce((s,x)=>s+x*x,0));
  return emb.map(x=>x/norm);
}

// --- Semantic Embedding for Image (Mock) ---
function imageEmbedding() {
  // Just random for demo
  return randomEmbedding();
}

// --- State ---
let demoMode = false;
let selectedProduct = null;
let uploadedImage = null;
let currentProducts = PRODUCTS;
let loadingTimeout = null;

// --- AI Model for Image Similarity ---
let mobilenetModel = null;
async function loadMobilenet() {
  if (!mobilenetModel) {
    mobilenetModel = await mobilenet.load();
  }
}
loadMobilenet();

async function getImageEmbedding(imgElement) {
  await loadMobilenet();
  const activation = mobilenetModel.infer(imgElement, true);
  return activation.dataSync();
}

async function findSimilarProductsByImage(file) {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  await new Promise(resolve => { img.onload = resolve; });
  const imgEmbedding = await getImageEmbedding(img);

  // For each product, get its image embedding using MobileNet
  async function getProductEmbedding(product) {
    return new Promise(resolve => {
      const productImg = document.createElement('img');
      productImg.crossOrigin = 'anonymous';
      productImg.src = product.image_url;
      productImg.onload = async () => {
        const emb = await getImageEmbedding(productImg);
        resolve(emb);
      };
      productImg.onerror = () => resolve(null);
    });
  }

  // Compute embeddings for all products
  const productEmbeddings = await Promise.all(window.PRODUCTS.map(getProductEmbedding));

  // Compare uploaded image embedding with each product image embedding
  function cosineSimilarity(a, b) {
    let dot = 0, normA = 0, normB = 0;
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      dot += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  const results = window.PRODUCTS.map((product, idx) => ({
    ...product,
    score: productEmbeddings[idx] ? cosineSimilarity(imgEmbedding, productEmbeddings[idx]) : 0
  })).sort((a, b) => b.score - a.score);

  // Show top 5 similar products
  renderProducts(results.slice(0, 5));
}

// --- DOM Elements ---
const productGrid = document.getElementById('productGrid');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');
const demoToggle = document.getElementById('demoToggle');
const demoText = document.getElementById('demoText');
const uploadSection = document.getElementById('uploadSection');
const dropArea = document.getElementById('dropArea');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const categoryNav = document.getElementById('categoryNav');

// --- Populate Category Filter ---
const categories = [...new Set(PRODUCTS.map(p => p.category))];
categories.forEach(cat => {
  const opt = document.createElement('option');
  opt.value = cat;
  opt.textContent = cat;
  categorySelect.appendChild(opt);
});

// --- Render Category Navigation Bar ---
function renderCategoryNav() {
  categoryNav.innerHTML = '';
  // 'All' button
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All';
  allBtn.className = 'px-4 py-1 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-blue-100 transition';
  allBtn.onclick = () => {
    categorySelect.value = '';
    refreshProducts();
  };
  categoryNav.appendChild(allBtn);
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = 'px-4 py-1 rounded bg-blue-50 text-blue-700 font-semibold hover:bg-blue-200 transition';
    btn.onclick = () => {
      categorySelect.value = cat;
      refreshProducts();
    };
    categoryNav.appendChild(btn);
  });
}
renderCategoryNav();

// --- Search & Filter Logic ---
function filterProducts() {
  let filtered = PRODUCTS.filter(p => p.price <= priceRange.value);
  if (categorySelect.value) {
    filtered = filtered.filter(p => p.category === categorySelect.value);
  }
  if (!demoMode && searchInput.value.trim()) {
    // AI-powered semantic search
    const qEmb = queryEmbedding(searchInput.value.trim());
    filtered = filtered.map(p => ({...p, score: cosineSimilarity(qEmb, p.embedding)}))
      .sort((a,b) => b.score - a.score)
      .filter(p => p.score > 0.2); // threshold for demo
  }
  if (demoMode && uploadedImage) {
    // AI-powered image search
    const imgEmb = imageEmbedding();
    filtered = filtered.map(p => ({...p, score: cosineSimilarity(imgEmb, p.embedding)}))
      .sort((a,b) => b.score - a.score)
      .slice(0, 8);
  }
  return filtered;
}

// --- Render Product Grid ---
function renderProducts(products) {
  productGrid.innerHTML = '';
  if (products.length === 0) {
    productGrid.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }
  productGrid.classList.remove('hidden');
  emptyState.classList.add('hidden');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-4 cursor-pointer focus:outline-none';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${p.name}`);
    card.innerHTML = `
      <img src="${p.image_url}" alt="${p.name}" class="w-24 h-24 object-cover rounded mb-2" />
      <div class="font-semibold text-gray-800 text-lg">${p.name}</div>
  <div class="text-blue-600 font-bold text-md mb-1">₹${p.price.toFixed(2)}</div>
      <div class="text-gray-500 text-sm mb-2">${p.category}</div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `product.html?id=${p.id}`;
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        window.location.href = `product.html?id=${p.id}`;
      }
    });
    productGrid.appendChild(card);
  });
}

// --- Loading Skeletons ---
function showLoading() {
  loadingState.innerHTML = '';
  loadingState.classList.remove('hidden');
  productGrid.classList.add('hidden');
  emptyState.classList.add('hidden');
  for (let i = 0; i < 8; i++) {
    const skel = document.createElement('div');
    skel.className = 'skeleton';
    loadingState.appendChild(skel);
  }
}
function hideLoading() {
  loadingState.innerHTML = '';
  loadingState.classList.add('hidden');
}

// --- Modal Logic ---
function openModal(product) {
  selectedProduct = product;
  document.body.classList.add('modal-open');
  modalOverlay.classList.remove('hidden');
  modalBody.innerHTML = `
    <img src="${product.image_url}" alt="${product.name}" class="w-32 h-32 object-cover rounded mb-4 mx-auto" />
    <div class="font-bold text-xl text-gray-800 mb-2">${product.name}</div>
    <div class="text-gray-600 mb-2">${product.description}</div>
    <div class="text-blue-600 font-bold text-lg mb-2">$${product.price.toFixed(2)}</div>
    <div class="text-gray-500 text-sm mb-4">${product.category}</div>
    <div class="mt-4">
      <div class="font-semibold text-gray-700 mb-1">You may also like:</div>
      <div class="flex flex-wrap gap-2">
        ${recommendProducts(product).map(r => `
          <button class="bg-blue-50 rounded px-2 py-1 text-blue-700 text-sm hover:bg-blue-100 transition" onclick="window.open('${r.image_url}','_blank')" aria-label="${r.name}">${r.name}</button>
        `).join('')}
      </div>
    </div>
  `;
}
function closeModal() {
  selectedProduct = null;
  document.body.classList.remove('modal-open');
  modalOverlay.classList.add('hidden');
}
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

// --- Recommendations ---
function recommendProducts(product) {
  // Top 3 by embedding similarity, not self
  return PRODUCTS.filter(p => p.id !== product.id)
    .map(p => ({...p, score: cosineSimilarity(product.embedding, p.embedding)}))
    .sort((a,b) => b.score - a.score)
    .slice(0,3);
}

// --- Demo Mode Toggle ---
demoToggle.addEventListener('click', () => {
  demoMode = !demoMode;
  demoText.textContent = demoMode ? 'Demo Mode: Upload Image' : 'Demo Mode: Search';
  searchInput.disabled = demoMode;
  uploadSection.classList.toggle('hidden', !demoMode);
  document.getElementById('searchFilters').classList.toggle('hidden', demoMode);
  uploadedImage = null;
  imagePreview.classList.add('hidden');
  imagePreview.querySelector('img').src = '';
  refreshProducts();
});

// --- Upload Image Mock ---
dropArea.addEventListener('click', () => imageInput.click());
dropArea.addEventListener('dragover', e => { e.preventDefault(); dropArea.classList.add('bg-blue-100'); });
dropArea.addEventListener('dragleave', e => { e.preventDefault(); dropArea.classList.remove('bg-blue-100'); });
dropArea.addEventListener('drop', e => {
  e.preventDefault();
  dropArea.classList.remove('bg-blue-100');
  if (e.dataTransfer.files.length) handleImageUpload(e.dataTransfer.files[0]);
});
imageInput.addEventListener('change', e => {
  if (e.target.files.length) handleImageUpload(e.target.files[0]);
});
function handleImageUpload(file) {
  const reader = new FileReader();
  reader.onload = async function(e) {
    uploadedImage = e.target.result;
    imagePreview.classList.remove('hidden');
    imagePreview.querySelector('img').src = uploadedImage;
    if (demoMode) {
      await findSimilarProductsByImage(file);
    } else {
      refreshProducts();
    }
  };
  reader.readAsDataURL(file);
}

// --- Price Range ---
priceRange.addEventListener('input', () => {
  priceValue.textContent = `₹${priceRange.value}`;
  refreshProducts();
});
categorySelect.addEventListener('change', refreshProducts);

// --- Search Input (debounced) ---
let searchTimeout = null;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(refreshProducts, 350);
});

// --- Refresh Products ---
function refreshProducts() {
  showLoading();
  clearTimeout(loadingTimeout);
  loadingTimeout = setTimeout(() => {
    hideLoading();
    const filtered = filterProducts();
    renderProducts(filtered);
  }, 600);
}

// --- Initial Render ---
refreshProducts();
