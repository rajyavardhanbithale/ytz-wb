const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const Offer = require('./model/Offer'); // Adjust the path as needed

const router = express.Router();

const url = process.env.MONGO_URI;
const dbName = 'ytz-web';

const connectMongo = async () => {
    if (!url) throw new Error("MongoDB URI not provided");
    await mongoose.connect(url, { dbName, useNewUrlParser: true, useUnifiedTopology: true });
}

// Edge server time synchronization
async function fetchTime() {
    const response = await axios.get('http://worldtimeapi.org/api/timezone/Etc/UTC');
    return response.data;
}

router.post('/create', async (req, res) => {
    const { productID } = req.body;

    if (!productID) {
        return res.status(400).json({ success: false, message: 'Product ID is required' });
    }

    const timeData = await fetchTime();

    try {
        await connectMongo();

        const offer = new Offer({
            productID,
            startDate: req.body.startDate ?? timeData.unixtime * 1000, // Convert to milliseconds
            endDate: req.body.endDate ?? (timeData.unixtime * 1000 + (5 * 86400 * 1000)) // Default to 5 days from now
        });

        await offer.save();

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error creating offer:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await connectMongo();

        const result = await Offer.findOne({ productID: id });

        if (!result) {
            return res.status(404).json({ success: false, message: 'Offer not found' });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching offer:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        await connectMongo();

        const result = await Offer.find();

        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching offers:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await connectMongo();

        const result = await Offer.deleteOne({ productID: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'Offer not found' });
        }

        res.status(200).json({ success: true, message: 'Offer deleted successfully' });
    } catch (error) {
        console.error('Error deleting offer:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
