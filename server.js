require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./api/routes/productRoutes');
const userRoutes = require('./api/routes/userRoutes');

const app = express();

// ✅ Middleware FIRST
app.use(cors());
app.use(express.json());

// ✅ Routes AFTER middleware
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Config
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// Test route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});