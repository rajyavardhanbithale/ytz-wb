import React from 'react'
import {
<<<<<<< HEAD
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className='w-full h-[8%] bg-white flex justify-between md:justify-center items-center z-50 fixed top-0 left-0 '>
      <div className="mx-2">
        <img className='mr-10' src="" alt="web logo" />
      </div>
      <div className='hidden md:block w-[35%] h-[60%] '>
        <div className='w-full h-full rounded-md bg-blue-50 flex justify-between items-center  border-2 border-gray-100 '>
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

      <div className='mx-10 w-fit md:w-[7%] h-[60%] bg-white px-2 py-1 rounded-md border-none  hover:bg-blue-600 flex flex-col items-center justify-center ' >
        {/* <VscAccount className='h-full font-bold' /> Login <IoIosArrowDropdown /> */}
        <NavigationMenu className='w-full h-full  flex justify-around items-center'>
          <NavigationMenuList>
            <NavigationMenuItem>

              <NavigationMenuTrigger className='w-full flex justify-around items-center hover:text-white text-lg'>
                <VscAccount className='h-full font-bold text-xl mx-1' /> Login
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <NavigationMenuLink>
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>

            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </div>



    </div>
  )
=======
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IoSearchSharp } from 'react-icons/io5'
import { IoIosArrowDropdown } from 'react-icons/io'

function Navbar() {
    return (
        <div className="w-full h-[8%] bg-blue-500 flex justify-between md:justify-center items-center z-50 fixed top-0 left-0 ">
            <div className="mx-2">
                <img className="mr-10" src="" alt="web logo" />
            </div>
            <div className="hidden md:block w-[20%] h-[60%] ">
                <div className="w-full h-full rounded-sm bg-white flex justify-between items-center">
                    <input
                        className="w-[90%] h-full rounded-sm border-none  pl-2"
                        type="search"
                        name=""
                        id=""
                        placeholder="  search here...."
                        aria-controls=""
                    />
                    <IoSearchSharp className="w-[10%] h-[50%] opacity-35" />
                </div>
            </div>

            <div className="ml-10 w-fit md:w-[5%] bg-white px-2 py-1 rounded-sm border-none">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex justify-between items-center w-full">
                        More <IoIosArrowDropdown />
                    </DropdownMenuTrigger>
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
>>>>>>> origin/main
}

export default Navbar