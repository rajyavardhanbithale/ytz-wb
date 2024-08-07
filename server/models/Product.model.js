const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    sellerName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: { 
        type: Number,
        required: true 
    },
    discountPrice: { 
        type: Number 
    },
    totalAvailable: { 
        type: Number,
        required: true 
    },
    thumbnail: {
        public_id :{
            type : 'String'
        },
        secure_url: {
            type : 'String'
        }
    },
    category: [String],
    tags: [String],
    inStock: { 
        type: Boolean, 
        default: true 
    }
},{
    timestamps:true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;