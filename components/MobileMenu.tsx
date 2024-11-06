"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface MobileMenuProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ openMenu, setOpenMenu }: MobileMenuProps) {
  const routes = [
    { title: "Home", href: "/" },
    { title: "Studio", href: "/studio" },
    { title: "About", href: "/about" },
  ];

  return (
    <div className={`md:hidden w-[60%] right-0  bg-white absolute flex shadow-2xl transition-transform duration-300 ease-in-out transform ${
        openMenu ? "translate-x-0" : "translate-x-full"
      }`}>
      {openMenu && (
        <div className="md:hidden w-full">
          <div className="px-2 flex flex-col  justify-center items-center w-full pt-2 pb-3 h-screen space-y-1 sm:px-3">
            {routes.map((route) => (
              <Link
                key={route.title}
                className="text-black p-2"
                href={route.href}
                onClick={() => setOpenMenu(false)}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
