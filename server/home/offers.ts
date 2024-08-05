import axios from "axios";
import { Router } from "express";
import { MongoClient } from "mongodb";
import type { Offers } from "../types";

const router = Router();


const url = process.env.MONGO_URI;
const client = url ? new MongoClient(url) : null;
const db = 'ytz-web';
const collectionName = 'offers';

const connectMongo = async () => {
    if (!client) throw new Error("MongoDB not initialized");
    await client.connect();
    return client.db(db);
}

// edge server time synchronization
async function fetchTime() {
    const response = await axios.get('http://worldtimeapi.org/api/timezone/Etc/UTC')

    return response.data
}


router.post('/create', async (req, res) => {
    const { id } = req.query

    const timeData = await fetchTime()

    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName);

        const result = await collection.insertOne({
            "productID": req.body.productID,
            "startDate": req.body.startDate ?? timeData.unixtime,
            "endDate": req.body.endDate ?? (timeData.unixtime + (5 * 86400)),
        })

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

});

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName);

        const result = await collection.findOne({ productID: id })


        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

});

router.get('/', async (req, res) => {
    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName);

        const result = await collection.find().toArray()

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const db = await connectMongo();
        const collection = db.collection(collectionName);

        const result = await collection.deleteOne({ productID: id })

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

});


export default router;
