const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    images: [{ type: String }] // Array of image paths for the variant
});

const reviewSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    date: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // Main product image
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    variants: [variantSchema], // Array of variant objects
    specifications: { type: mongoose.Schema.Types.Mixed }, // Flexible for various specs
    reviews: [reviewSchema], // Array of review objects
    averageRating: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);