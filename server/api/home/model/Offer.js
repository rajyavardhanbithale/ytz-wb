const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    productID: { type: String, required: true },
    startDate: { type: Number, default: Date.now },
    endDate: { type: Number, default: () => Date.now() + (5 * 86400 * 1000) } // Default to 5 days from now
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
