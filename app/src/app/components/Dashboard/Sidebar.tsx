import { AppDispatch } from '@/lib/store'
import { selectOperation } from '@/lib/store/dashboard/operationSlice'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useDispatch } from 'react-redux'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => setIsOpen(!isOpen)
    const dispatch = useDispatch<AppDispatch>()
    const options = [
        'Dashboard',
        'Add Product',
        'Orders',
        'Customers',
        'Settings',
    ]

    return (
        <>
            {/* Hamburger button */}
            <button
                className="z-[101] fixed top-4 left-4 p-2 bg-blue-950 text-white rounded-md md:hidden"
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
            >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`z-[100] fixed top-0 left-0 h-full bg-blue-950 text-white flex flex-col w-fit shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
            >
                <div className="p-4 mt-16 sm:mt-0">
                    <h2 className="text-3xl font-semibold">Admin Panel</h2>
                </div>

                <nav className="flex flex-col flex-1 justify-center gap-5 p-2">
                    {options.map((item, idx) => (
                        <button
                            key={idx}
                            className="text-xl bg-blue-900/20 rounded-2xl block w-full p-4 text-left hover:bg-blue-700 duration-700"
                            onClick={() => {
                                dispatch(selectOperation(item))
                                setIsOpen(false)
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    )
}
