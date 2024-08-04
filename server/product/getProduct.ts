import { Router } from "express";
import { MongoClient } from "mongodb";

const router = Router()


const url = process.env.MONGO_URI;
const client = url ? new MongoClient(url) : null;
const db = 'ytz-web';
const collectionName = 'products';


const connectMongo = async () => {
    if (!client) throw new Error("MongoDB not initialized");
    await client.connect();
    return client.db(db);
}

router.get("/", async (req, res) => {

    // fetch records in range
    const { page, limit, categories, tags, id } = req.query
    const pageFetch = parseInt(page as string) || 1
    const limitFetch = parseInt(limit as string) || 5

    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName)

        // overflow condition
        if (pageFetch < 1 || pageFetch < 1) {
            return res.status(400).json({ message: "Invalid pagination parameters" });
        }

        if (id) {
            const result = await collection.find({ id: id }).toArray();
            return res.status(200).json(result);
        }

        let query: any = {};
        if (typeof tags === 'string') {
            const tagsArray = tags.split(',').map(tag => tag.trim());
            query.tags = { $in: tagsArray };
        } else if (Array.isArray(tags)) {
            const tagsArray = tags.map(tag => tag.toString().trim());
            query.tags = { $in: tagsArray };
        }

        if (typeof categories === 'string') {
            const categoriesArray = categories.split(',').map(tag => tag.trim());
            query.categories = { $in: categoriesArray };
        } else if (Array.isArray(categories)) {
            const categoriesArray = categories.map(tag => tag.toString().trim());
            query.categories = { $in: categoriesArray };
        }

        if ((parseInt(page as string) || 0) !== 0 && (parseInt(limit as string) || 0) !== 0) {
            const skip = (pageFetch - 1) * limitFetch;
            const result = await collection.find(query).skip(skip).limit(limitFetch).toArray();
            return res.status(200).json(result);

        }

        const result = await collection.find().toArray();
        return res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})


export default router