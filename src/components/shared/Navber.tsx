"use client"

import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger
} from '../ui/navigation-menu'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from 'next/navigation'

const Navber = () => {

    const pathname = usePathname()

    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return (
        <header className='py-4 shadow-md'>

            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>

                {/* logo */}
                <div className='text-xl font-bold'>
                    <Link href="/">Daily News</Link>
                </div>

                {/* desktop menu */}
                <NavigationMenu className='hidden lg:flex'>
                    <NavigationMenuList className='flex items-center space-x-6'>

                        {/* News Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news"
                                className={`px-4 py-2 ${pathname === '/news' ?
                                    'text-pink-600 font-semibold' : ''} hover:text-pink-600`}
                            >
                                News
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Services Dropdown */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-gray-700 px-4 py-2 hover:text-pink-600'>
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-white shadow-lg p-4 rounded-md'>
                                <ul className='space-y-2 text-sm'>
                                    <li>
                                        <NavigationMenuLink href="/web" className='hover:text-pink-600 block'>
                                            Web Development
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href="/apps" className='hover:text-pink-600 block'>
                                            Mobile Apps
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href="/seo" className='hover:text-pink-600 block'>
                                            SEO
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* About Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/about"
                                className={`px-4 py-2 ${pathname === '/about' ?
                                    'text-pink-600 font-semibold' : ''} hover:text-pink-600`}>
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Contact Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/contact"
                                className={`px-4 py-2 ${pathname === '/contact' ?
                                    'text-pink-600 font-semibold' : ''} hover:text-pink-600`}>
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                {/* color switcher and login button */}

                <div className='hidden lg:flex items-center space-x-4'>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-700">Dark Mode</span>
                        <Switch />
                    </div>
                    <Button variant="default">Login</Button>
                </div>

                {/* mobile hambuger menu */}
                <div className='lg:hidden'>
                    <Button onClick={toggleMenu} variant="outline">
                        {isMenuOpen ? <RxCross2 size={24}/> : <GiHamburgerMenu size={24}/>}
                    </Button>
                </div>
            </nav>

        </header>
    )
}

export default Navber

//button ::add to cart, remove from cart, "use client"
//hooks: useState, useEffect "use client"