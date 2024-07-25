import React from 'react'

import { FaExclamationTriangle } from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi'
import Link from 'next/link'

export default function ProductNotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <FaExclamationTriangle className="text-red-600 text-6xl mb-4" />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Product Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    The product you&apos;re looking for doesn&apos;t exist or
                    has been moved.
                </p>
                <div className="flex gap-4">
                    <Link href="/">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition duration-300">
                            <HiOutlineSearch className="text-xl" />
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
