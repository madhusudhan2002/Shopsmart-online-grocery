const Product = require('../models/productModel');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new product (for initial data seeding or admin panel)
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// You can add more controllers for update, delete, review submission etc.
// For example, to update a product:
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// To delete a product:
exports.deleteProduct = async (req, res) => {
    try {
        const result = await Product.findOneAndDelete({ id: req.params.id });
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// To add a review to a product
exports.addReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, userName, rating, comment } = req.body;

        const product = await Product.findOne({ id });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const newReview = {
            id: product.reviews.length > 0 ? Math.max(...product.reviews.map(r => r.id)) + 1 : 1, // Simple ID generation
            userId,
            userName,
            rating,
            comment,
            date: new Date()
        };

        product.reviews.push(newReview);

        // Recalculate average rating
        const totalRating = product.reviews.reduce((sum, r) => sum + r.rating, 0);
        product.averageRating = (totalRating / product.reviews.length).toFixed(1);

        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};