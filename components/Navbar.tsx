"use client"

import React, { useState } from 'react';
import { Logo } from './Logo';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import MobileMenu from './MobileMenu'; // Import your MobileMenu component
import { GoX } from 'react-icons/go';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // Mobile menu state

  const navigation = [
    { title: "Home", href: '/' },
    { title: "Studio", href: '/studio/structure' },
    { title: "Features", href: '/features' },
    { title: "About Me", href: '/about' },
  ];

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:p-0 h-full">
        <Logo title="Ezine" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map(item => (
            <Link key={item.title} href={item.href} className="text-sm uppercase font-semibold relative group overflow-hidden">
              {item.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (<GoX className="text-2xl" />):(<FiMenu className="text-2xl" />)}
          
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};
