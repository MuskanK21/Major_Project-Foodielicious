const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name:        { type: String, required: true },
    cuisine:     { type: String, required: true },
    category:    { type: String, enum: ['street-food', 'punjabi', 'south-indian', 'chinese', 'mughlai', 'rajasthani'], required: true },
    rating:      { type: Number, default: 4.0, min: 1, max: 5 },
    reviews:     { type: Number, default: 0 },
    location:    { type: String, required: true },
    deliveryTime:{ type: String, default: '30-40 min' },
    deliveryFee: { type: Number, default: 30 },
    image:       { type: String, default: '' },
    isOpen:      { type: Boolean, default: true },
    minOrder:    { type: Number, default: 100 },
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
