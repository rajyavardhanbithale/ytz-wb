'use client'

import { useSelector } from 'react-redux'
import ProductInput from '../components/Dashboard/ProductInput'
import { RootState } from '@/lib/store'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

export default function Admin() {
    const status = useSelector((state: RootState) => state.productData.status)

    useEffect(() => {
        if (status === 'pending') {
            toast.loading('Adding...', { id: 'saving' })
        } else if (status === 'success') {
            toast.success('Product Added!', { id: 'saving' })
        } else if (status === 'error') {
            toast.error('Could not save.', { id: 'saving' })
        }
    }, [status])

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <ProductInput />
        </>
    )
}
