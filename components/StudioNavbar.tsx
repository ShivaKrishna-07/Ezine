// import 'tailwindcss/tailwind.css';

import '../app/style/globals.css'

import Link from "next/link";
import React from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { Logo } from "./Logo";

export const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="nav">
      <Link
          href={"/"}
          className="nav-back"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        <Logo title="Ezine Studio" className="nav-title" />
        <p className="text-sm">Studio for Blog content</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};
