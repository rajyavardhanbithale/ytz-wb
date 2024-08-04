'use client'
import { ProductData } from '../../../../types'
import ImageCarousel from './ImageCarousel'
import { ProductDelete, ProductUpdate } from './ProductUpdate'

export default function ProductListingCard(props: { product: ProductData }) {
    const product = props.product

    return (
        <div className="flex flex-col justify-between bg-white shadow-lg rounded-xl overflow-hidden max-w-md mx-auto my-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="relative bg-slate-100">
                <ImageCarousel images={product.imageURL}></ImageCarousel>
            </div>
            <div className="p-5 rounded-2xl bg-white">
                <h2 className="text-3xl font-semibold mb-2 text-gray-800">
                    {product.productName}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                    Seller: {product.sellerName}
                </p>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-bold text-gray-900 mr-2">
                        ₹{product.discountPrice}
                    </span>
                    <span className="text-gray-500 line-through text-base">
                        ₹{product.price}
                    </span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                    <p className="font-semibold text-gray-800">Category:</p>
                    <ul className="list-disc ml-5">
                        {Array.isArray(product.category) &&
                            product.category.map((cat, index) => (
                                <li key={index}>{cat}</li>
                            ))}
                    </ul>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                    <p className="font-semibold text-gray-800">Tags:</p>
                    <ul className="list-disc ml-5">
                        {Array.isArray(product.tags) &&
                            product.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                    </ul>
                </div>
                <p
                    className={`text-sm font-semibold mb-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}
                >
                    In Stock: {product.inStock ? 'Yes' : 'No'}
                </p>
                <p className="text-sm text-gray-500">
                    Available Stock: {product.totalAvailable}
                </p>
            </div>
            <div className="flex justify-between px-5 py-4 bg-gray-100 rounded-2xl">
                <ProductUpdate productData={product} />

                <ProductDelete productID={product.id} />
            </div>
        </div>
    )
}