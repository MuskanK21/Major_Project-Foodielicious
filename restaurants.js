

// ALL RESTAURANTS MENU DATA
const allMenus = {
    1: {  // Sharma Ji Ki Kachori
        name: "Sharma Ji Ki Kachori",
        image: "https://www.bing.com/images/search?view=detailV2&ccid=oDTPfsX9&id=1F716015604E9D340C4191779C7875FF990196E2&thid=OIP.oDTPfsX9xvI-fdyU2ltDvAHaEK&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe1%2F92%2F47%2Fe19247c5a57f35814c349bf8e494b54d.jpg&exph=1462&expw=2600&q=kachori+images&form=IQFRBA&ck=E4C58663210121796F0A88D8E4837A86&selectedindex=1&ajaxhist=0&ajaxserp=0&vt=0&sim=11",
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
        image: "https://www.bing.com/images/search?view=detailV2&ccid=sT4QYPOU&id=85AC736B0412256CE52BC0BCBEF67E9D99FB34CF&thid=OIP.sT4QYPOU69qzcgpluSC0BgHaHa&mediaurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100067434963607&exph=960&expw=959&q=bombay+chaiwala&form=IRPRST&ck=9158014553940874C639B3A4A6F9CB0A&selectedindex=16&itb=0&cw=1375&ch=628&ajaxhist=0&ajaxserp=0&vt=0&sim=11",
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
        image: "https://www.bing.com/images/search?view=detailV2&ccid=3q7nzUl5&id=03BA4350C7D73A253EC33DF7264428826E83932A&thid=OIP.3q7nzUl5rUrXzqIioJ9HxQHaFj&mediaurl=https%3A%2F%2Fwww.carolinescooking.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fpapdi-chaat-photo-1024x768.jpg&exph=768&expw=1024&q=chaat+papdi&FORM=IRPRST&ck=66CD55B906DAC240D24AE21937D64F1E&selectedIndex=7&itb=0&cw=1375&ch=628&ajaxhist=0&ajaxserp=0",
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
        image: "https://www.bing.com/images/search?view=detailV2&ccid=dOFa9Q7f&id=EBCB016E15165EEF61746C21B2412FD69CAF2276&thid=OIP.dOFa9Q7fXCP7AAk6wxihFwHaDN&mediaurl=https%3A%2F%2Fwww.lsretail.com%2Fhubfs%2FSagar+Ratna.jpg&exph=380&expw=878&q=sagar+ratna+image&FORM=IRPRST&ck=6E8CA2C93471D2E31C2A456ABB885F9B&selectedIndex=13&itb=0&cw=1375&ch=628&ajaxhist=0&ajaxserp=0",
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