// ========== RESTAURANT DATA ==========
const restaurants = [
    {
        id: 1,
        name: "Sharma Ji Ki Kachori",
        cuisine: "Street Food",
        category: "street-food",
        rating: 4.5,
        reviewCount: 342,
        location: "Old Delhi, Near Chandni Chowk",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1625937287334-9c5bd9e59003?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        name: "Bombay Chaiwala",
        cuisine: "Cafe • Street Food",
        category: "street-food",
        rating: 4.3,
        reviewCount: 218,
        location: "Connaught Place",
        deliveryTime: "20-30 min",
        deliveryFee: 15,
        image: "https://images.unsplash.com/photo-1567925084989-9d6f2f5f8b4a?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        name: "Amritsari Kulcha Hut",
        cuisine: "Punjabi",
        category: "punjabi",
        rating: 4.6,
        reviewCount: 456,
        location: "Rajouri Garden",
        deliveryTime: "30-40 min",
        deliveryFee: 25,
        image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4bc?w=400&h=250&fit=crop"
    },
    {
        id: 4,
        name: "Madhuram Sweets",
        cuisine: "South Indian • Sweets",
        category: "south-indian",
        rating: 4.4,
        reviewCount: 389,
        location: "Lajpat Nagar",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1589301760014-2c6fc4f4c8f6?w=400&h=250&fit=crop"
    },
    {
        id: 5,
        name: "Momos Point",
        cuisine: "Chinese • Tibetan",
        category: "chinese",
        rating: 4.5,
        reviewCount: 567,
        location: "Hauz Khas",
        deliveryTime: "20-30 min",
        deliveryFee: 15,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=250&fit=crop"
    },
    {
        id: 6,
        name: "Gangaram Chaat Bhandar",
        cuisine: "Street Food • Chaat",
        category: "street-food",
        rating: 4.8,
        reviewCount: 789,
        location: "Chandni Chowk",
        deliveryTime: "30-40 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1606491956689-2ea11e9e9f8c?w=400&h=250&fit=crop"
    }
];

// ========== DOM ELEMENTS ==========
const restaurantsGrid = document.getElementById('restaurantsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// ========== STATE ==========
let currentFilter = 'all';
let currentSearch = '';

// ========== RENDER FUNCTION ==========
function renderRestaurants() {
    let filtered = [...restaurants];
    
    // Apply filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(r => r.category === currentFilter);
    }
    
    // Apply search
    if (currentSearch.trim()) {
        const searchTerm = currentSearch.toLowerCase();
        filtered = filtered.filter(r => 
            r.name.toLowerCase().includes(searchTerm) ||
            r.cuisine.toLowerCase().includes(searchTerm)
        );
    }
    
    // Show no results message
    if (filtered.length === 0) {
        restaurantsGrid.innerHTML = '<div class="no-results">😕 No restaurants found. Try another search!</div>';
        return;
    }
    
    // Render restaurants
    restaurantsGrid.innerHTML = filtered.map(restro => `
        <a href="menu.html?id=${restro.id}" class="restro-card">
            <img src="${restro.image}" alt="${restro.name}" class="restro-image">
            <div class="restro-info">
                <h3 class="restro-name">${restro.name}</h3>
                <p class="restro-cuisine">${restro.cuisine}</p>
                <div class="restro-rating">
                    <span class="star">★</span>
                    <span class="rating-value">${restro.rating}</span>
                    <span class="review-count">(${restro.reviewCount} reviews)</span>
                </div>
                <div class="restro-location">📍 ${restro.location}</div>
                <div class="restro-delivery">🚚 ${restro.deliveryTime} • ₹${restro.deliveryFee} delivery</div>
            </div>
        </a>
    `).join('');
}

// ========== EVENT LISTENERS ==========
searchBtn.addEventListener('click', () => {
    currentSearch = searchInput.value;
    renderRestaurants();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        currentSearch = searchInput.value;
        renderRestaurants();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderRestaurants();
    });
});

// ========== CART FUNCTIONALITY ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

updateCartCount();

// ========== INITIAL RENDER ==========
renderRestaurants();