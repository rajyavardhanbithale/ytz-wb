import * as React from 'react'
import { IoCall, IoLogoWhatsapp, IoMail } from 'react-icons/io5'
import { TbShoppingBagCheck } from 'react-icons/tb'
import ProductPageImage from '../../components/Product/ProductPageImage'
import ProductNotFound from '../../components/Product/ProductNotFound'
import { ProductData } from '@/types'

const pathname = process.env.NEXT_PUBLIC_PATHNAME

async function fetchProduct(props: { productID: string }) {
    const response = await fetch(
        `${pathname}/api/product-get?id=${props.productID}`
    )
    const product = await response.json()
    return product as ProductData
}

export async function generateMetadata({ params }: any) {
    const productID = params.id
    const metaInfo = await fetchProduct({ productID: productID })
    return {
        title: metaInfo.productName,
        description: metaInfo.description,
        openGraph: {
            images: metaInfo.imageURL,
        },
    }
}

export default async function ProductPage({ params }: any) {
    const productID = params.id
    const product = await fetchProduct({ productID: productID })

    return (
        <>
            {product && (
                <div className="container  p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <ProductPageImage image={product.imageURL} />
                        </div>

                        <div className="md:w-1/2 flex flex-col justify-center p-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm uppercase text-blue-600 font-bold mb-1">
                                    {product.sellerName}
                                </h2>
                                <h1 className="text-3xl font-bold mb-1">
                                    {product.productName}
                                </h1>
                                <p className="text-slate-600">
                                    {product.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <span className="text-3xl font-bold mr-4">
                                        &#8377; {product.discountPrice}
                                    </span>
                                    <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md font-bold">
                                        {Math.round(
                                            ((product.price -
                                                product.discountPrice) /
                                                product.price) *
                                                100
                                        )}
                                        % off
                                    </span>
                                </div>
                                <div className="text-slate-400 line-through">
                                    &#8377; {product.price}
                                </div>
                            </div>

                            <div className="flex flex-row items-center bg-blue-100 px-3 py-2.5 rounded-2xl shadow-md text-blue-500 gap-2 w-fit max-w-md hover:scale-[1.02] cursor-pointer duration-300">
                                <TbShoppingBagCheck className="text-xl text-blue-600" />
                                <div className="flex flex-row gap-0">
                                    <span className="text-sm font-bold">
                                        {product.totalAvailable} in stock
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(product.category) &&
                                        product.category.map((cat, idx) => (
                                            <span
                                                key={idx}
                                                className="cursor-pointer bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-semibold"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(product.tags) &&
                                        product.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="cursor-pointer bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold flex items-center hover:bg-blue-600 duration-500">
                                    <IoCall className="mr-2 mb-0.5" />
                                    Call
                                </button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold flex items-center hover:bg-blue-600 duration-500">
                                    <IoLogoWhatsapp className="mr-2 mb-0.5" />
                                    Whatsapp
                                </button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold flex items-center hover:bg-blue-600 duration-500">
                                    <IoMail className="mr-2 mb-0.5" />
                                    Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!product && <ProductNotFound />}
        </>
    )
}
