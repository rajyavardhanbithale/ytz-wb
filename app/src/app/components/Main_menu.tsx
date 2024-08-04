import React from 'react'
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
import { FaAngleDown } from "react-icons/fa";

function Main_menu() {
  return (
    <Menubar className=' border-none md:mt-16 w-full md:w-[80%]  h-[20%] flex justify-around items-center bg-white '>
      <MenubarMenu>
        <MenubarTrigger className='flex flex-col justify-center items-center'>
          <img className='w-10 h-20' src="/grocery.jpg" alt="afs" />
          <div className=" w-full flex items-center justify-center">Category <FaAngleDown/></div>
        </MenubarTrigger>
        <MenubarContent className='bg-white '>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Brands <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Buy... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Main_menu