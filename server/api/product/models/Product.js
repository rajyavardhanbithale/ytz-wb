const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true },
    productName: { type: String, required: true },
    sellerName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    totalAvailable: { type: Number, required: true },
    category: [String],      // Expecting an array of strings
    tags: [String],          // Expecting an array of strings
    imageUrls: [String],     // Expecting an array of strings
    inStock: { type: Boolean, default: true },
    timestamp: { type: Number, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
