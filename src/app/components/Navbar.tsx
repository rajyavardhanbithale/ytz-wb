import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



function Navbar() {
  return (
    <div className='w-full h-[8%] bg-blue-500 flex justify-center items-center z-50 fixed top-0 left-0 '>
        <div className="mx-2">
            <img className='' src="" alt="web logo" />
        </div>
        <div className='w-[20%] h-[60%] rounded-sm bg-white'>
            <input 
                className='w-full h-full rounded-sm'
                type="search" 
                name="" 
                id=""
                placeholder=' search here....'
                
                />

        </div>
        <div className='mx-4'>
          <DropdownMenu >
            <DropdownMenuTrigger>More  👇</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
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