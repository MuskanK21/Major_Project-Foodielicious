

// ========== RESTAURANT DATA (20+ Restaurants) ==========
const restaurants = [
    { id: 1, name: "Sharma Ji Ki Kachori", cuisine: "Street Food • Kachori", category: "street-food", rating: 4.5, reviews: 342, location: "Old Delhi, Near Chandni Chowk", time: "25-35 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1625937287334-9c5bd9e59003?w=400&h=250&fit=crop" },
    { id: 2, name: "Bombay Chaiwala", cuisine: "Cafe • Street Food", category: "street-food", rating: 4.3, reviews: 218, location: "Connaught Place", time: "20-30 min", deliveryFee: 15, image: "https://images.unsplash.com/photo-1567925084989-9d6f2f5f8b4a?w=400&h=250&fit=crop" },
    { id: 3, name: "Gangaram Chaat Bhandar", cuisine: "Street Food • Chaat", category: "street-food", rating: 4.8, reviews: 789, location: "Chandni Chowk", time: "30-40 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop" },
    { id: 4, name: "Pind Balluchi", cuisine: "Punjabi • North Indian", category: "punjabi", rating: 4.6, reviews: 567, location: "Rajouri Garden", time: "35-45 min", deliveryFee: 30, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=250&fit=crop" },
    { id: 5, name: "Bikanervala", cuisine: "Punjabi • Sweets", category: "punjabi", rating: 4.4, reviews: 1234, location: "Karol Bagh", time: "25-35 min", deliveryFee: 25, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop" },
    { id: 6, name: "Sagar Ratna", cuisine: "South Indian", category: "south-indian", rating: 4.5, reviews: 892, location: "Lajpat Nagar", time: "20-30 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1630384060421-cf20c0e2e8c6?w=400&h=250&fit=crop" },
    { id: 7, name: "Mamagoto", cuisine: "Chinese • Asian", category: "chinese", rating: 4.7, reviews: 654, location: "Hauz Khas", time: "30-40 min", deliveryFee: 40, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=250&fit=crop" }
];

// ========== DISPLAY RESTAURANTS ==========
function displayRestaurants(filter = "all") {
    const container = document.getElementById('restaurantsGrid');
    if (!container) return;
    
    let filtered = restaurants;
    if (filter !== "all") {
        filtered = restaurants.filter(r => r.category === filter);
    }
    
    container.innerHTML = filtered.map(rest => `
        <div class="restaurant-card" onclick="window.location.href='menu.html?id=${rest.id}'">
            <div class="card-img-wrapper">
                <img src="${rest.image}" alt="${rest.name}" onerror="this.src='https://via.placeholder.com/400x250?text=Food'">
            </div>
            <div class="card-content">
                <h3>${rest.name}</h3>
                <p class="cuisine">${rest.cuisine}</p>
                <p class="rating">⭐ ${rest.rating} (${rest.reviews} reviews)</p>
                <p class="location">📍 ${rest.location}</p>
                <p class="delivery">⏱️ ${rest.time} | 🚚 ₹${rest.deliveryFee}</p>
            </div>
        </div>
    `).join('');
}

// ========== FILTER FUNCTION ==========
function filterRestaurants(category) {
    displayRestaurants(category);
    // Update active button style
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
}

// ========== SEARCH FUNCTION ==========
function searchRestaurants() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('restaurantsGrid');
    
    const filtered = restaurants.filter(rest => 
        rest.name.toLowerCase().includes(searchTerm) || 
        rest.cuisine.toLowerCase().includes(searchTerm)
    );
    
    container.innerHTML = filtered.map(rest => `
        <div class="restaurant-card" onclick="window.location.href='menu.html?id=${rest.id}'">
            <div class="card-img-wrapper">
                <img src="${rest.image}" alt="${rest.name}">
            </div>
            <div class="card-content">
                <h3>${rest.name}</h3>
                <p class="cuisine">${rest.cuisine}</p>
                <p class="rating">⭐ ${rest.rating} (${rest.reviews} reviews)</p>
                <p class="location">📍 ${rest.location}</p>
                <p class="delivery">⏱️ ${rest.time} | 🚚 ₹${rest.deliveryFee}</p>
            </div>
        </div>
    `).join('');
}

// ========== CART FUNCTIONS ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayRestaurants();
    updateCartCount();
});

// Make functions global
window.filterRestaurants = filterRestaurants;
window.searchRestaurants = searchRestaurants;