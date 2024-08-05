const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const url = process.env.MONGO_URI;
const dbName = 'ytz-web';
const collectionName = 'products';


const productSchema = new mongoose.Schema({
    id: String,
    tags: [String],
    categories: [String]
});

const Product = mongoose.model(collectionName, productSchema);

const connectMongo = async () => {
    if (!url) throw new Error("MongoDB URI not provided");
    await mongoose.connect(url, { dbName });
};

router.get("/", async (req, res) => {
    // Fetch records in range
    const { page, limit, categories, tags, id } = req.query;
    const pageFetch = parseInt(page) || 1;
    const limitFetch = parseInt(limit) || 5;

    try {
        await connectMongo();

        // Overflow condition
        if (pageFetch < 1 || limitFetch < 1) {
            return res.status(400).json({ message: "Invalid pagination parameters" });
        }

        let query = {};
        if (id) {
            const result = await Product.find({ id }).exec();
            return res.status(200).json(result);
        }

        if (typeof tags === 'string') {
            const tagsArray = tags.split(',').map(tag => tag.trim());
            query.tags = { $in: tagsArray };
        } else if (Array.isArray(tags)) {
            const tagsArray = tags.map(tag => tag.toString().trim());
            query.tags = { $in: tagsArray };
        }

        if (typeof categories === 'string') {
            const categoriesArray = categories.split(',').map(cat => cat.trim());
            query.categories = { $in: categoriesArray };
        } else if (Array.isArray(categories)) {
            const categoriesArray = categories.map(cat => cat.toString().trim());
            query.categories = { $in: categoriesArray };
        }

        let result;
        if (pageFetch !== 0 && limitFetch !== 0) {
            const skip = (pageFetch - 1) * limitFetch;
            result = await Product.find(query).skip(skip).limit(limitFetch).exec();
        } else {
            result = await Product.find(query).exec();
        }

        return res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
