const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    name:         { type: String, required: true },
    description:  { type: String, default: '' },
    price:        { type: Number, required: true },
    isVeg:        { type: Boolean, default: true },
    category:     { type: String, default: 'Main Course' },
    image:        { type: String, default: '' },
    isAvailable:  { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', MenuItemSchema);
