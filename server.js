require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./api/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
app.use(express.json()); 
app.use(cors()); 
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});