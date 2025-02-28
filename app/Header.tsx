"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    link: "/blog",
    title: "Blog",
  },
  {
    link: "/products",
    title: "Products",
  },
  {
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    link: "/login",
    title: "Login",
  },
  {
    link: "/register",
    title: "Register",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-3">
        <Link href="/">Home</Link>
      {navLinks.map((navLink) => {
        const isActive =
          pathname === navLink.link ||
          (pathname.startsWith(navLink.link) && navLink.link !== "/");
        return (
          <Link
            className={isActive ? "text-red-700 font-bold" : "text-blue-500"}
            key={navLink.title}
            href={navLink.link}
          >
            {navLink.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
