import { Router } from "express";
import { MongoClient } from "mongodb";
import type { Product } from "../types";
import { customAlphabet } from "nanoid";

const router = Router();


const url = process.env.MONGO_URI;
const client = url ? new MongoClient(url) : null;
const db = 'ytz-web';
const collectionName = 'products';

const connectMongo = async () => {
    if (!client) throw new Error("MongoDB not initialized");
    await client.connect();
    return client.db(db);
}

router.post('/', async (req, res) => {
    const body: Product = req.body;

    if (!validateProduct(body)) {
        return res.status(400).json({ message: 'Invalid product details' });
    }

    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName);

        const nanoid = customAlphabet('abcdefghijklnmopqrstqvwxyz123456', 12)

        const finalBody: Product = {
            ...body,
            timestamp: Number(Date.now()),
            id: nanoid(),
        };

        const result = await collection.insertOne(finalBody);

        res.status(200).json({
            message: "Product Added",
            insertId: result.insertedId
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({ message: 'Internal Server Error' });
    }
});


const validateProduct = (product: any): product is Product => {
    return (
        typeof product.productName === 'string' &&
        typeof product.sellerName === 'string' &&
        typeof product.description === 'string' &&
        typeof product.price === 'number' &&
        typeof product.discountPrice === 'number' &&
        typeof product.totalAvailable === 'number' &&
        Array.isArray(product.tags) &&
        Array.isArray(product.tags) &&
        // Array.isArray(product.imageUrls) &&
        typeof product.inStock === 'boolean'
    );
}

export default router;
