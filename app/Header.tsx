"use client";
import { useState } from "react";
import Image from "next/image";
import { X, Menu, WholeWord, WholeWordIcon, Globe, Globe2, ChevronRight, ChevronDown } from "lucide-react"; // for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full mx-auto mt-5 bg-[#ffffff] text-[#a2a2a2]">
       
      <nav className=" px-6  py-6 ">
        <div className="flex justify-between items-center  font-semibold">
          {/* Title and logo */}
          <div className="flex items-center space-x-1">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-xl text-[#212121] font-bold">Task.Co</h1>
          </div>
        
          {/* Desktop Menu */}
          <ul className="hidden  md:flex justify-between text-[#909090] font-sans text-sm space-x-6">
            <li className="cursor-pointer ">Products</li>
            <li className="cursor-pointer ">Solutions </li>
            <li className="cursor-pointer ">Resources </li>
            <li className="cursor-pointer ">Pricing</li>
            <li className="cursor-pointer ">Enterprise</li> 
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4 cursor-pointer">
           
            <button className="hidden sm:block bg-[#f7f7f7] text-[#929292] text-sm py-2 px-5 rounded-lg text-sm">
                Contact Us
            </button>
            <button className="bg-[#756df0] text-[#464646] text-sm py-2 px-5 rounded-lg cursor-pointer">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden  text-[#000000] font-bold"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 flex">
          <div className="w-48 bg-[#1d1d1d] shadow-xl p-6 space-y-6 relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-[#e7e6e7]"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Sidebar Links */}
            <ul className="flex flex-col text-lg text-[#909090] space-y-4 mt-12 ">
              <li className="cursor-pointer ">Products</li>
            <li className="cursor-pointer ">Solutions </li>
            <li className="cursor-pointer ">Resources </li>
            <li className="cursor-pointer ">Pricing</li>
            <li className="cursor-pointer ">Enterprise</li> 
            <h1 className="cursor-pointer">Contact Us</h1>
            </ul>
          </div>

          {/* Click outside closes sidebar */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
}
