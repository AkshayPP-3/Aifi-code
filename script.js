// --- Mock Product Data with Embeddings ---
window.PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-fidelity wireless headphones with noise cancellation.",
    price: 900,
    category: "Electronics",
    image_url: "https://img.freepik.com/premium-photo/photo-wireless-headphones_1029469-18128.jpg", // Headphones
    embedding: randomEmbedding()
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications with this stylish smart watch.",
    price: 199.99,
    category: "Electronics",
    image_url: "https://m.media-amazon.com/images/I/716Jq5LJKsL._AC_SL1500_.jpg", // Smart Watch
    embedding: randomEmbedding()
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight running shoes for all terrains.",
    price: 89.99,
    category: "Footwear",
    image_url: "https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?b=1&s=170667a&w=0&k=20&c=xKzV4mPrvaeWWVMR8CCTMXTGCz431pydZvlMn0WxOyw=", // Running Shoes
    embedding: randomEmbedding()
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    price: 59.99,
    category: "Electronics",
    image_url: "https://th.bing.com/th/id/OIP.JPBYf__vC8QEH5FVhr7VBwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", // Bluetooth Speaker
    embedding: randomEmbedding()
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Eco-friendly yoga mat with non-slip surface.",
    price: 29.99,
    category: "Fitness",
    image_url: "https://i5.walmartimages.com/seo/BalanceFrom-All-Purpose-1-2-In-High-Density-Foam-Exercise-Yoga-Mat-Anti-Tear-with-Carrying-Strap-Pink_fa04e66e-2348-4c65-827c-d1e502e993c8_3.0bd06bf524cfa140e05da0dd6ca26f4a.jpeg", // Yoga Mat
    embedding: randomEmbedding()
  },
  {
    id: 6,
    name: "Coffee Maker",
    description: "Brew the perfect cup with this programmable coffee maker.",
    price: 79.99,
    category: "Home Appliances",
  image_url: "https://i5.walmartimages.com/seo/Mr-Coffee-5-Cup-Programmable-Coffee-Maker-25-oz-Mini-Brew-Black_972164db-9b9b-42e2-9463-80f40fb360e3.2423b7d6d6d77ec31ed140a0cece9662.jpeg", // Coffee Maker
    embedding: randomEmbedding()
  },
  {
    id: 7,
    name: "Gaming Mouse",
    description: "Ergonomic mouse with customizable buttons and RGB lighting.",
    price: 49.99,
    category: "Electronics",
  image_url: "https://th.bing.com/th/id/OIP.VReOyAiTw3TjtDJXAonv8gAAAA?w=114&h=104&c=7&bgcl=2507bb&r=0&o=6&dpr=1.3&pid=13.1", // Gaming Mouse
    embedding: randomEmbedding()
  },
  {
    id: 8,
    name: "Backpack",
    description: "Durable backpack with multiple compartments for travel.",
    price: 39.99,
    category: "Accessories",
  image_url: "https://www.bing.com/th?id=OPAC.oOOu%2fOYZUPw1QQ474C474&o=5&pid=21.1&w=128&h=188&rs=1&qlt=100&dpr=1.3&o=2&bw=6&bc=FFFFFF", // Backpack
    embedding: randomEmbedding()
  },
  {
    id: 9,
    name: "Sunglasses",
    description: "UV-protected sunglasses with modern design.",
    price: 24.99,
    category: "Accessories",
  image_url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16529-c2-sunglasses_img_9304_15_12_2023.jpg", // Sunglasses
    embedding: randomEmbedding()
  },
  {
    id: 10,
    name: "Water Bottle",
    description: "Insulated water bottle keeps drinks cold for 24 hours.",
    price: 19.99,
    category: "Fitness",
  image_url: "https://www.milton.in/cdn/shop/files/51kJYER4sQL._SL1500.jpg?v=1754028639&width=900", // Water Bottle
    embedding: randomEmbedding()
  },
  {
    id: 11,
    name: "Laptop Stand",
    description: "Adjustable stand for ergonomic laptop use.",
    price: 34.99,
    category: "Electronics",
  image_url: "https://m.media-amazon.com/images/I/61-phH8oaIL._AC_SL1300_.jpg", // Laptop Stand
    embedding: randomEmbedding()
  },
  {
    id: 12,
    name: "Desk Lamp",
    description: "LED desk lamp with touch controls and dimming.",
    price: 22.99,
    category: "Home Appliances",
  image_url: "https://th.bing.com/th/id/OIP.Jd4kz-yZjKFZKaVWyxM4cAHaHa?w=245&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // Desk Lamp
    embedding: randomEmbedding()
  },
  {
    id: 13,
    name: "Fitness Tracker",
    description: "Monitor your health stats with this sleek fitness tracker.",
    price: 59.99,
    category: "Fitness",
  image_url: "https://th.bing.com/th/id/OIP.AUt5ucfZqr3mpL6Ny5jJzgHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // Fitness Tracker
    embedding: randomEmbedding()
  },
  {
    id: 14,
    name: "Wireless Charger",
    description: "Fast wireless charging pad for smartphones.",
    price: 27.99,
    category: "Electronics",
  image_url: "https://th.bing.com/th/id/OIP.Zl1eiRpxWVif6J7E680i4QHaHU?w=185&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // Wireless Charger
    embedding: randomEmbedding()
  },
  {
    id: 15,
    name: "Travel Mug",
    description: "Spill-proof travel mug for hot and cold drinks.",
    price: 14.99,
    category: "Accessories",
  image_url: "https://th.bing.com/th/id/OIP.zdJtJc9ydv3_0CB8-oXiwAHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // Travel Mug
    embedding: randomEmbedding()
  },
  {
    id: 16,
    name: "Portable Power Bank",
    description: "Charge your devices on the go with this compact power bank.",
    price: 25.99,
    category: "Electronics",
  image_url: "https://th.bing.com/th?id=OPAC.VqY6usv%2bzCFI4w474C474&w=406&h=406&o=5&dpr=1.3&pid=21.1", // Power Bank
    embedding: randomEmbedding()
  },
  {
    id: 17,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with long battery life.",
    price: 79.99,
    category: "Electronics",
  image_url: "https://th.bing.com/th/id/OIP.Tgc7i704RjxEki5L7ZqiAgHaHA?w=218&h=206&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // Wireless Earbuds
    embedding: randomEmbedding()
  },
  {
    id: 18,
    name: "Smart Thermostat",
    description: "Control your home's temperature remotely.",
    price: 129.99,
    category: "Home Appliances",
  image_url: "https://th.bing.com/th/id/OIP.q7gYnTDHy_x1vnXgo0MzewHaEH?w=197&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3", // Smart Thermostat
    embedding: randomEmbedding()
  },
  {
    id: 19,
    name: "Resistance Bands",
    description: "Set of resistance bands for strength training.",
    price: 17.99,
    category: "Fitness",
  image_url: "https://th.bing.com/th/id/OIP.V0iOt75RwfxhBYPDs6MT5wHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Resistance Bands
    embedding: randomEmbedding()
  },
  {
    id: 20,
    name: "Electric Toothbrush",
    description: "Rechargeable toothbrush for deep cleaning.",
    price: 49.99,
    category: "Home Appliances",
  image_url: "https://th.bing.com/th/id/OIP.Gc0Au8sS_vjDosJ44p-6OgHaHa?w=177&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3", // Electric Toothbrush
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
  // Local image similarity search (demo mode)
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  await new Promise(resolve => { img.onload = resolve; });
  const imgEmbedding = await getImageEmbedding(img);
  const results = window.PRODUCTS.map((product, idx) => ({
    ...product,
    score: product.embedding ? cosineSimilarity(imgEmbedding, product.embedding) : 0
  })).sort((a, b) => b.score - a.score);
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
    // Enhanced search: support 'shoe under 1000' and similar queries
    const query = searchInput.value.trim().toLowerCase();
    let keyword = query;
    let priceLimit = null;
    // Match phrases like 'shoe under 1000', 'shoes below 500', etc.
    const priceRegex = /(\w+)\s*(?:under|below|less than)\s*(\d+)/;
    const priceMatch = query.match(priceRegex);
    if (priceMatch) {
      keyword = priceMatch[1];
      priceLimit = parseFloat(priceMatch[2]);
    } else {
      // Fallback: match 'under 1000' or 'below 500'
      const onlyPrice = query.match(/(?:under|below|less than)\s*(\d+)/);
      if (onlyPrice) {
        priceLimit = parseFloat(onlyPrice[1]);
      }
    }
    filtered = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword)
    );
    if (priceLimit !== null) {
      filtered = filtered.filter(p => p.price <= priceLimit);
    }
    return filtered.length > 0 ? filtered : PRODUCTS;
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
// --- Wishlist & Cart State ---
function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
}
function setWishlist(arr) {
  localStorage.setItem('wishlist', JSON.stringify(arr));
}
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(arr) {
  localStorage.setItem('cart', JSON.stringify(arr));
}

function updateHeaderCounts() {
  const wishlistCount = getWishlist().length;
  const cartCount = getCart().length;
  let wishlistBtn = document.getElementById('headerWishlistIcon');
  let cartBtn = document.getElementById('headerCartIcon');
  if (wishlistBtn && wishlistBtn.parentElement) {
    let badge = wishlistBtn.parentElement.querySelector('.wishlist-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'wishlist-badge bg-pink-500 text-white rounded-full px-2 py-0.5 text-xs ml-1';
      wishlistBtn.parentElement.appendChild(badge);
    }
    badge.textContent = wishlistCount > 0 ? wishlistCount : '';
  }
  if (cartBtn && cartBtn.parentElement) {
    let badge = cartBtn.parentElement.querySelector('.cart-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'cart-badge bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs ml-1';
      cartBtn.parentElement.appendChild(badge);
    }
    badge.textContent = cartCount > 0 ? cartCount : '';
  }
}

function renderProducts(products) {
  productGrid.innerHTML = '';
  if (products.length === 0) {
    productGrid.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }
  productGrid.classList.remove('hidden');
  emptyState.classList.add('hidden');
  const wishlist = getWishlist();
  const cart = getCart();
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-4 focus:outline-none relative';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${p.name}`);
    const inWishlist = wishlist.includes(p.id);
    const inCart = cart.includes(p.id);
    card.innerHTML = `
      <img src="${p.image_url}" alt="${p.name}" class="w-24 h-24 object-cover rounded mb-2 cursor-pointer" />
      <div class="font-semibold text-gray-800 text-lg">${p.name}</div>
      <div class="text-blue-600 font-bold text-md mb-1">₹${p.price.toFixed(2)}</div>
      <div class="text-gray-500 text-sm mb-2">${p.category}</div>
      <div class="flex gap-3 mt-2">
        <button class="wishlist-btn" title="Add to Wishlist" aria-label="Add to Wishlist">
          ${inWishlist
            ? '<svg width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-pink-600"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.5.5-.5-.5a5.5 5.5 0 0 0-7.8 7.8l.5.5L12 21.3l7.8-8.4.5-.5a5.5 5.5 0 0 0 0-7.8z"></path></svg>'
            : '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-pink-500 hover:text-pink-700"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.5.5-.5-.5a5.5 5.5 0 0 0-7.8 7.8l.5.5L12 21.3l7.8-8.4.5-.5a5.5 5.5 0 0 0 0-7.8z"></path></svg>'}
        </button>
        <button class="cart-btn" title="Add to Cart" aria-label="Add to Cart">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart ${inCart ? 'text-blue-600' : 'text-blue-500'} hover:text-blue-700"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"></path></svg>
        </button>
        <button class="buy-btn px-3 py-1 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition" title="Buy Now" aria-label="Buy Now">Buy Now</button>
      </div>
    `;
    // Buy Now button click
    card.querySelector('.buy-btn').addEventListener('click', e => {
      e.stopPropagation();
      setCart([p.id]);
      window.location.href = 'checkout.html';
    });
    // Product image and name click: go to details
    card.querySelector('img').addEventListener('click', () => {
      window.location.href = `product.html?id=${p.id}`;
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        window.location.href = `product.html?id=${p.id}`;
      }
    });
    // Wishlist button click
    card.querySelector('.wishlist-btn').addEventListener('click', e => {
      e.stopPropagation();
      let wl = getWishlist();
      if (wl.includes(p.id)) {
        wl = wl.filter(id => id !== p.id);
      } else {
        wl.push(p.id);
      }
      setWishlist(wl);
      renderProducts(products);
      updateHeaderCounts();
    });
    // Cart button click
    card.querySelector('.cart-btn').addEventListener('click', e => {
      e.stopPropagation();
      let ct = getCart();
      if (ct.includes(p.id)) {
        ct = ct.filter(id => id !== p.id);
      } else {
        ct.push(p.id);
      }
      setCart(ct);
      renderProducts(products);
      updateHeaderCounts();
    });
    productGrid.appendChild(card);
  });
  updateHeaderCounts();
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
updateHeaderCounts();
// Header wishlist/cart click handlers
document.addEventListener('DOMContentLoaded', function() {
  const wishlistHeaderBtn = document.getElementById('headerWishlistIcon')?.parentElement;
  const cartHeaderBtn = document.getElementById('headerCartIcon')?.parentElement;
  if (wishlistHeaderBtn) {
    wishlistHeaderBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('wishlist.html', '_blank');
    });
  }
  if (cartHeaderBtn) {
    cartHeaderBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('cart.html', '_blank');
    });
  }
});
