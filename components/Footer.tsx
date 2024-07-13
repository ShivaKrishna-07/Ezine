import React from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import Link from "next/link";
import {
  BsFacebook,
  BsYoutube,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Ezine" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7 ">
        <Link href={"https://github.com/ShivaKrishna-07"}>
          <BsGithub className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={"https://www.linkedin.com/in/shivaaa07/"}>
          <BsLinkedin className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={"https://twitter.com/shiva_123_"}>
          <BsTwitterX className="text-2xl hover:text-red-500 duration-200" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        ©All rights reserved{""}
        <Link
          href={""}
          target="_blank"
          className="hover:text-white font-semibold duration-200"
        >
          @reactjd
        </Link>
      </p>
    </Container>
  );
};
