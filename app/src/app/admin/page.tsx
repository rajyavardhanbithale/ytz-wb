'use client'

import { useSelector } from 'react-redux'
import ProductInput from '../components/Dashboard/ProductAdd/ProductInput'
import { RootState } from '@/lib/store'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import ProductListing from '../components/Dashboard/Dashboard/ProductListing'

export default function Admin() {
    const status = useSelector((state: RootState) => state.productData.status)
    const operation = useSelector(
        (state: RootState) => state.productData.operation
    )
    const selection = useSelector(
        (state: RootState) => state.operation.selectedOperation
    )

    useEffect(() => {
        if (status === 'pending') {
            toast.loading(`${operation}...`, { id: 'saving' })
        } else if (status === 'success') {
            toast.success('Success', { id: 'saving' })
        } else if (status === 'error') {
            toast.error('Could not save.', { id: 'saving' })
        }
    }, [status])

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            {selection === 'Add Product' && <ProductInput />}

            <div className="grid grid-cols-8 ">
                <div className="sm:col-span-2 xl:col-span-1 ">
                    <Sidebar />
                    123132
                </div>
                <div className="col-span-8 sm:col-span-6 xl:col-span-7 ">
                    <ProductListing />
                </div>
            </div>
        </>
    )
}
