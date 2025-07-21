"use client";

import {
  LogoutLink,
  LoginLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
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
  { href: "/create-post", label: "Create post" },
];
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  const { user, isLoading } = useKindeBrowserClient();

  return (
    <header className="flex justify-between items-center  p-4 md:px-6 border-b">
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
              <Link
                className={` ${
                  pathName === link.href
                    ? "text-zinc-900 underline font-bold"
                    : "text-zinc-400"
                }`}
                href={link?.href}
              >
                {link?.label}
              </Link>
            </li>
          ))}
          {!isLoading && (
            <li>
              {user ? (
                <LogoutLink>
                  <span className="text-zinc-400 hover:text-zinc-900 transition">
                    Logout
                  </span>
                </LogoutLink>
              ) : (
                <LoginLink>
                  <span className="text-zinc-400 hover:text-zinc-900 transition">
                    Login
                  </span>
                </LoginLink>
              )}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
