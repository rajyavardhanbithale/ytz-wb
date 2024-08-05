import { json, Router } from "express";
import { MongoClient } from "mongodb";
import type { Product } from "../types";

const router = Router();

const url = process.env.MONGO_URI;
const client = url ? new MongoClient(url) : null;
const db = 'ytz-web';
const collectionName = 'products';

const connectMongo = async () => {
    if (!client) throw new Error("MongoDB not Connected");
    await client.connect()
    return client.db(db)
}

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updates: Partial<Product> = req.body;

    // if (!validateProduct(updates)) {
    //     return res.status(400).json({ message: "Invalid Product Details" });
    // }

    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName);

        const result = await collection.updateOne(
            { id: id },
            { $set: updates }
        )

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Product Not Found" })
        }
        return res.status(200).json({ message: "Product Updated" })

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ message: "Internal Server Error" });
    }

})

// const validateProduct = (product: any): product is Partial<Product> => {
//     return (
//         (product.productName === undefined || typeof product.productName === 'string') &&
//         (product.sellerName === undefined || typeof product.sellerName === 'string') &&
//         (product.description === undefined || typeof product.description === 'string') &&
//         (product.price === undefined || typeof product.price === 'number') &&
//         (product.discountPrice === undefined || typeof product.discountPrice === 'number') &&
//         (product.totalAvailable === undefined || typeof product.totalAvailable === 'number') &&
//         (product.category === undefined || typeof  Array.isArray(product.category)) &&
//         (product.tags === undefined || Array.isArray(product.tags)) &&
//         // (product.imageUrls === undefined || Array.isArray(product.imageUrls)) &&
//         (product.inStock === undefined || typeof product.inStock === 'boolean')
//     );
// }



export default router