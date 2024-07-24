import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);


    const options = ['Dashboard', 'Products', 'Orders', 'Customers', 'Settings']

    return (
        <>

            <button
                className="fixed top-4 left-4 z-50 p-2 bg-blue-950 text-white rounded-md md:hidden"
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
            >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>


            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-blue-950 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:w-64 md:relative md:h-screen`}
            >
                <div className="p-4 mt-10 sm:mt-0">
                    <h2 className="text-3xl font-semibold">Admin Panel</h2>
                </div>

                <nav className="flex flex-col h-full justify-center gap-5 p-2">
                    {options.map((item, idx) => (
                        <button
                            key={idx}
                            className="text-xl  bg-blue-900/20 rounded-2xl block w-full p-4 text-left hover:bg-blue-700  duration-700">
                            {item}
                        </button>
                    ))}

                </nav>
            </div>
        </>
    );
}
