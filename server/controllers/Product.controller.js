import Product from "../models/Product.model.js";
import AppError from "../utils/error.utils.js";
import cloudnairy from "cloudinary";
import fs from 'fs/promises';

const addProduct = async (req,res,next)=>{
    try{
        const {productName,price,discountPrice,totalAvailable,inStock,category,description,sellerName}= req.body;
        if(!productName || !price || !discountPrice|| !totalAvailable || !inStock || !category || !description || !sellerName){
            return next(new AppError("All Fields are Mandatory",400));
        }
        const product = Product.create({
            productName,
            sellerName,
            price,
            discountPrice,
            totalAvailable,
            inStock,
            category,
            description,
            thumbnail: {
                public_id: 'dumy',
                secure_url: "dumy"
            },
            tags,
        })

        if (!product) {
            return next(new AppError("course not created", 400));
        }
        // TODO Image Upload 

        if (req.file) {
            const result = await cloudnairy.v2.uploader.upload(req.file.path, {
                folder: 'server'
            });
            if (result) {
                product.thumbnail.public_id = result.public_id;
                product.thumbnail.secure_url = result.secure_url;
            }
            fs.rm(`uploads/${req.file.filename}`);
        }

        await product.save();

        res.status(200).json({
            success: true,
            message: "Product added successfully",
            course
        })

    }catch(error){
        return next(new AppError(error.message,500));
    }
};

export {
    addProduct,
}