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

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        await connectMongo();

        const result = await Product.updateOne(
            { id: id },
            { $set: updates }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        return res.status(200).json({ message: "Product Updated" });

    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
