const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
// restaurants.js file ke start mein yeh hona chahiye:

const restaurants = [
    { id: 1, name: "Sharma Ji Ki Kachori", cuisine: "Street Food", category: "street-food", rating: 4.5, reviews: 342, location: "Old Delhi", time: "25-35 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1625937287334-9c5bd9e59003?w=400&h=250&fit=crop" },
    { id: 2, name: "Bombay Chaiwala", cuisine: "Cafe", category: "street-food", rating: 4.3, reviews: 218, location: "Connaught Place", time: "20-30 min", deliveryFee: 15, image: "https://images.unsplash.com/photo-1567925084989-9d6f2f5f8b4a?w=400&h=250&fit=crop" },
    { id: 3, name: "Gangaram Chaat Bhandar", cuisine: "Street Food", category: "street-food", rating: 4.8, reviews: 789, location: "Chandni Chowk", time: "30-40 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop" },
    { id: 4, name: "Pind Balluchi", cuisine: "Punjabi", category: "punjabi", rating: 4.6, reviews: 567, location: "Rajouri Garden", time: "35-45 min", deliveryFee: 30, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=250&fit=crop" },
    { id: 5, name: "Bikanervala", cuisine: "Punjabi", category: "punjabi", rating: 4.4, reviews: 1234, location: "Karol Bagh", time: "25-35 min", deliveryFee: 25, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop" },
    { id: 6, name: "Sagar Ratna", cuisine: "South Indian", category: "south-indian", rating: 4.5, reviews: 892, location: "Lajpat Nagar", time: "20-30 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1630384060421-cf20c0e2e8c6?w=400&h=250&fit=crop" },
    { id: 7, name: "Mamagoto", cuisine: "Chinese", category: "chinese", rating: 4.7, reviews: 654, location: "Hauz Khas", time: "30-40 min", deliveryFee: 40, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=250&fit=crop" }
];

// Display function
function displayRestaurants() {
    const container = document.getElementById('restaurantsGrid');
    if (!container) {
        console.log("Container not found!");
        return;
    }
    
    console.log("Restaurants to display:", restaurants);
    
    container.innerHTML = restaurants.map(rest => `
        <div class="restaurant-card" onclick="window.location.href='menu.html?id=${rest.id}'">
            <img src="${rest.image}" onerror="this.src='https://via.placeholder.com/400x250?text=Food'">
            <h3>${rest.name}</h3>
            <p>⭐ ${rest.rating} | ${rest.cuisine}</p>
            <p>📍 ${rest.location}</p>
            <p>⏱️ ${rest.time} | ₹${rest.deliveryFee}</p>
        </div>
    `).join('');
}

// Page load pe call karo
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded");
    displayRestaurants();
});

// GET /api/restaurants — Sabhi restaurants
router.get('/', async (req, res) => {
    try {
        const { category, search } = req.query;
        let filter = {};

        if (category && category !== 'all') {
            filter.category = category;
        }
        if (search) {
            filter.$or = [
                { name:    { $regex: search, $options: 'i' } },
                { cuisine: { $regex: search, $options: 'i' } }
            ];
        }

        const restaurants = await Restaurant.find(filter).sort({ rating: -1 });
        res.json({ success: true, data: restaurants });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /api/restaurants/:id — Ek restaurant
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ success: false, message: 'Restaurant nahi mila' });
        res.json({ success: true, data: restaurant });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// POST /api/restaurants — Naya restaurant add karo (admin)
router.post('/', async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json({ success: true, data: restaurant });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// PUT /api/restaurants/:id — Restaurant update karo
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!restaurant) return res.status(404).json({ success: false, message: 'Restaurant nahi mila' });
        res.json({ success: true, data: restaurant });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// DELETE /api/restaurants/:id — Restaurant delete karo
router.delete('/:id', async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        await MenuItem.deleteMany({ restaurantId: req.params.id });
        res.json({ success: true, message: 'Restaurant delete ho gaya' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;


