"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className={cn(
            "text-2xl font-serif font-bold text-stone-800",
            isScrolled ? "text-black" : "text-white"
          )}
        >
          Willowbrook
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="/#home"
            className={cn(
              "text-stone-700 hover:text-emerald-600 transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Home
          </a>
          <a
            href="/#camps"
            className={cn(
              "text-stone-700 hover:text-emerald-600 transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Accommodations
          </a>
          <a
            href="/#experience"
            className={cn(
              "text-stone-700 hover:text-emerald-600 transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Experience
          </a>
          <a
            href="/#gallery"
            className={cn(
              "text-stone-700 hover:text-emerald-600 transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Gallery
          </a>
          <Link
            href="/blog"
            className={cn(
              "text-stone-700 hover:text-emerald-600 transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Blog
          </Link>
          <a
            href="/#contact"
            className={cn(
              "text-stone-700 hover:text-emerald-600 transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Contact
          </a>
        </div>
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full"
          onClick={() => router.push("/#booking")}
        >
          Book Now
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
