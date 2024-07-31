import React from 'react'
import {
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
import { VscAccount } from "react-icons/vsc";
import { IoCart } from "react-icons/io5";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { BsThreeDotsVertical } from "react-icons/bs";


function Navbar() {
  return (
    <div className='w-full h-[6%] md:h-[8%] bg-white flex justify-between md:justify-center items-center z-50 fixed top-0 left-0 '>
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
      <div className='w-fit h-[60%] flex justify-center md:justify-between items-center'>

        <div className='ml-10 w-fit h-full bg-white px-2 py-1 rounded-md border-none  md:hover:bg-blue-600 flex flex-col items-center justify-center ' >
          {/* <VscAccount className='h-full font-bold' /> Login <IoIosArrowDropdown /> */}
          <NavigationMenu className='w-full h-full  flex justify-around items-center'>
            <NavigationMenuList>
              <NavigationMenuItem>

                <NavigationMenuTrigger className='w-full flex justify-around items-center md:hover:text-white text-lg transition delay-200'>
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
        <div className="mx-0 md:ml-2 w-fit h-full flex justify-around items-center  text-xl hover:bg-gray-100 px-2 py-1 rounded-md transition-all delay-300">
          <IoCart className='mr-1' /> <h1 className='hidden md:block'>Cart</h1>
        </div>

        <div>
          <Menubar className='border-none  md:ml-5'>
            <MenubarMenu>
              <MenubarTrigger >
                <BsThreeDotsVertical className='w-5 h-6'/>
              </MenubarTrigger>
              <MenubarContent className='bg-white '>
                <MenubarItem>
                  Notification Prefrence 
                </MenubarItem>
                <MenubarItem>
                  24 hour Coustomer Care
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                   Download App 
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

      </div>
    </div>
  )
}

export default Navbar