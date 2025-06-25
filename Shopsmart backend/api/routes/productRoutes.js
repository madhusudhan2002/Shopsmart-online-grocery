const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);

// GET a single product by ID
router.get('/:id', productController.getProductById);

// POST a new product (e.g., for admin to add products)
router.post('/', productController.createProduct);

// PUT/PATCH to update a product by ID
router.put('/:id', productController.updateProduct);

// DELETE a product by ID
router.delete('/:id', productController.deleteProduct);

// POST to add a review to a product
router.post('/:id/reviews', productController.addReview);

module.exports = router;