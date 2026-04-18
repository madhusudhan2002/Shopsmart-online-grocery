const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    images: [{ type: String }] 
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
    image: { type: String, required: true }, 
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    variants: [variantSchema],
    specifications: { type: mongoose.Schema.Types.Mixed },
    reviews: [reviewSchema],
    averageRating: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);