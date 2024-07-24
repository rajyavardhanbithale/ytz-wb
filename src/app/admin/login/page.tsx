'use client'

import { createClientBrowser } from '@/utils/supabase/client'

import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        await login(email, password)
    }

    const supabase = createClientBrowser()

    const login = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            alert(error.message)
            return
        }

        if (data) {
            window.location.href = '/admin'
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white p-12 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
                        Admin Login
                    </h2>
                    <form onSubmit={handleSubmit}>
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

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
