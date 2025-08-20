"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 z-50 w-full bg-[var(--background)] md:px-8 py-4 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}>
      <div className="w-full flex">
        {/* Left Section with 3 Links */}
        <section className="flex space-x-4 items-center gap-4">
          <div className="flex flex-row items-center">
            <Image
              // style={{ marginTop: -5 }}
              src="/akshit_avatar.png"
              alt="Akshit"
              width={50}
              height={50}
              priority
            />
            <div className="font-medium text-2xl">akshit5230</div>
          </div>
          
          <Link href="/link1" className="hover:underline">
            Link 1
          </Link>
          <Link href="/link2" className="hover:underline">
            Link 2
          </Link>
          <Link href="/link3" className="hover:underline">
            Link 3
          </Link>
        </section>

        {/* Middle Section with Icon */}
        {/* <section className="flex justify-center">
          <Link href="/" className="text-lg font-semibold hover:underline">
            ICON
          </Link>
        </section> */}

        {/* Right Section with 3 Links */}
        {/* <section className="flex space-x-4">
          <Link href="/link4" className="hover:underline">
            Link 4
          </Link>
          <Link href="/link5" className="hover:underline">
            Link 5
          </Link>
          <Link href="/link6" className="hover:underline">
            Link 6
          </Link>
        </section> */}
      </div>
    </nav>
  );
}