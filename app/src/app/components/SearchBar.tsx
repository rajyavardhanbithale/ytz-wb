import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

function SearchBar() {
  return (
    <div className='mt-5 w-full bg-white h-12 flex justify-center items-center md:hidden'>
        <div className='w-[90%] h-[90%] rounded-md bg-blue-50 flex justify-between items-center  border-2 border-gray-100 '>
            <IoSearchSharp className='w-[5%] h-[60%] opacity-40' />
            <input
                className='w-[95%] h-full bg-blue-50 border-none rounded-md  px-4 outline-none appearance-none '
                type="search"
                name=""
                id=""
                placeholder='Search for Product, Brand & more...'
                aria-controls=''
            />
        </div>
    </div>
  )
}

export default SearchBar