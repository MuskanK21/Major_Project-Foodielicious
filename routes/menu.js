const express = require('express');
const router  = express.Router();
const MenuItem = require('../models/MenuItem');

// GET /api/menu/:restaurantId — Restaurant ka pura menu
router.get('/:restaurantId', async (req, res) => {
    try {
        const items = await MenuItem.find({
            restaurantId: req.params.restaurantId,
            isAvailable: true
        });
        res.json({ success: true, data: items });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// POST /api/menu — Naya menu item add karo
router.post('/', async (req, res) => {
    try {
        const item = await MenuItem.create(req.body);
        res.status(201).json({ success: true, data: item });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// PUT /api/menu/:id — Menu item update karo
router.put('/:id', async (req, res) => {
    try {
        const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ success: false, message: 'Item nahi mila' });
        res.json({ success: true, data: item });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// DELETE /api/menu/:id — Menu item delete karo
router.delete('/:id', async (req, res) => {
    try {
        await MenuItem.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Item delete ho gaya' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
