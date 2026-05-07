

// ALL RESTAURANTS MENU DATA
const allMenus = {
    1: {  // Sharma Ji Ki Kachori
        name: "Sharma Ji Ki Kachori",
        image: "https://images.unsplash.com/photo-1625937287334-9c5bd9e59003?w=400&h=250&fit=crop",
        cuisine: "Street Food",
        rating: 4.5,
        location: "Old Delhi, Near Chandni Chowk",
        delivery: "25-35 min",
        items: [
            { id: 101, name: "Pyaaz Kachori", price: 25, veg: true, desc: "Crispy kachori with onion filling" },
            { id: 102, name: "Dal Kachori", price: 30, veg: true, desc: "Stuffed with spicy dal" },
            { id: 103, name: "Samosa", price: 20, veg: true, desc: "Crispy samosa with aloo filling" }
        ]
    },
    2: {  // Bombay Chaiwala
        name: "Bombay Chaiwala",
        image: "https://images.unsplash.com/photo-1567925084989-9d6f2f5f8b4a?w=400&h=250&fit=crop",
        cuisine: "Cafe • Street Food",
        rating: 4.3,
        location: "Connaught Place",
        delivery: "20-30 min",
        items: [
            { id: 201, name: "Cutting Chai", price: 15, veg: true, desc: "Strong masala chai" },
            { id: 202, name: "Vada Pav", price: 30, veg: true, desc: "Mumbai style vada pav" }
        ]
    },
    3: {  // Gangaram Chaat Bhandar
        name: "Gangaram Chaat Bhandar",
        image: "https://images.unsplash.com/photo-1606491956689-2ea11e9e9f8c?w=400&h=250&fit=crop",
        cuisine: "Street Food • Chaat",
        rating: 4.8,
        location: "Chandni Chowk",
        delivery: "30-40 min",
        items: [
            { id: 301, name: "Aloo Tikki", price: 40, veg: true, desc: "Crispy tikki with chutney" },
            { id: 302, name: "Papdi Chaat", price: 50, veg: true, desc: "Sweet & spicy chaat" }
        ]
    },
    4: {  // Pind Balluchi
        name: "Pind Balluchi",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=250&fit=crop",
        cuisine: "Punjabi • North Indian",
        rating: 4.6,
        location: "Rajouri Garden",
        delivery: "35-45 min",
        items: [
            { id: 401, name: "Butter Chicken", price: 350, veg: false, desc: "Creamy tomato based curry" },
            { id: 402, name: "Dal Makhani", price: 220, veg: true, desc: "Black lentils slow cooked" }
        ]
    },
    5: {  // Bikanervala
        name: "Bikanervala",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop",
        cuisine: "Punjabi • Sweets",
        rating: 4.4,
        location: "Karol Bagh",
        delivery: "25-35 min",
        items: [
            { id: 501, name: "Raj Kachori", price: 90, veg: true, desc: "Large kachori with toppings" },
            { id: 502, name: "Kaju Katli", price: 150, veg: true, desc: "Cashew sweet" }
        ]
    },
    6: {  // Sagar Ratna
        name: "Sagar Ratna",
        image: "https://images.unsplash.com/photo-1630384060421-cf20c0e2e8c6?w=400&h=250&fit=crop",
        cuisine: "South Indian",
        rating: 4.5,
        location: "Lajpat Nagar",
        delivery: "20-30 min",
        items: [
            { id: 601, name: "Masala Dosa", price: 70, veg: true, desc: "Crispy dosa with potato filling" },
            { id: 602, name: "Idli Sambar", price: 35, veg: true, desc: "Soft idli with sambar" }
        ]
    },
    7: {  // Mamagoto
        name: "Mamagoto",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=250&fit=crop",
        cuisine: "Chinese • Asian",
        rating: 4.7,
        location: "Hauz Khas",
        delivery: "30-40 min",
        items: [
            { id: 701, name: "Veg Dimsums", price: 160, veg: true, desc: "Steamed dumplings" },
            { id: 702, name: "Hakka Noodles", price: 180, veg: true, desc: "Wok tossed noodles" }
        ]
    }
};