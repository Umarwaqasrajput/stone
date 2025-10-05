"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-lg sticky top-0 z-50 shadow-lg border-b border-orange-500">
      <div className="container mx-auto px-6 py-4 flex justify-center gap-10">
        <Link href="/" className="text-white hover:text-orange-500 font-semibold transition">
          Home
        </Link>
        <Link href="/machinery" className="text-white hover:text-orange-500 font-semibold transition">
          Machinery
        </Link>
        <Link href="/products" className="text-white hover:text-orange-500 font-semibold transition">
          Products
        </Link>
        <Link href="/contact" className="text-white hover:text-orange-500 font-semibold transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
