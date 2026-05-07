const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');

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
