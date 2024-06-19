"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavbarLinks = {
  href: string;
  label: string;
};

const navLinks: NavbarLinks[] = [
  { href: "/", label: "Home" },
  {
    href: "/posts",
    label: "Posts",
  },
  {href:'/create-post',
  label: "Create post",
  }
];
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt=""
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={` ${pathName === link.href ? 'text-zinc-900' :'text-zinc-400'}`} href={link?.href}>
                {link?.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
