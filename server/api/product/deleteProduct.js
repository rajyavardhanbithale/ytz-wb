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

router.delete("/", (req, res) => {
    return res.status(400).json({ message: "Product ID Required" });
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

   
    if (id.length !== 12) {
        return res.status(400).json({ message: "Invalid Product ID" });
    }

    try {
        await connectMongo();

        const result = await Product.deleteOne({ id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
