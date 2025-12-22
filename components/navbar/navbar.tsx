/** @format */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/data";

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 border-b border-white/5 bg-[#05070A]/60 backdrop-blur-xl'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-2 group'>
          <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform'>
            A
          </div>
          <span className='text-xl font-bold tracking-tight'>
            AIRI{" "}
            <span className='text-blue-500 text-sm block leading-none font-normal'>
              UZBEKISTAN
            </span>
          </span>
        </Link>

        <div className='hidden md:flex gap-10'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-gray-400 hover:text-white transition-colors'>
              {link.name}
            </Link>
          ))}
        </div>

        <button className='px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition-all shadow-lg shadow-blue-600/20'>
          Launch Portal
        </button>
      </div>
    </nav>
  );
}
