// ====================================================
// SEED SCRIPT — Run karo: node seed.js
// Yeh script MongoDB mein sample data daalega
// ====================================================
require('dotenv').config();
const mongoose  = require('mongoose');
const Restaurant = require('./models/Restaurant');
const MenuItem   = require('./models/MenuItem');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/foodelicious';

const restaurantData = [
    { name: "Sharma Ji Ki Kachori",   cuisine: "Street Food • Kachori",  category: "street-food", rating: 4.5, reviews: 342,  location: "Old Delhi, Near Chandni Chowk", deliveryTime: "25-35 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1625937287334-9c5bd9e59003?w=400&h=250&fit=crop" },
    { name: "Bombay Chaiwala",         cuisine: "Cafe • Street Food",     category: "street-food", rating: 4.3, reviews: 218,  location: "Connaught Place",               deliveryTime: "20-30 min", deliveryFee: 15, image: "https://images.unsplash.com/photo-1567925084989-9d6f2f5f8b4a?w=400&h=250&fit=crop" },
    { name: "Gangaram Chaat Bhandar",  cuisine: "Street Food • Chaat",    category: "street-food", rating: 4.8, reviews: 789,  location: "Chandni Chowk",                 deliveryTime: "30-40 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop" },
    { name: "Pind Balluchi",           cuisine: "Punjabi • North Indian", category: "punjabi",     rating: 4.6, reviews: 567,  location: "Rajouri Garden",                deliveryTime: "35-45 min", deliveryFee: 30, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=250&fit=crop" },
    { name: "Bikanervala",             cuisine: "Punjabi • Sweets",       category: "punjabi",     rating: 4.4, reviews: 1234, location: "Karol Bagh",                    deliveryTime: "25-35 min", deliveryFee: 25, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop" },
    { name: "Sagar Ratna",             cuisine: "South Indian",           category: "south-indian",rating: 4.5, reviews: 892,  location: "Lajpat Nagar",                  deliveryTime: "20-30 min", deliveryFee: 20, image: "https://images.unsplash.com/photo-1630384060421-cf20c0e2e8c6?w=400&h=250&fit=crop" },
    { name: "Mamagoto",                cuisine: "Chinese • Asian",        category: "chinese",     rating: 4.7, reviews: 654,  location: "Hauz Khas",                     deliveryTime: "30-40 min", deliveryFee: 40, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=250&fit=crop" },
];

const menuData = {
    "Sharma Ji Ki Kachori": [
        { name: "Pyaz Kachori",  price: 80,  isVeg: true,  description: "Crispy kachori with onion filling" },
        { name: "Aloo Kachori",  price: 70,  isVeg: true,  description: "Potato stuffed kachori" },
        { name: "Samosa",        price: 25,  isVeg: true,  description: "Crispy triangular snack" },
        { name: "Jalebi",        price: 60,  isVeg: true,  description: "Sweet spiral shaped dessert" },
        { name: "Chai",          price: 20,  isVeg: true,  description: "Masala tea" },
    ],
    "Bombay Chaiwala": [
        { name: "Masala Chai",   price: 25,  isVeg: true,  description: "Spiced tea" },
        { name: "Vada Pav",      price: 40,  isVeg: true,  description: "Mumbai special burger" },
        { name: "Pav Bhaji",     price: 90,  isVeg: true,  description: "Mixed vegetable curry with bread" },
        { name: "Bun Maska",     price: 35,  isVeg: true,  description: "Butter bread with chai" },
        { name: "Cutting Chai",  price: 15,  isVeg: true,  description: "Small strong tea" },
    ],
    "Gangaram Chaat Bhandar": [
        { name: "Aloo Tikki",    price: 50,  isVeg: true,  description: "Crispy potato patty with chutney" },
        { name: "Gol Gappe",     price: 40,  isVeg: true,  description: "6 pieces with spicy water" },
        { name: "Papdi Chaat",   price: 60,  isVeg: true,  description: "Crispy papdi with yogurt" },
        { name: "Dahi Bhalla",   price: 55,  isVeg: true,  description: "Lentil dumplings in yogurt" },
        { name: "Chole Bhature", price: 90,  isVeg: true,  description: "Spicy chickpeas with fried bread" },
    ],
    "Pind Balluchi": [
        { name: "Butter Chicken",price: 350, isVeg: false, description: "Creamy tomato based curry" },
        { name: "Dal Makhani",   price: 220, isVeg: true,  description: "Black lentils slow cooked" },
        { name: "Naan",          price: 40,  isVeg: true,  description: "Tandoor baked bread" },
        { name: "Paneer Tikka",  price: 280, isVeg: true,  description: "Grilled cottage cheese" },
        { name: "Gulab Jamun",   price: 80,  isVeg: true,  description: "Sweet milk dumplings" },
    ],
    "Bikanervala": [
        { name: "Raj Kachori",   price: 90,  isVeg: true,  description: "Large kachori with all toppings" },
        { name: "Ghevar",        price: 120, isVeg: true,  description: "Traditional Rajasthani sweet" },
        { name: "Soan Papdi",    price: 80,  isVeg: true,  description: "Flaky sweet" },
        { name: "Kaju Katli",    price: 150, isVeg: true,  description: "Cashew sweet (250g)" },
    ],
    "Sagar Ratna": [
        { name: "Masala Dosa",   price: 120, isVeg: true,  description: "Crispy dosa with potato filling" },
        { name: "Idli Sambar",   price: 80,  isVeg: true,  description: "Soft idli with sambar & chutney" },
        { name: "Uttapam",       price: 100, isVeg: true,  description: "Thick dosa with vegetables" },
        { name: "Vada",          price: 60,  isVeg: true,  description: "Crispy lentil fritters" },
        { name: "Filter Coffee", price: 40,  isVeg: true,  description: "South Indian decoction coffee" },
    ],
    "Mamagoto": [
        { name: "Veg Dimsums",     price: 160, isVeg: true,  description: "Steamed dumplings, 6 pcs" },
        { name: "Chicken Dimsums", price: 200, isVeg: false, description: "Chicken dumplings, 6 pcs" },
        { name: "Hakka Noodles",   price: 180, isVeg: true,  description: "Wok tossed noodles" },
        { name: "Fried Rice",      price: 160, isVeg: true,  description: "Egg fried rice" },
    ],
};

async function seedDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ MongoDB Connected');

        // Purana data delete karo
        await Restaurant.deleteMany({});
        await MenuItem.deleteMany({});
        console.log('🗑️  Old data deleted');

        // Restaurants insert karo
        const insertedRestaurants = await Restaurant.insertMany(restaurantData);
        console.log(`✅ ${insertedRestaurants.length} restaurants added`);

        // Menu items insert karo
        let menuItems = [];
        for (const rest of insertedRestaurants) {
            const items = menuData[rest.name] || [];
            items.forEach(item => {
                menuItems.push({ ...item, restaurantId: rest._id });
            });
        }
        await MenuItem.insertMany(menuItems);
        console.log(`✅ ${menuItems.length} menu items added`);

        console.log('\n🎉 Database seed ho gayi! Ab server chalaao: node server.js');
        process.exit(0);
    } catch (err) {
        console.error('❌ Seed Error:', err.message);
        process.exit(1);
    }
}

seedDB();
