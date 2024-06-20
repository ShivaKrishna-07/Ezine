import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'

export const Navbar = () => {

    const navigation = [
        { title: "Home", href: '/'},
        { title: "Features", href: '/features'},
        { title: "About Me", href: '/about'},
        { title: "Studio", href: '/studio'},
    ]

  return (
    <div className='w-full bg-white/70 h-20 shadow-md'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:p-0 h-full'>
            <Logo title= "Ezine" />
            <div className='hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200'>
                {
                    navigation.map(item=>(
                        <Link href={item.href} className='text-sm uppercase font-semibold relative group overflow-hidden'>
                            {item.title}
                            <span className='w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200 '/>
                        </Link>
                    ))
                }
            </div>
            <div className='md:hidden'>
                <FiMenu className='text-2xl'/>
            </div>
        </div>
    </div>
  )
}