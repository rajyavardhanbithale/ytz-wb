'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import { ProductData } from "../../../../../types";
import ProductListingCard from "./ProfuctListingCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { fetchProduct } from "@/lib/store/dashboard/productData";

export default function ProductListing() {

    const products = useSelector((state: RootState) => state.productData.productDataUpdated)
    const operation = useSelector((state: RootState) => state.productData.operation)
    const status = useSelector((state: RootState) => state.productData.status)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    useEffect(() => {
        if ((operation === 'Updating' || operation === 'Deleting') && status === 'success') {
            dispatch(fetchProduct())

        }
    }, [operation, status])


    return (
        <>
            <div className="bg-gray-100 min-h-screen p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products && products.map(product => (
                        <ProductListingCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}