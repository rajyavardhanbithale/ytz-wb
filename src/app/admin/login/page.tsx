'use client'

import { useEffect, useState } from 'react'
import { adminAuth } from './action'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Login() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const searchParamsError = searchParams.get('error')

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (searchParamsError) {
            setLoading(false)
        }
    }, [searchParamsError])

    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white p-12 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
                        Admin Login
                    </h2>
                    <div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 mb-2 text-sm font-medium"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 mb-2 text-sm font-medium"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <span>
                            {searchParamsError && (
                                <p className="text-red-500 text-lg mb-4">
                                    {searchParamsError}
                                </p>
                            )}
                        </span>
                        <button
                            onClick={async () => {
                                await adminAuth({ email, password })
                                setLoading(true)
                            }}
                            type="submit"
                            className={`w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer`}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
