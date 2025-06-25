const productsData = [
    {
    id: 'p102',
    name: 'Organic Full Cream Milk',
    description: '100% pure and organic full cream milk, no preservatives.',
    category: 'dairy',
    basePrice: 60, 
    image:'images/organic milk.webp',
    variants: [
        {
            id: 'v102_500ml',
            name: '500 ml',
            weight: '500 ml', 
            price: 35.00, 
            stock: 100,
            images: [ 
                'images/organic milk.webp',
                'images/Organic Full Cream Milk.jpeg' 
            ]
        }, 
        {
            id: 'v102_1l',
            name: '1 Litre',
            weight: '1 Litre', 
            price: 60.00,
            stock: 80,
            images: [ 
                
                'images/Organic Full Cream Milk.jpeg',
                'images/Organic Full Cream Milk.jpeg' 
            ]
        },
        {
            id: 'v102_2l',
            name: '2 Litre',
            weight: '2 Litre', 
            price: 110.00,
            stock: 40,
            images: [ 
                'images/organic milk.webp',
                'images/organic milk.webp'
            ]
        }
    ],
    specifications: {
        "Brand": "PureMoo Organics",
        "Type": "Full Cream",
        "Nutritional Info (per 100ml)": "60 kcal, 3.2g Protein, 3.5g Fat, 4.8g Carbs",
        "Ingredients": "Pasteurized Organic Cow Milk",
        "Shelf Life": "3 days (refrigerated)"
    },
    reviews: [
        { id: 3, userId: 'u003', userName: 'Priya M.', rating: 5, comment: 'Best milk I\'ve ever tasted. Rich and creamy.', date: '2025-05-18' },
        { id: 4, userId: 'u001', userName: 'Aisha K.', rating: 4, comment: 'Good quality, but quickly expires.', date: '2025-05-25' }
    ],
    averageRating: 4.5
    },
    {
        "id": "p101",
        "name": "Fresh Apples",
        "description": "Crisp and juicy Himalayan apples, hand-picked for quality.",
        "category": "fruits",
        "basePrice": null,
        "image": "images/fresh Apples.jpg",
        "variants": [
        {
            "id": "v101_1kg",
            "name": "1 Kg",
            "weight": "1 Kg",
            "price": 120.00,
            "stock": 50,
            "images": [
            "images/Apples 1kg.webp","images/Apples 1kg.webp"
            ]
        },
        {
            "id": "v101_2kg",
            "name": "2 Kg",
            "weight": "2 Kg",
            "price": 220.00,
            "stock": 30,
            "images": [
            "images/Apples 1kg.webp","images/Apples 1kg.webp"
            ]
        },
        {
            "id": "v101_5kg",
            "name": "5 Kg",
            "weight": "5 Kg",
            "price": 500.00,
            "stock": 10,
            "images": [
            "images/Apples 1kg.webp","images/Apples 1kg.webp"
            ]
        }
        ],
        "offers": [
        "Flat 10% Off on Fruits: Get 10% discount on all fruit purchases above ₹300.",
        "₹50 Off on orders above ₹1000: Apply coupon \"SHOPSMART50\" for ₹50 discount. (Coupon: SHOPSMART50)"
        ],
        "specifications": {
        "Brand": "Himalayan Fresh",
        "Origin": "Shimla, Himachal Pradesh, India",
        "Nutritional Info (per 100g)": "52 kcal, 0.3g Protein, 0.2g Fat, 13.8g Carbs",
        "Storage Instructions": "Refrigerate for best results",
        "Shelf Life": "7-10 days"
        },
        "reviews": [
        {
            "id": 1,
            "userId": "u001",
            "userName": "Aisha K.",
            "rating": 5,
            "comment": "Excellent quality, very fresh!",
            "date": "2025-05-20"
        },
        {
            "id": 2,
            "userId": "u002",
            "userName": "Rahul S.",
            "rating": 4,
            "comment": "Good size, slightly expensive.",
            "date": "2025-05-22"
        }
        ],
        "averageRating": 4.5
    },
    {
        "id": "p103",
        "name": "Basmati Rice (Premium)",
        "description": "Extra long grain aged basmati rice for aromatic dishes.",
        "category": "grains",
        "basePrice": 150,
        "image": "images/Basmati Rice (Premium).jpg",
        "variants": [
        {
            "id": "v103_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 150,
            "stock": 70,
            "images": ['images/basmati rice 1kg.jpg','images/basmati rice again 1kg.jpg']
        },
        {
            "id": "v103_2kg",
            "name": "2 Kg",
            "weight": null,
            "price": 280,
            "stock": 50,
            "images": ['images/basmati rice 1kg.jpg','images/basmati rice again 1kg.jpg']
        },
        {
            "id": "v103_5kg",
            "name": "5 Kg",
            "weight": null,
            "price": 650,
            "stock": 25,
            "images": ['images/basmati rice 5kg.jpg','images/basmati rice again 5kgs.jpg']
        },
        {
            "id": "v103_10kg",
            "name": "10 Kg",
            "weight": null,
            "price": 1200,
            "stock": 15,
            "images": ['images/basmati rice 10 kgs.webp','images/basmati rice again 10kgs.jpg']
        }
        ],
        "specifications": {
        "Brand": "Golden Harvest",
        "Grain Type": "Extra Long Grain Basmati",
        "Aging": "2 years",
        "Cooking Instructions": "Soak for 30 mins, cook 1:2 ratio with water.",
        "Certifications": "FSSAI Certified"
        },
        "reviews": [
        {
            "id": 5,
            "userId": "u004",
            "userName": "Vikram R.",
            "rating": 5,
            "comment": "Perfect for biryani. Excellent aroma.",
            "date": "2025-05-10"
        },
        {
            "id": 6,
            "userId": "u005",
            "userName": "Sonia D.",
            "rating": 4,
            "comment": "Good, but found a cheaper option elsewhere.",
            "date": "2025-05-15"
        }
        ],
        "averageRating": 4.5
    },
    {
        "id": "p104",
        "name": "Fresh Bananas",
        "description": "Naturally sweet and energy-rich bananas, perfect for a healthy snack.",
        "category": "fruits",
        "basePrice": 50,
        "image": "images/fresh bananas.jpg",
        "variants": [
        {
            "id": "v104_1kg",
            "name": "500g (approx 4-5 pcs)",
            "weight": null,
            "price": 50,
            "stock": 80,
            "images": ['images/bananas half dozen.jpg','images/half dozen bananas.jpg']
        },
        {
            "id": "v104_0_5kg",
            "name": "1Kg (approx 10-12 pcs)",
            "weight": null,
            "price": 30,
            "stock": 120,
            "images": ['images/bananas 1 dozen.webp','images/bananas 1 dozen.webp']
        }
        ],
        "specifications": {
        "Brand": "Local Farms",
        "Origin": "South India",
        "Nutritional Info (per 100g)": "89 kcal, 1.1g Protein, 0.3g Fat, 22.8g Carbs",
        "Storage Instructions": "Store at room temperature; refrigerate once ripe.",
        "Shelf Life": "3-5 days"
        },
        "reviews": [
        {
            "id": 7,
            "userId": "u006",
            "userName": "Deepak V.",
            "rating": 4,
            "comment": "Good quality bananas, mostly fresh.",
            "date": "2025-05-28"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p105",
        "name": "Milky Mist Paneer",
        "description": "Soft and fresh paneer, ideal for curries and snacks.",
        "category": "dairy",
        "basePrice": 200,
        "image": "images/milky mist paneer.jpg",
        "variants": [
        {
            "id": "v105_200g",
            "name": "200g",
            "weight": null,
            "price": 100,
            "stock": 60,
            "images": ['images/milky mist 200g.webp','images/milky mist details.jpg']
        },
        {
            "id": "v105_500g",
            "name": "500g",
            "weight": null,
            "price": 250,
            "stock": 40,
            "images": ['images/milky mist 500gs.webp','images/milky mist 2.jpg']
        }
        ],
        "specifications": {
        "Brand": "DairyDelight",
        "Type": "Fresh Paneer",
        "Nutritional Info (per 100g)": "265 kcal, 18.3g Protein, 20.8g Fat, 1.2g Carbs",
        "Ingredients": "Milk solids, Citric acid",
        "Shelf Life": "5 days (refrigerated)"
        },
        "reviews": [
        {
            "id": 8,
            "userId": "u007",
            "userName": "Anjali P.",
            "rating": 5,
            "comment": "Very soft and creamy, perfect for my recipes.",
            "date": "2025-05-30"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p106",
        "name": "Ashirvad Whole Wheat Atta",
        "description": "Finely milled whole wheat flour, perfect for soft rotis.",
        "category": "grains",
        "basePrice": 180,
        "image": "images/Ashirvad wheat atta.jpg",
        "variants": [
        {
            "id": "v106_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 60,
            "stock": 90,
            "images": ['images/ashirvad 1kg.webp','images/ashirvad detsil.jpg','images/ashirvad 2 1kg.jpg','images/ashirvad 3.jpg']
        },
        {
            "id": "v106_5kg",
            "name": "5 Kg",
            "weight": null,
            "price": 300,
            "stock": 20,
            "images": ['images/ashirvad 5kg.jpg','images/ashirvad detail1.jpg','images/ashirvad 2.jpg']
        }
        ],
        "specifications": {
        "Brand": "Shakti Bhog",
        "Type": "Whole Wheat Flour",
        "Ingredients": "100% Whole Wheat",
        "Shelf Life": "6 months (store in cool, dry place)"
        },
        "reviews": [
        {
            "id": 9,
            "userId": "u008",
            "userName": "Karan L.",
            "rating": 4,
            "comment": "Makes good rotis. Consistent quality.",
            "date": "2025-06-01"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p107",
        "name": "Organic Eggs",
        "description": "Farm-fresh organic eggs, rich in protein.",
        "category": "dairy",
        "basePrice": 80,
        "image": "images/eggs 6.jpg",
        "variants": [
        {
            "id": "v107_6pcs",
            "name": "6 Pcs",
            "weight": null,
            "price": 80,
            "stock": 70,
            "images": ['images/eggs 6.webp','images/egg 6.jpg']
        },
        {
            "id": "v107_30pcs",
            "name": "30 Pcs",
            "weight": null,
            "price": 245,
            "stock": 40,
            "images": ['images/eggs 30.webp','images/egg 30.jpg']
        }
        ],
        "specifications": {
        "Brand": "Happy Hens",
        "Type": "Organic Brown Eggs",
        "Nutritional Info (per egg)": "70 kcal, 6g Protein, 5g Fat",
        "Storage Instructions": "Refrigerate",
        "Shelf Life": "2-3 weeks"
        },
        "reviews": [
        {
            "id": 10,
            "userId": "u009",
            "userName": "Rohan G.",
            "rating": 5,
            "comment": "Excellent quality, highly recommend.",
            "date": "2025-05-29"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p108",
        "name": "MAGGI Nutri-licious Veg Atta Masala Noodles",
        "description": "Healthy and tasty whole wheat noodles, ready in minutes.",
        "category": "grains",
        "basePrice": 150,
        "image": "images/maggi noodles.jpg",
        "variants": [
        {
            "id": "v108_70g_x4",
            "name": "72.5g (pack of 1)",
            "weight": null,
            "price": 25,
            "stock": 100,
            "images": ['images/maggi1.webp','images/maggi11.jpg','images/maggi111.jpg','images/maggi1111.jpg']
        },
        {
            "id": "v108_280g",
            "name": "72.5g (pack of 12)",
            "weight": null,
            "price": 165,
            "stock": 50,
            "images": ['images/maggi12.jpg','images/maggi121.jpg','images/maggi1211.jpg','images/maggi12111.jpg']
        }
        ],
        "specifications": {
        "Brand": "Maggi Atta",
        "Ingredients": "Whole wheat flour, Edible vegetable oil, Salt",
        "Cooking Time": "3 minutes",
        "Flavour": "Masala"
        },
        "reviews": [
        {
            "id": 11,
            "userId": "u010",
            "userName": "Meena K.",
            "rating": 4,
            "comment": "Quick and easy, relatively healthy.",
            "date": "2025-06-03"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p109",
        "name": "Fresh Mini Orange",
        "description": "Sweet and tangy oranges, packed with Vitamin C.",
        "category": "fruits",
        "basePrice": 90,
        "image": "images/mini fresh oranges.jpg",
        "variants": [
        {
            "id": "v109_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 342.40,
            "stock": 60,
            "images": ['images/mini oranges 1kg.webp','images/mini oranges 1kg.jpg']
        }
        ],
        "specifications": {
        "Brand": "SunKissed Farms",
        "Origin": "Nagpur, Maharashtra",
        "Nutritional Info (per 100g)": "47 kcal, 0.9g Protein, 0.1g Fat, 11.8g Carbs",
        "Storage Instructions": "Refrigerate for freshness",
        "Shelf Life": "5-7 days"
        },
        "reviews": [
        {
            "id": 12,
            "userId": "u011",
            "userName": "Pooja R.",
            "rating": 5,
            "comment": "Very juicy and sweet!",
            "date": "2025-06-02"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p110",
        "name": "Greek Yogurt",
        "description": "Thick and creamy Greek yogurt, high in protein.",
        "category": "dairy",
        "basePrice": 120,
        "image": "images/greek yogurt.webp",
        "variants": [
        {
            "id": "v110_100g",
            "name": "100g",
            "weight": null,
            "price": 40,
            "stock": 80,
            "images": ['images/yogurt1.jpg','images/yogurt11.jpg','images/yogurt111.jpg']
        },
        ],
        "specifications": {
        "Brand": "Epigamia",
        "Type": "Plain Greek Yogurt",
        "Nutritional Info (per 100g)": "90 kcal, 10g Protein, 4g Fat, 3g Carbs",
        "Ingredients": "Pasteurized toned milk, Live active cultures",
        "Shelf Life": "7 days (refrigerated)"
        },
        "reviews": [
        {
            "id": 13,
            "userId": "u012",
            "userName": "Kabir D.",
            "rating": 5,
            "comment": "Perfect for breakfast, very satisfying.",
            "date": "2025-06-04"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p111",
        "name": "Nutriorg Rolled Oats",
        "description": "Healthy rolled oats, excellent for breakfast or baking.",
        "category": "grains",
        "basePrice": 200,
        "image": "images/nutri1.webp",
        "variants": [
        {
            "id": "v111_400g",
            "name": "400g",
            "weight": null,
            "price": 149,
            "stock": 75,
            "images": ['images/nutri1.webp','images/nutri11.jpg','images/nutri111.jpg']
        },
        {
            "id": "v111_1.2kg",
            "name": "1.2 Kg(Pack of 3*400g)",
            "weight": null,
            "price": 299,
            "stock": 45,
            "images": ['images/nutri1.jpg','images/nutri11.jpg','images/nutri111.jpg']
        }
        ],
        "specifications": {
        "Brand": "Quaker",
        "Type": "Rolled Oats",
        "Nutritional Info (per 100g)": "389 kcal, 16.9g Protein, 6.9g Fat, 66.3g Carbs",
        "Ingredients": "100% Whole Grain Rolled Oats",
        "Cooking Time": "5 minutes"
        },
        "reviews": [
        {
            "id": 14,
            "userId": "u013",
            "userName": "Sunita B.",
            "rating": 4,
            "comment": "Good quality oats, consistent.",
            "date": "2025-05-31"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p112",
        "name": "Green Grapes",
        "description": "Sweet and seedless green grapes, a refreshing treat.",
        "category": "Dry fruits",
        "basePrice": 100,
        "image": "images/dry grapes.jpg",
        "variants": [
        {
            "id": "v112_500g",
            "name": "500g",
            "weight": null,
            "price": 195,
            "stock": 60,
            "images": ['images/dry grapes.jpg','images/dry grapes11.jpg','images/grapes1.jpg']
        },
        ],
        "specifications": {
        "Brand": "FarmFresh",
        "Origin": "Nashik, Maharashtra",
        "Nutritional Info (per 100g)": "69 kcal, 0.7g Protein, 0.2g Fat, 18.1g Carbs",
        "Storage Instructions": "Refrigerate unwashed",
        "Shelf Life": "4-6 days"
        },
        "reviews": [
        {
            "id": 15,
            "userId": "u014",
            "userName": "Rajesh K.",
            "rating": 4,
            "comment": "Mostly sweet, good for snacks.",
            "date": "2025-06-05"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p113",
        "name": "D-lecta Cheese Slices",
        "description": "Processed cheese slices, perfect for sandwiches and burgers.",
        "category": "dairy",
        "basePrice": 150,
        "image": "images/cheese slices.jpg",
        "variants": [
        {
            "id": "v113_100g",
            "name": "100g (10 slices)",
            "weight": null,
            "price": 62,
            "stock": 50,
            "images": ['images/slice1.webp','images/slice11.jpg','images/slice111.jpg','images/slice1111.jpg']
        },
        ],
        "specifications": {
        "Brand": "Amul",
        "Type": "Processed Cheese",
        "Ingredients": "Cheddar cheese, Emulsifying salts",
        "Storage Instructions": "Refrigerate",
        "Shelf Life": "9 months (unopened)"
        },
        "reviews": [
        {
            "id": 16,
            "userId": "u015",
            "userName": "Nitish S.",
            "rating": 4,
            "comment": "Standard quality, melts well.",
            "date": "2025-06-01"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p114",
        "name": "ANGUR Toor Dal",
        "description": "High-quality toor dal, essential for Indian cooking.",
        "category": "grains",
        "basePrice": 120,
        "image": "images/toor dal.jpg",
        "variants": [
        {
            "id": "v114_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 315.00,
            "stock": 40,
            "images": ['images/dal 1kg.webp','images/dal11kg.jpg', 'images/dal111kg.jpg','images/dal1kgs.jpg']
        }
        ],
        "specifications": {
        "Brand": "Tata Sampann",
        "Type": "Toor Dal",
        "Protein": "22g per 100g",
        "Cooking Time": "15-20 minutes",
        "Certifications": "FSSAI Certified"
        },
        "reviews": [
        {
            "id": 17,
            "userId": "u016",
            "userName": "Geeta M.",
            "rating": 5,
            "comment": "Cooks quickly and tastes great in dal.",
            "date": "2025-06-06"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p115",
        "name": "Pomegranate",
        "description": "Juicy and vibrant pomegranates, rich in antioxidants.",
        "category": "fruits",
        "basePrice": 180,
        "image": "images/pomegranate.jpg",
        "variants": [
        {
            "id": "v115_1pc",
            "name": "4 Pcs 800g",
            "weight": null,
            "price": 247,
            "stock": 50,
            "images": ['images/promoganate.jpg','images/promomganate1.jpg','images/promo.jpg']
        },
        {
            "id": "v115_2pc",
            "name": "2 Pcs 400",
            "weight": null,
            "price": 86,
            "stock": 25,
            "images": ['images/promoganate.jpg','images/promomganate1.jpg','images/promo.jpg']
        }
        ],
        "specifications": {
        "Brand": "FreshBasket",
        "Origin": "Maharashtra",
        "Nutritional Info (per 100g)": "83 kcal, 1.7g Protein, 1.2g Fat, 18.7g Carbs",
        "Storage Instructions": "Refrigerate for up to 2 weeks",
        "Season": "Seasonal availability"
        },
        "reviews": [
        {
            "id": 18,
            "userId": "u017",
            "userName": "Swati R.",
            "rating": 4,
            "comment": "Good quality, sometimes a bit sour.",
            "date": "2025-06-07"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p116",
        "name": "Amul Butter (Unsalted)",
        "description": "Pure unsalted butter, perfect for baking and cooking.",
        "category": "dairy",
        "basePrice": 220,
        "image": "images/Amul butter.jpg",
        "variants": [
        {
            "id": "v116_100g",
            "name": "100g",
            "weight": null,
            "price": 62,
            "stock": 70,
            "images": ['images/amul 100.webp','images/amul 1100.jpg','images/amul1001.jpg']
        },
        {
            "id": "v116_500g",
            "name": "500g",
            "weight": null,
            "price": 295,
            "stock": 35,
            "images": ['images/amul 100.webp','images/amul 1100.jpg','images/amul1001.jpg']
        }
        ],
        "specifications": {
        "Brand": "Amul",
        "Type": "Unsalted Butter",
        "Ingredients": "Milk Fat",
        "Storage Instructions": "Refrigerate",
        "Shelf Life": "6 months (unopened)"
        },
        "reviews": [
        {
            "id": 19,
            "userId": "u018",
            "userName": "Chef Anand",
            "rating": 5,
            "comment": "Essential for my pastries, excellent quality.",
            "date": "2025-06-08"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p117",
        "name": "Multi-Grain Bread",
        "description": "Wholesome multi-grain bread, packed with fibre.",
        "category": "grains",
        "basePrice": 80,
        "image": "images/bread1.jpg",
        "variants": [
        {
            "id": "v117_450g",
            "name": "450g ",
            "weight": null,
            "price": 80,
            "stock": 60,
            "images": ['images/bread1.jpg','images/bread11.jpg','images/bread111.jpg']
        }
        ],
        "specifications": {
        "Brand": "Britannia",
        "Type": "Multi-Grain",
        "Ingredients": "Wheat flour, Multigrain flour, Yeast, Salt",
        "Storage Instructions": "Store in cool, dry place",
        "Shelf Life": "3 days"
        },
        "reviews": [
        {
            "id": 20,
            "userId": "u019",
            "userName": "Aditi S.",
            "rating": 4,
            "comment": "Great for sandwiches, fresh.",
            "date": "2025-06-09"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p118",
        "name": "Potatoes",
        "description": "Fresh and versatile potatoes, good for all culinary uses.",
        "category": "vegetables",
        "basePrice": 40,
        "image": "images/p9wskr5m.png",
        "variants": [
        {
            "id": "v118_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 40,
            "stock": 100,
            "images": ['images/p9wskr5m.png','images/potato1.jpg']
        },
        {
            "id": "v118_2kg",
            "name": "2 Kg",
            "weight": null,
            "price": 75,
            "stock": 60,
            "images": ['images/p9wskr5m.png','images/potato1.jpg']
        }
        ],
        "specifications": {
        "Brand": "Local Sourced",
        "Origin": "Nashik",
        "Storage Instructions": "Store in a cool, dark place",
        "Best For": "Curries, Fries, Boiled"
        },
        "reviews": [
        {
            "id": 21,
            "userId": "u020",
            "userName": "Gaurav P.",
            "rating": 4,
            "comment": "Standard quality potatoes.",
            "date": "2025-06-05"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p119",
        "name": "Onions",
        "description": "Fresh red onions, essential for everyday cooking.",
        "category": "vegetables",
        "basePrice": 30,
        "image": "images/onions.webp",
        "variants": [
        {
            "id": "v119_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 30,
            "stock": 120,
            "images": ['images/onions1.webp', 'images/onions11.jpg', 'images/onions111.jpg']
        },
        {
            "id": "v119_2kg",
            "name": "2 Kg",
            "weight": null,
            "price": 55,
            "stock": 70,
            "images": ['images/onions1.webp', 'images/onions11.jpg', 'images/onions111.jpg']
        }
        ],
        "specifications": {
        "Brand": "Local Sourced",
        "Origin": "Maharashtra",
        "Storage Instructions": "Store in a cool, dry, well-ventilated place",
        "Usage": "Curries, Salads, Soups"
        },
        "reviews": [
        {
            "id": 22,
            "userId": "u021",
            "userName": "Priya S.",
            "rating": 5,
            "comment": "Very fresh and good size.",
            "date": "2025-06-06"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p120",
        "name": "Fresh Tomatoes (Hybrid)",
        "description": "Juicy red tomatoes, perfect for salads and cooking.",
        "category": "vegetables",
        "basePrice": 50,
        "image": "images/fresh tomato hybrid.webp",
        "variants": [
        {
            "id": "v120_500g",
            "name": "500g",
            "weight": null,
            "price": 20,
            "stock": 90,
            "images": ['images/fresh tomato hybrid.webp','images/tomotato1.jpg']
        },
        {
            "id": "v120_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 39,
            "stock": 50,
            "images": ['images/fresh tomato hybrid.webp','images/tomotato1.jpg']
        }
        ],
        "specifications": {
        "Brand": "FarmFresh",
        "Origin": "Karnataka",
        "Storage Instructions": "Store at room temperature away from direct sunlight",
        "Type": "Hybrid Tomatoes"
        },
        "reviews": [
        {
            "id": 23,
            "userId": "u022",
            "userName": "Vivek K.",
            "rating": 4,
            "comment": "Fresh and good for cooking.",
            "date": "2025-06-07"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p121",
        "name": "Green Gallery Broccoli Fresh Organic Green Vegetable Seeds",
        "description": "Fresh green broccoli, rich in vitamins and minerals.",
        "category": "vegetables",
        "basePrice": 120,
        "image": "images/Broccoli.jpg",
        "variants": [
        {
            "id": "v121",
            "name": "pack of 50 seeds",
            "weight": null,
            "price": 120,
            "stock": 20,
            "images": ['images/Broccoli.jpg','images/broccli1.jpg','images/broc1.jpg']
        },
        {
            "id": "v121",
            "name": "pack of 100 seeds",
            "weight": null,
            "price": 200,
            "stock": 40,
            "images": ['images/Broccoli.jpg','images/broccli1.jpg','images/broc1.jpg']
        }
        ],
        "specifications": {
        "Brand": "GreenBasket",
        "Origin": "Local",
        "Storage Instructions": "Refrigerate in a loose plastic bag",
        "Best For": "Salads, Stir-fries"
        },
        "reviews": [
        {
            "id": 24,
            "userId": "u023",
            "userName": "Divya A.",
            "rating": 5,
            "comment": "Excellent quality, very fresh!",
            "date": "2025-06-08"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p122",
        "name": "Capsicum (Green)",
        "description": "Crisp green capsicum, adds flavor to any dish.",
        "category": "vegetables",
        "basePrice": 80,
        "image": "images/caps.jpg",
        "variants": [
        {
            "id": "v122_250g",
            "name": "250g",
            "weight": null,
            "price": 40,
            "stock": 70,
            "images": ['images/caps1.jpg','images/caps11.jpg']
        },
        {
            "id": "v122_500g",
            "name": "500g",
            "weight": null,
            "price": 80,
            "stock": 35,
            "images": ['images/caps1.jpg','images/caps11.jpg']
        }
        ],
        "specifications": {
        "Brand": "FreshHarvest",
        "Origin": "Local",
        "Storage Instructions": "Refrigerate in a plastic bag",
        "Usage": "Stir-fries, Salads, Pizza Topping"
        },
        "reviews": [
        {
            "id": 25,
            "userId": "u024",
            "userName": "Samar J.",
            "rating": 4,
            "comment": "Good for stir-fries, fresh.",
            "date": "2025-06-09"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p123",
        "name": "Spinach",
        "description": "Fresh spinach leaves, packed with iron and vitamins.",
        "category": "vegetables",
        "basePrice": 60,
        "image": "images/spinach.jpg",
        "variants": [
        {
            "id": "v123_250g",
            "name": "250g Bunch",
            "weight": null,
            "price": 42,
            "stock": 80,
            "images": ["images/spinach.jpg","images/spin.jpg"]
        },
        
        ],
        "specifications": {
        "Brand": "Local Farms",
        "Origin": "Local",
        "Storage Instructions": "Refrigerate in a damp cloth",
        "Best For": "Curries, Smoothies, Salads"
        },
        "reviews": [
        {
            "id": 26,
            "userId": "u025",
            "userName": "Neha D.",
            "rating": 5,
            "comment": "Very fresh and clean leaves.",
            "date": "2025-06-04"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p124",
        "name": "F1 Hybrid Cabbage Vegetable",
        "description": "Crisp green cabbage, versatile for Indian and Asian cuisines.",
        "category": "vegetables",
        "basePrice": 50,
        "image": "images/cabbage1.webp",
        "variants": [
        {
            "id": "v124_500g",
            "name": "500g Half",
            "weight": null,
            "price": 17.40,
            "stock": 70,
            "images": ['images/cabbage1.webp','images/cab1.jpg','images/cabbage1.jpg']
        },
        {
            "id": "v124_1kg",
            "name": "1 Kg Whole",
            "weight": null,
            "price": 32,
            "stock": 40,
            "images": ['images/cabbage1.webp','images/cab1.jpg','images/cabbage1.jpg']
        }
        ],
        "specifications": {
        "Brand": "FarmFresh",
        "Origin": "Local",
        "Storage Instructions": "Refrigerate whole",
        "Usage": "Salads, Stir-fries, Curries"
        },
        "reviews": [
        {
            "id": 27,
            "userId": "u026",
            "userName": "Pranav B.",
            "rating": 4,
            "comment": "Good for coleslaw, fresh.",
            "date": "2025-06-03"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p125",
        "name": "Cucumber",
        "description": "Cool and refreshing cucumbers, perfect for salads.",
        "category": "vegetables",
        "basePrice": 40,
        "image": "images/cucumber.webp",
        "variants": [
        {
            "id": "v125_250g",
            "name": "250g (1-2 pcs)",
            "weight": null,
            "price": 26,
            "stock": 90,
            "images": ['images/cucumber.webp','images/cucumber.jpg']
        },
        {
            "id": "v125_500g",
            "name": "500g (2-3 pcs)",
            "weight": null,
            "price": 45,
            "stock": 50,
            "images": ['images/cucumber.webp','images/cucumber.jpg']
        }
        ],
        "specifications": {
        "Brand": "GreenValley",
        "Origin": "Local",
        "Storage Instructions": "Refrigerate, use quickly after cutting",
        "Type": "Salad Cucumber"
        },
        "reviews": [
        {
            "id": 28,
            "userId": "u027",
            "userName": "Kriti S.",
            "rating": 5,
            "comment": "Crisp and fresh for my salads!",
            "date": "2025-06-02"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p126",
        "name": "Fresh Carrots",
        "description": "Sweet and crunchy carrots, excellent for health.",
        "category": "vegetables",
        "basePrice": 60,
        "image": "images/carrots.webp",
        "variants": [
        {
            "id": "v126_500g",
            "name": "500g",
            "weight": null,
            "price": 45,
            "stock": 85,
            "images": ['images/carrots.webp','images/carrots1.jpg','images/carrots11.jpg']
        },
        {
            "id": "v126_1kg",
            "name": "1 Kg",
            "weight": null,
            "price": 90,
            "stock": 45,
            "images": ['images/carrots.webp','images/carrots1.jpg','images/carrots11.jpg']
        }
        ],
        "specifications": {
        "Brand": "FarmFresh",
        "Origin": "Local",
        "Storage Instructions": "Refrigerate in a plastic bag",
        "Best For": "Salads, Juices, Curries"
        },
        "reviews": [
        {
            "id": 29,
            "userId": "u028",
            "userName": "Anil K.",
            "rating": 4,
            "comment": "Good quality, fresh.",
            "date": "2025-06-09"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p127",
        "name": "Fresh produce Lemons",
        "description": "Zesty and fresh lemons, perfect for drinks and cooking.",
        "category": "fruits",
        "basePrice": 80,
        "image": "images/fresh produce lemon.webp",
        "variants": [
        {
            "id": "v127_250g",
            "name": "250g (approx 3-4 pcs)",
            "weight": null,
            "price": 40,
            "stock": 100,
            "images": ['images/fresh produce lemon.webp','images/lemon1.jpg']
        },
        {
            "id": "v127_500g",
            "name": "500g (approx 6-8 pcs)",
            "weight": null,
            "price": 80,
            "stock": 60,
            "images": ['images/fresh produce lemon.webp','images/lemon1.jpg']
        }
        ],
        "specifications": {
        "Brand": "CitrusGrove",
        "Origin": "Local",
        "Storage Instructions": "Store at room temperature or refrigerate",
        "Usage": "Juice, Garnishing, Pickles"
        },
        "reviews": [
        {
            "id": 30,
            "userId": "u029",
            "userName": "Suresh P.",
            "rating": 5,
            "comment": "Very juicy lemons!",
            "date": "2025-06-08"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p128",
        "name": "Ginger",
        "description": "Fresh ginger root, adds a pungent flavor to dishes.",
        "category": "vegetables",
        "basePrice": 100,
        "image": "images/Ginger.webp",
        "variants": [
        {
            "id": "v128_100g",
            "name": "100g",
            "weight": null,
            "price": 12,
            "stock": 110,
            "images": ['images/Ginger.webp','images/ginger1.jpg','images/ginger.jpg']
        },
        {
            "id": "v128_250g",
            "name": "250g",
            "weight": null,
            "price": 29,
            "stock": 70,
            "images": ['images/Ginger.webp','images/ginger1.jpg','images/ginger.jpg']
        }
        ],
        "specifications": {
        "Brand": "SpiceRoute",
        "Origin": "Local",
        "Storage Instructions": "Store in a cool, dry place or refrigerate",
        "Uses": "Curries, Tea, Medicinal"
        },
        "reviews": [
        {
            "id": 31,
            "userId": "u030",
            "userName": "Kiran V.",
            "rating": 4,
            "comment": "Good quality, fresh aroma.",
            "date": "2025-06-07"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p129",
        "name": "Fresh Garlic",
        "description": "Pungent garlic bulbs, essential for Indian cooking.",
        "category": "vegetables",
        "basePrice": 150,
        "image": "images/garlic.jpg",
        "variants": [
        {
            "id": "v129_100g",
            "name": "100g",
            "weight": null,
            "price": 20,
            "stock": 100,
            "images": ['images/garlic.jpg','images/garlic1.jpg','images/garli.jpg']
        },
        {
            "id": "v129_250g",
            "name": "250g",
            "weight": null,
            "price": 35,
            "stock": 60,
            "images": ['images/garlic.jpg','images/garlic1.jpg','images/garli.jpg']
        }
        ],
        "specifications": {
        "Brand": "SpiceRoute",
        "Origin": "Local",
        "Storage Instructions": "Store in a cool, dry, dark place",
        "Uses": "Flavoring, Medicinal"
        },
        "reviews": [
        {
            "id": 32,
            "userId": "u031",
            "userName": "Ritu C.",
            "rating": 5,
            "comment": "Strong flavor, very fresh.",
            "date": "2025-06-06"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p130",
        "name": "Green Chillies",
        "description": "Spicy green chillies, adds heat to your dishes.",
        "category": "vegetables",
        "basePrice": 90,
        "image": "images/Green chillies.jpg",
        "variants": [
        {
            "id": "v130_100g",
            "name": "100g",
            "weight": null,
            "price": 12,
            "stock": 95,
            "images": ['images/Green chillies.jpg','images/chilli.jpg','images/chillies1.jpg']
        },
        {
            "id": "v130_250g",
            "name": "250g",
            "weight": null,
            "price": 27,
            "stock": 55,
            "images": ['images/Green chillies.jpg','images/chilli.jpg','images/chillies1.jpg']
        }
        ],
        "specifications": {
        "Brand": "FarmFresh",
        "Origin": "Local",
        "Storage Instructions": "Refrigerate in an airtight container",
        "Heat Level": "Medium to High"
        },
        "reviews": [
        {
            "id": 33,
            "userId": "u032",
            "userName": "Amit J.",
            "rating": 4,
            "comment": "Good and spicy!",
            "date": "2025-06-05"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p131",
        "name": "Heritage Curd",
        "description": "Fresh and thick curd, perfect for raita or as is.",
        "category": "dairy",
        "basePrice": 50,
        "image": "images/curd500.jpg",
        "variants": [
        {
            "id": "v131_500g",
            "name": "500g",
            "weight": null,
            "price": 93,
            "stock": 90,
            "images": ['images/curd500.jpg', 'images/curd1.jpg', 'images/curd11.jpg']
        },
        {
            "id": "v131_1kg",
            "name": "1kg",
            "weight": null,
            "price": 105,
            "stock": 50,
            "images": ['images/curd1kg.webp', 'images/curd1kg1.jpg', 'images/curd1kg11.jpg']
        }
        ],
        "specifications": {
        "Brand": "Mother Dairy",
        "Type": "Plain Dahi",
        "Nutritional Info (per 100g)": "60 kcal, 3.3g Protein, 3.2g Fat",
        "Storage Instructions": "Refrigerate",
        "Shelf Life": "5 days"
        },
        "reviews": [
        {
            "id": 34,
            "userId": "u033",
            "userName": "Sneha L.",
            "rating": 5,
            "comment": "Very fresh and set curd.",
            "date": "2025-06-09"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p132",
        "name": "NESTLE EVERYDAY SHAHI GHEE",
        "description": "Pure cow ghee, aromatic and healthy for cooking.",
        "category": "dairy",
        "basePrice": 600,
        "image": "images/Nestle ghee.webp",
        "variants": [
            {
            "id": "v132_1l",
            "name": "1 Litre",
            "weight": null,
            "price": 600,
            "stock": 10,
            "images": ['images/Nestle ghee.webp','images/ghee11.jpg','images/ghee1111.jpg']
        },
        {
            "id": "v132_200ml",
            "name": "200ml",
            "weight": null,
            "price": 125,
            "stock": 40,
            "images": ['images/Nestle ghee.webp','images/ghee11.jpg','images/ghee1111.jpg']
        },
        {
            "id": "v132_500ml",
            "name": "500ml",
            "weight": null,
            "price": 300,
            "stock": 20,
            "images": ['images/Nestle ghee.webp','images/ghee11.jpg','images/ghee1111.jpg']
        },
        
        ],
        "specifications": {
        "Brand": "Aashirvaad Svasti",
        "Type": "Cow Ghee",
        "Ingredients": "Cow's Milk Fat",
        "Storage Instructions": "Store in a cool, dry place",
        "Shelf Life": "9 months"
        },
        "reviews": [
        {
            "id": 35,
            "userId": "u034",
            "userName": "Ramesh K.",
            "rating": 5,
            "comment": "Authentic taste and aroma.",
            "date": "2025-06-07"
        }
        ],
        "averageRating": 5.0
    },
    {
        "id": "p133",
        "name": "Parachute Coconut Oil",
        "description": "Virgin coconut oil, great for cooking and hair care.",
        "category": "oils",
        "basePrice": 300,
        "image": "images/parachute.webp",
        "variants": [
        {
            "id": "v133_300ml",
            "name": "300 ml",
            "weight": null,
            "price": 129,
            "stock": 50,
            "images": ['images/parachute.webp','images/parachute1.jpg','images/parachute11.jpg','images/parachut.jpg']
        },
        {
            "id": "v133_600ml",
            "name": "600ml",
            "weight": null,
            "price": 260,
            "stock": 25,
            "images": ['images/parachute.webp','images/parachute1.jpg','images/parachute11.jpg','images/parachut.jpg']
        },
        {
            "id": "v133_1l",
            "name": "1 Litre",
            "weight": null,
            "price": 380,
            "stock": 25,
            "images": ['images/parachute.webp','images/parachute1.jpg','images/parachute11.jpg','images/parachut.jpg']
        }
        ],
        "specifications": {
        "Brand": "Parachute",
        "Type": "Virgin Coconut Oil",
        "Usage": "Cooking, Hair & Skin Care",
        "Ingredients": "100% Coconut Oil",
        "Certifications": "FSSAI Certified"
        },
        "reviews": [
        {
            "id": 36,
            "userId": "u035",
            "userName": "Shalini D.",
            "rating": 4,
            "comment": "Good for both cooking and hair.",
            "date": "2025-06-08"
        }
        ],
        "averageRating": 4.0
    },
    {
        "id": "p134",
        "name": "Fortune Kachi Ghani Oil, Mustard",
        "description": "Pure mustard oil, strong flavor, suitable for pickles and curries.",
        "category": "oils",
        "basePrice": 200,
        "image": "images/Fortune mustard oil.jpg",
        "variants": [
        {
            "id": "v134_500ml",
            "name": "500 ml",
            "weight": null,
            "price": 103,
            "stock": 60,
            "images": ['images/Fortune mustard oil.jpg','images/oil.jpg','images/oil11.jpg','images/oil111.jpg','images/oils.jpg']
        },
        {
            "id": "v134_1l",
            "name": "1 Litre",
            "weight": null,
            "price": 200,
            "stock": 30,
            "images": ['images/Fortune mustard oil.jpg','images/oil.jpg','images/oil11.jpg','images/oil111.jpg','images/oils.jpg']
        }
        ],
        "specifications": {
        "Brand": "Dhara",
        "Type": "Kachchi Ghani Mustard Oil",
        "Usage": "Cooking, Pickling",
        "Ingredients": "100% Mustard Seeds",
        "Smoke Point": "High"
        },
        "reviews": [
        {
            "id": 37,
            "userId": "u036",
            "userName": "Bhavna G.",
            "rating": 5,
            "comment": "Authentic mustard oil for my pickles.",
            "date": "2025-06-07"
        }
        ],
        "averageRating": 5.0
    },

  {
    "id": "p135",
    "name": "Sunflower Oil",
    "description": "Light and healthy sunflower oil for everyday cooking.",
    "image": "images/freedom sunflower oil.webp",
    "category": "oils",
    "basePrice": 180,
    "variants": [
      {
        "id": "v135_1l",
        "name": "1 Litre Pouch",
        "price": 145,
        "stock": 80,
        "images": ["images/freedom sunflower oil.webp","images/sunflower.jpg","images/sunflower.jpg"]
      },
      {
        "id": "v135_5l",
        "name": "5 Litre Jar",
        "price": 725,
        "stock": 20,
        "images": ["images/sunflower 5l.webp","images/sunflower5.jpg","images/sunflower5l1.jpg","images/sunflower.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Fortune",
      "Type": "Refined Sunflower Oil",
      "Usage": "Frying, Sautéing",
      "Fat Content": "Low Saturated Fat",
      "Fortification": "Vitamin A & D"
    },
    "reviews": [
      {
        "id": 38,
        "userId": "u037",
        "userName": "Pratik M.",
        "rating": 4,
        "comment": "Good for daily use, light on stomach.",
        "date": "2025-06-09"
      }
    ],
    "averageRating": 4.0
  },
  {
    "id": "p136",
    "name": "Pure & Sure Organic Sugar",
    "description": "Fine grain refined sugar for all your sweet needs.",
    "image": "images/sugar.webp",
    "category": "staples",
    "basePrice": 50,
    "variants": [
      {
        "id": "v136_1kg",
        "name": "1 Kg",
        "price": 139,
        "stock": 150,
        "images": ["images/sugar.webp"]
      },
      {
        "id": "v136_5kg",
        "name": "5 Kg",
        "price": 695,
        "stock": 70,
        "images": ["images/sugar.webp"]
      }
    ],
    "specifications": {
      "Brand": "Madhur",
      "Type": "Refined White Sugar",
      "Source": "Sugarcane",
      "Usage": "Baking, Beverages, Desserts"
    },
    "reviews": [
      {
        "id": 39,
        "userId": "u038",
        "userName": "Divya P.",
        "rating": 5,
        "comment": "Standard sugar, no issues.",
        "date": "2025-06-05"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p137",
    "name": "Aashirvad Iodized salt",
    "description": "Daily iodized salt, essential for good health.",
    "image": "images/Aashirvaad salt.webp",
    "category": "staples",
    "basePrice": 20,
    "variants": [
      {
        "id": "v137_1kg",
        "name": "1 Kg",
        "price": 27,
        "stock": 200,
        "images": ["images/Aashirvaad salt.webp","images/salt11.jpg","images/salt11kg.jpg","images/sal.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Tata Salt",
      "Type": "Iodized Crystal Salt",
      "Ingredients": "Salt, Iodine",
      "Purity": "99.8% Pure"
    },
    "reviews": [
      {
        "id": 40,
        "userId": "u039",
        "userName": "Rohit C.",
        "rating": 5,
        "comment": "Good quality salt.",
        "date": "2025-06-03"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p138",
    "name": "Red Label Natural Care Tea powder",
    "description": "Rich and aromatic tea powder for your daily chai.",
    "image": "images/redlabel.webp",
    "category": "beverages",
    "basePrice": 250,
    "variants": [
      {
        "id": "v138_250g",
        "name": "250g",
        "price": 125,
        "stock": 80,
        "images": ["images/redlabel.webp","images/red.jpg","images/redlabel111.jpg"]
      },
      {
        "id": "v138_500g",
        "name": "500g",
        "price": 260,
        "stock": 40,
        "images": ["images/redlabel.webp","images/redlabel1.jpg","images/redlabel111.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Red Label",
      "Type": "Leaf Tea",
      "Flavour": "Strong",
      "Preparation": "Boil with milk and sugar"
    },
    "reviews": [
      {
        "id": 41,
        "userId": "u040",
        "userName": "Mamta S.",
        "rating": 4,
        "comment": "Makes a strong and refreshing tea.",
        "date": "2025-06-08"
      }
    ],
    "averageRating": 4.0
  },
  {
    "id": "p139",
    "name": "Bru instant Coffee Powder",
    "description": "Finely ground coffee powder for a perfect brew.",
    "image": "images/BRU instant coffee powder.webp",
    "category": "beverages",
    "basePrice": 300,
    "variants": [
      {
        "id": "v139_100g",
        "name": "100g",
        "price": 285,
        "stock": 60,
        "images": ["images/bru.jpg","images/bru1.jpg","images/bru2.jpg","images/bru3.jpg","images/bru4.jpg"]
      },
      {
        "id": "v139_200g",
        "name": "200g",
        "price": 570,
        "stock": 30,
        "images": ["images/bru.jpg","images/bru250.jpg","images/bru2.jpg","images/bru3.jpg","images/bru4.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Bru Gold",
      "Type": "Instant Coffee",
      "Roast Level": "Medium",
      "Ingredients": "Coffee Beans"
    },
    "reviews": [
      {
        "id": 42,
        "userId": "u041",
        "userName": "Sid M.",
        "rating": 5,
        "comment": "Great taste and aroma, perfect start to the day.",
        "date": "2025-06-07"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p140",
    "name": "Britannia Marie Gold",
    "description": "Light and crispy Marie Gold biscuits, ideal with tea.",
    "image": "images/marie.webp",
    "category": "snacks",
    "basePrice": 50,
    "variants": [
      {
        "id": "v140_150g",
        "name": "150g Pack",
        "price": 25,
        "stock": 100,
        "images": ["images/marie.webp","images/bri.jpg","images/britan.jpg"]
      },
      {
        "id": "v140_300g",
        "name": "300g Pack",
        "price": 50,
        "stock": 60,
        "images": ["images/marie.webp","images/brita.jpg","images/bri.jpg","images/britan.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Britannia",
      "Type": "Marie Biscuits",
      "Ingredients": "Wheat Flour, Sugar, Edible Vegetable Oil",
      "Texture": "Crispy"
    },
    "reviews": [
      {
        "id": 43,
        "userId": "u042",
        "userName": "Anjali D.",
        "rating": 4,
        "comment": "Classic taste, good with tea.",
        "date": "2025-06-09"
      }
    ],
    "averageRating": 4.0
  },
  {
    "id": "p141",
    "name": "Bingo Original Style Salt Sprinkled - Flat Cut Salted Potato Chips Pack For Snacks",
    "description": "Crispy potato chips with classic salted flavor.",
    "image": "images/bingo.webp",
    "category": "snacks",
    "basePrice": 20,
    "variants": [
      {
        "id": "v141_30g",
        "name": "Small Pack (28g)",
        "price": 10,
        "stock": 150,
        "images": ["images/bingo.webp","images/bingo1.jpg"]
      },
      {
        "id": "v141_70g",
        "name": "Medium Pack (100g)",
        "price": 40,
        "stock": 80,
        "images": ["images/bingo.webp","images/bingo1.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Lay's",
      "Flavour": "Classic Salted",
      "Ingredients": "Potato, Edible Vegetable Oil, Salt",
      "Crunchiness": "High"
    },
    "reviews": [
      {
        "id": 44,
        "userId": "u043",
        "userName": "Rajesh S.",
        "rating": 3,
        "comment": "Okay, sometimes too salty.",
        "date": "2025-06-08"
      }
    ],
    "averageRating": 3.0
  },
  {
    "id": "p142",
    "name": "Veeba Tomato Ketchup Chef’s Special",
    "description": "Tangy and sweet tomato ketchup, a perfect condiment.",
    "image": "images/veeba tomato ketchup.webp",
    "category": "sauces",
    "basePrice": 100,
    "variants": [
        {
        "id": "v142_900g",
        "name": "900g",
        "price": 95,
        "stock": 40,
        "images": ["images/ketchup.webp","images/ketchup1.jpg","images/ketch.jpg","images/ketch1.jpg"]
      },
      {
        "id": "v142_460g",
        "name": "460g Bottle",
        "price": 45,
        "stock": 70,
        "images": ["images/ketch2.webp","images/ketcch1.jpg","images/keetch.jpg"]
      },
      
    ],
    "specifications": {
      "Brand": "Rfish",
      "Type": "Tomato Ketchup",
      "Ingredients": "Tomato Paste, Sugar, Vinegar, Salt, Spices",
      "Flavor Profile": "Sweet & Tangy"
    },
    "reviews": [
      {
        "id": 45,
        "userId": "u044",
        "userName": "Priya K.",
        "rating": 5,
        "comment": "My kids love it, always a staple.",
        "date": "2025-06-09"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p143",
    "name": "Vim pro cleaner Dishwashing Liquid",
    "description": "Powerful dishwashing liquid for sparkling clean utensils.",
    "image": "images/vim.jpg",
    "category": "household",
    "basePrice": 150,
    "variants": [
      {
        "id": "v143_250ml",
        "name": "250ml Bottle",
        "price": 55,
        "stock": 80,
        "images": ["images/vim.jpg","images/viim.jpg"]
      },
      {
        "id": "v143_750ml",
        "name": "750ml Bottle",
        "price": 179,
        "stock": 40,
        "images": ["images/vim750.jpg","images/viim750.jpg","images/vimm750.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Vim",
      "Form": "Liquid",
      "Scent": "Lemon",
      "Key Feature": "Grease Cutting"
    },
    "reviews": [
      {
        "id": 46,
        "userId": "u045",
        "userName": "Suresh L.",
        "rating": 4,
        "comment": "Cleans well, good value.",
        "date": "2025-06-06"
      }
    ],
    "averageRating": 4.0
  },
  {
    "id": "p144",
    "name": "Laundry Detergent Powder",
    "description": "Removes tough stains and leaves clothes fresh.",
    "image": "images/surf.jpg",
    "category": "household",
    "basePrice": 300,
    "variants": [
      {
        "id": "v144_1kg",
        "name": "1 Kg Pack",
        "price": 150,
        "stock": 60,
        "images": ["images/surf.jpg","images/surf1.jpg","images/surf11.jpg","images/surf2.jpg","images/surrff.jpg"]
      },
      {
        "id": "v144_2kg",
        "name": "2 Kg Pack",
        "price": 290,
        "stock": 30,
        "images": ["images/surf.jpg","images/surf2kg.jpg","images/surf11.jpg","images/surf2.jpg","images/surrff.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Surf Excel",
      "Form": "Powder",
      "Suitable For": "Front Load & Top Load",
      "Feature": "Stain Removal"
    },
    "reviews": [
      {
        "id": 47,
        "userId": "u046",
        "userName": "Rekha B.",
        "rating": 5,
        "comment": "Always rely on this for clean clothes.",
        "date": "2025-06-09"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p145",
    "name": "Harpic Toilet Cleaner",
    "description": "Powerful toilet cleaner for hygienic and sparkling clean toilets.",
    "image": "images/harpic.webp",
    "category": "household",
    "basePrice": 100,
    "variants": [
      {
        "id": "v145_1l",
        "name": "1l Bottle",
        "price": 200,
        "stock": 90,
        "images": ["images/harpic.webp","images/harpic1.jpg","images/harpic11.jpg","images/harpi.jpg","images/harpi1.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Harpic",
      "Scent": "Original",
      "Key Feature": "Kills 99.9% Germs",
      "Application": "Directly under rim"
    },
    "reviews": [
      {
        "id": 48,
        "userId": "u047",
        "userName": "Vikas G.",
        "rating": 5,
        "comment": "Very effective cleaner.",
        "date": "2025-06-07"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p146",
    "name": "Toothpaste (Fresh Gel)",
    "description": "Refreshing fresh gel toothpaste for strong teeth and fresh breath.",
    "image": "images/colgate.jpg",
    "category": "personal_care",
    "basePrice": 80,
    "variants": [
      {
        "id": "v146_100g",
        "name": "100g Tube",
        "price": 80,
        "stock": 120,
        "images": ["images/colgate.jpg","images/colgate1.jpg","images/colgate111.jpg","images/col.jpg"]
      },
      
    ],
    "specifications": {
      "Brand": "Colgate",
      "Type": "Gel Toothpaste",
      "Flavor": "Mint",
      "Benefit": "Fresh Breath, Cavity Protection"
    },
    "reviews": [
      {
        "id": 49,
        "userId": "u048",
        "userName": "Anaya N.",
        "rating": 4,
        "comment": "Good for daily use, fresh feeling.",
        "date": "2025-06-09"
      }
    ],
    "averageRating": 4.0
  },
  {
    "id": "p147",
    "name": "Shampoo (Anti-Dandruff)",
    "description": "Anti-dandruff shampoo for a healthy scalp and hair.",
    "image": "images/head and shoulders.jpg",
    "category": "personal_care",
    "basePrice": 250,
    "variants": [
      {
        "id": "v147_1l",
        "name": "1l(pack of 1) Bottle",
        "price": 724,
        "stock": 70,
        "images": ["images/head and shoulders.jpg","images/head and shoulders video.png"]
      },
      {
        "id": "v147_l",
        "name": "1l(pack of 2) Bottles",
        "price": 1130,
        "stock": 35,
        "images": ["images/head and shoulders pack of 2.jpg","images/head and shoulders video.png"]
      }
    ],
    "specifications": {
      "Brand": "Head & Shoulders",
      "Hair Type": "All",
      "Key Ingredient": "Zinc Pyrithione",
      "Benefit": "Dandruff Relief"
    },
    "reviews": [
      {
        "id": 50,
        "userId": "u049",
        "userName": "Rahul P.",
        "rating": 5,
        "comment": "Very effective against dandruff.",
        "date": "2025-06-08"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p148",
    "name": "Soap (Germ Protection)",
    "description": "Germ protection soap for everyday hygiene.",
    "image": "images/dettool.webp",
    "category": "personal_care",
    "basePrice": 40,
    "variants": [
      {
        "id": "v148_125g_x1",
        "name": "125g (Single)",
        "price": 40,
        "stock": 150,
        "images": ["images/dettool.webp","images/detol1.jpg","images/dettol1.jpg"]
      },
      {
        "id": "v148_100g_x4",
        "name": "100g (4-pack)",
        "price": 150,
        "stock": 70,
        "images": ["images/dettol.jpg","images/detol1.jpg","images/dettol1.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Dettol",
      "Type": "Bathing Soap",
      "Feature": "Germ Protection",
      "Scent": "Pine"
    },
    "reviews": [
      {
        "id": 51,
        "userId": "u050",
        "userName": "Deepika S.",
        "rating": 5,
        "comment": "Fresh and clean feel after every wash.",
        "date": "2025-06-09"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p149",
    "name": "Hand Wash (Refill)",
    "description": "Gentle on hands, tough on germs. Economical refill pack.",
    "image": "images/life.webp",
    "category": "personal_care",
    "basePrice": 150,
    "variants": [
      {
        "id": "v149_750ml",
        "name": "750ml Refill",
        "price": 150,
        "stock": 80,
        "images": ["images/life.webp","images/lifebouy.jpg","images/lifee.jpg","images/llife.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Lifebuoy",
      "Form": "Liquid",
      "Scent": "Mild",
      "Benefit": "Germ Protection"
    },
    "reviews": [
      {
        "id": 52,
        "userId": "u051",
        "userName": "Alok V.",
        "rating": 4,
        "comment": "Good value for money, keeps hands clean.",
        "date": "2025-06-07"
      }
    ],
    "averageRating": 4.0
  },
  {
    "id": "p150",
    "name": "Sanitizer",
    "description": "Alcohol-based hand sanitizer for on-the-go germ protection.",
    "image": "images/san.webp",
    "category": "personal_care",
    "basePrice": 100,
    "variants": [
      {
        "id": "v150_50ml",
        "name": "50ml(Pack of 10) Bottle",
        "price": 50,
        "stock": 100,
        "images": ["images/san.webp","images/sani.jpg","images/saan.jpg","images/sann.jpg"]
      },
      {
        "id": "v150_200ml",
        "name": "200ml(Pack of 3) Bottle",
        "price": 356,
        "stock": 50,
        "images": ["images/200ml.jpg","images/sani.jpg","images/saan.jpg","images/sann.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Dettol",
      "Alcohol Content": "70%",
      "Scent": "Original",
      "Feature": "Rinse-free"
    },
    "reviews": [
      {
        "id": 53,
        "userId": "u052",
        "userName": "Charu P.",
        "rating": 5,
        "comment": "Handy and effective.",
        "date": "2025-06-06"
      }
    ],
    "averageRating": 5.0
  },
  {
    "id": "p151",
    "name": "Dishwasher Tablets",
    "description": "All-in-one dishwasher tablets for powerful cleaning and shine.",
    "image": "images/dish.jpg",
    "category": "household",
    "basePrice": 500,
    "variants": [
      {
        "id": "v151_24tabs",
        "name": "24 Tablets Pack",
        "price": 519,
        "stock": 30,
        "images": ["images/dish.jpg","images/dissh.jpg","images/dish1.jpg","images/dishh.jpg","images/dish2.jpg"]
      },
      {
        "id": "v151_50tabs",
        "name": "50 Tablets Pack",
        "price": 1132,
        "stock": 15,
        "images": ["images/dish2.jpg","images/dissh.jpg","images/dish1.jpg","images/dishh.jpg","images/dish2.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Finish",
      "Type": "All-in-One",
      "Feature": "Sparkling Clean, Spot Free",
      "Dosage": "1 Tablet per wash"
    },
    "reviews": [
      {
        "id": 54,
        "userId": "u053",
        "userName": "Maya G.",
        "rating": 4,
        "comment": "Leaves dishes very clean, a bit pricey.",
        "date": "2025-06-05"
      }
    ],
    "averageRating": 4.0
  },
  {
    "id": "p152",
    "name": "Floor Cleaner (Pine)",
    "description": "Disinfectant floor cleaner with a fresh pine scent.",
    "image": "images/lizol.jpg",
    "category": "household",
    "basePrice": 200,
    "variants": [
      {
        "id": "v152_500ml",
        "name": "500ml Bottle",
        "price": 120,
        "stock": 60,
        "images": ["images/lizol.jpg","images/lizol1.jpg","images/lizoll.jpg","images/liizol.jpg"]
      },
      {
        "id": "v152_1l",
        "name": "1 Litre Bottle",
        "price": 200,
        "stock": 30,
        "images": ["images/lizol.jpg","images/lizol1.jpg","images/lizoll.jpg","images/liizol.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Lizol",
      "Scent": "Pine",
      "Feature": "Kills 99.9% Germs",
      "Usage": "Dilute in water"
    },
    "reviews": [
      {
        "id": 55,
        "userId": "u054",
        "userName": "Suraj N.",
        "rating": 5,
        "comment": "Leaves the floor sparkling and smelling great.",
        "date": "2025-06-08"
      }
    ],
    "averageRating": 5.0
  },
  
  {
    "id": "p154",
    "name": "Dish Scrubber",
    "description": "Tough dish scrubber for effective cleaning of stubborn stains.",
    "image": "images/scrub.webp",
    "category": "household",
    "basePrice": 50,
    "variants": [
      {
        "id": "v154_1pc",
        "name": "1 Pc",
        "price": 32,
        "stock": 120,
        "images": ["images/scrub.webp","images/disch.jpg"]
      },
      {
        "id": "v154_3pc",
        "name": "3 Pcs Pack",
        "price": 205,
        "stock": 60,
        "images": ["images/dishs.jpg","images/dishs111.jpg","images/disch.jpg"]
      }
    ],
    "specifications": {
      "Brand": "Scotch-Brite",
      "Material": "Steel/Plastic Fibre",
      "Feature": "Non-scratch (on some models)",
      "Durability": "Long-lasting"
    },
    "reviews": [
      {
        "id": 57,
        "userId": "u056",
        "userName": "Preeti G.",
        "rating": 5,
        "comment": "Works well for tough grease.",
        "date": "2025-06-07"
      }
    ],
    "averageRating": 5.0
    }
];

// Mock Offers Data;
const offersData = [
    {
        id: 'o001',
        name: 'Flat 10% Off on Fruits',
        description: 'Get 10% discount on all fruit purchases above ₹300.',
        type: 'percentage',
        value: 10,
        appliesToCategory: 'fruits',
        minCartValue: 300
    },
    {
        id: 'o002',
        name: 'Buy 1 Get 1 Free: Organic Full Cream Milk (1 Litre)',
        description: 'Buy one 1 Litre Organic Full Cream Milk, get one free!',
        type: 'bogo',
        appliesToProductId: 'p102',
        appliesToVariantId: 'v102_1l'
    },
    {
        id: 'o003',
        name: '₹50 Off on orders above ₹1000',
        description: 'Apply coupon "SHOPSMART50" for ₹50 discount.',
        type: 'fixed_amount',
        value: 50,
        minCartValue: 1000,
        couponCode: 'SHOPSMART50'
    },
    {
        id: 'o004',
        name: '20% Off on Vegetables',
        description: 'Enjoy 20% off when you buy any vegetables worth ₹250 or more.',
        type: 'percentage',
        value: 20,
        appliesToCategory: 'vegetables',
        minCartValue: 250
    },
    {
        id: 'o005',
        name: 'Free Butter with Paneer (500g)',
        description: 'Get a free 100g unsalted butter pack when you buy Paneer (500g).',
        type: 'free_item',
        appliesToProductId: 'p105',
        appliesToVariantId: 'v105_500g',
        freeItemProductId: 'p116',
        freeItemVariantId: 'v116_100g'
    },
    {
        id: 'o006',
        name: 'Combo Offer: Basmati Rice & Toor Dal (5% Off)',
        description: 'Get 5% off when you buy 5 Kg Basmati Rice and 1 Kg Toor Dal together.',
        type: 'combo_percentage',
        value: 5,
        comboProducts: [
            { productId: 'p103', variantId: 'v103_5kg' },
            { productId: 'p114', variantId: 'v114_1kg' }
        ]
    },
    {
        id: 'o007',
        name: 'Flat 15% Off on Personal Care',
        description: 'Save 15% on all personal care items with a minimum purchase of ₹400.',
        type: 'percentage',
        value: 15,
        appliesToCategory: 'personal_care',
        minCartValue: 400
    },
    {
        id: 'o008',
        name: '₹75 Off on Household Essentials above ₹750',
        description: 'Get a flat ₹75 discount on household essential items on orders above ₹750.',
        type: 'fixed_amount',
        value: 75,
        appliesToCategory: 'household',
        minCartValue: 750
    },
    {
        id: 'o009',
        name: 'Buy any 2 Spices, get 10% Off',
        description: 'Purchase any two spice powders and receive a 10% discount on them.',
        type: 'multi_buy_percentage',
        value: 10,
        appliesToCategory: 'spices',
        minItems: 2
    },
    {
        id: 'o010',
        name: 'Free Sugar with Coffee Powder (200g)',
        description: 'Receive a free 1 Kg refined sugar pack when you buy 200g Coffee Powder.',
        type: 'free_item',
        appliesToProductId: 'p139',
        appliesToVariantId: 'v139_200g',
        freeItemProductId: 'p136',
        freeItemVariantId: 'v136_1kg'
    }
];

// Mock "Bought Together" suggestions (hardcoded for simplicity)
const boughtTogetherData = {
    'p101': [ // Fresh Apples
        { productId: 'p102', variantId: 'v102_1l', name: 'Organic Full Cream Milk (1 Litre)', image: 'images/Organic Full Cream Milk.jpeg', price: 60 },
        { productId: 'p103', variantId: 'v103_1kg', name: 'Basmati Rice (1 Kg)', image: 'images/Basmati Rice (Premium).jpg', price: 150 }
    ],
    'p102': [ // Milk
        { productId: 'p101', variantId: 'v101_1kg', name: 'Fresh Apples (1 Kg)', image: 'images/Apples-1000x1000.webp', price: 120 },
        { productId: 'p103', variantId: 'v103_1kg', name: 'Basmati Rice (1 Kg)', image: 'images/Basmati Rice (Premium).jpg', price: 150 }
    ],
    'p103': [ // Basmati Rice
        { productId: 'p102', variantId: 'v102_1l', name: 'Organic Full Cream Milk (1 Litre)', image: 'images/Organic Full Cream Milk.jpeg', price: 60 },
        { productId: 'p101', variantId: 'v101_1kg', name: 'Fresh Apples (1 Kg)', image: 'images/Apples-1000x1000.webp', price: 120 }
    ],
    'p105': [ // Paneer
        { productId: 'p114', variantId: 'v114_500g', name: 'Toor Dal (500g)', image: 'images/Toor Dal.jpeg', price: 65 },
        { productId: 'p116', variantId: 'v116_100g', name: 'Butter (100g)', image: 'images/Butter (Unsalted).jpeg', price: 55 }
    ],
    'p106': [ // Whole Wheat Atta
        { productId: 'p117', variantId: 'v117_400g', name: 'Multi-Grain Bread (400g)', image: 'images/Multi-Grain Bread.jpeg', price: 80 },
        { productId: 'p118', variantId: 'v118_1kg', name: 'Potatoes (1 Kg)', image: 'images/Potatoes.jpeg', price: 40 }
    ],
    'p118': [ // Potatoes
        { productId: 'p119', variantId: 'v119_1kg', name: 'Onions (1 Kg)', image: 'images/Onions.jpeg', price: 30 },
        { productId: 'p120', variantId: 'v120_1kg', name: 'Tomatoes (1 Kg)', image: 'images/Tomatoes.jpeg', price: 50 }
    ],
    'p138': [ // Tea Powder
        { productId: 'p140', variantId: 'v140_300g', name: 'Biscuits (Marie Gold) 300g', image: 'images/Biscuits (Marie Gold).jpeg', price: 50 },
        { productId: 'p136', variantId: 'v136_1kg', name: 'Sugar (1 Kg)', image: 'images/Sugar (Refined).jpeg', price: 50 }
    ],
    'p143': [ // Dishwashing Liquid
        { productId: 'p154', variantId: 'v154_1pc', name: 'Dish Scrubber (1 Pc)', image: 'images/Dish Scrubber.jpeg', price: 25 },
        { productId: 'p153', variantId: 'v153_30pcs', name: 'Garbage Bags (30 Pcs)', image: 'images/Garbage Bags (Medium).jpeg', price: 80 }
    ],
    'p146': [ // Toothpaste
        { productId: 'p172', variantId: 'v172_2pcs', name: 'Toothbrush (2 Pcs)', image: 'images/Toothbrush (Soft).jpeg', price: 50 },
        { productId: 'p148', variantId: 'v148_125g_x1', name: 'Soap (125g)', image: 'images/Soap (Germ Protection).jpeg', price: 40 }
    ],
    'p194': [ // Black Pepper
        { productId: 'p195', variantId: 'v195_200g', name: 'Turmeric Powder (200g)', image: 'images/Turmeric Powder.jpeg', price: 80 },
        { productId: 'p196', variantId: 'v196_200g', name: 'Red Chilli Powder (200g)', image: 'images/Red Chilli Powder.jpeg', price: 90 }
    ]
};