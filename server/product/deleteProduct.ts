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

router.delete("/", (req, res) => {
    return res.status(400).json({ message: "Product ID Required" })
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    if (id.length !== 12) {
        return res.status(400).json({ message: "Invalid Product id" })
    }

    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName)

        const result = await collection.deleteOne(
            { id: id }
        )

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }

})


export default router