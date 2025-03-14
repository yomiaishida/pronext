"use client";
import { ShoppingCart, User, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 shadow-md backdrop-filter backdrop-blur-lg border-b border-white/20 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="ProGadget Logo"
          width={40}
          height={40}
          className="bg-primary rounded-full"
        />
        <span className="text-xl font-semibold text-foreground">ProGadget</span>
      </Link>

      {/* Search Bar */}
      <div className="relative flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full px-4 py-2 text-white bg-gray-700 bg-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-secondary backdrop-filter backdrop-blur-lg shadow-lg"
        />
        <button className="absolute right-2 p-2 text-primary hover:text-primary/80">
          <Search size={20} />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 ">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-teal-600">
          <ShoppingCart size={22} />
          <span className="hidden sm:inline">Cart</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-teal-600">
          <User size={22} />
          <Link href="/login" className="hidden sm:inline">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
