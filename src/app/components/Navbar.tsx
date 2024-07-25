import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";

function Navbar() {
  return (
    <div className='w-full h-[8%] bg-blue-500 flex justify-between md:justify-center items-center z-50 fixed top-0 left-0 '>
      <div className="mx-2">
        <img className='mr-10' src="" alt="web logo" />
      </div>
      <div className='hidden md:block w-[20%] h-[60%] '>
        <div className='w-full h-full rounded-sm bg-white flex justify-between items-center'>
          <input
            className='w-[90%] h-full rounded-sm border-none  pl-2'
            type="search"
            name=""
            id=""
            placeholder='  search here....'
            aria-controls=''
          />
          <IoSearchSharp className='w-[10%] h-[50%] opacity-35' />
        </div>
      </div>

      <div className='ml-10 w-fit md:w-[5%] bg-white px-2 py-1 rounded-sm border-none' >
        <DropdownMenu  >

          <DropdownMenuTrigger className='flex justify-between items-center w-full'>
            More <IoIosArrowDropdown />
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuLabel >
              My Account 
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>

        </DropdownMenu>
      </div>



    </div>
  )
}

export default Navbar