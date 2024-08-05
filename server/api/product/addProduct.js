const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path as needed

const router = express.Router();

const url = process.env.MONGO_URI;
const dbName = 'ytz-web';

const connectMongo = async () => {
    if (!url) throw new Error("MongoDB URI not provided");
    await mongoose.connect(url, { dbName, useNewUrlParser: true, useUnifiedTopology: true });
};

const validateProduct = (product) => {
    return product &&
           product.productName &&
           product.sellerName &&
           typeof product.price === 'number' &&
           Array.isArray(product.category) &&
           Array.isArray(product.tags) &&
           Array.isArray(product.imageUrls);
};

router.post('/', async (req, res) => {
    const body = req.body;

    if (!validateProduct(body)) {
        return res.status(400).json({ message: 'Invalid product details' });
    }

    try {
        await connectMongo();

        // Dynamically import nanoid
        const { customAlphabet } = await import('nanoid');
        const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 12);

        const finalBody = {
            ...body,
            timestamp: Date.now(),
            id: nanoid(),
        };

        const result = await Product.create(finalBody);

        res.status(200).json({
            message: "Product Added",
            insertId: result._id,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
