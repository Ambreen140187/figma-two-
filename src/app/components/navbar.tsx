"use client"
import { useState } from 'react';
 import Image from "next/image";



 export default function Header() {
   

            
      
        const [isMenuOpen, setIsMenuOpen] = useState(false);
      
        return (
          <div className="container flex justify-between items-center py-4 px-8 bg-blue-800 text-white mx-auto">
            {/* Logo and Title */}
            <div className="flex items-center gap-2">
              <Image
                src="/image/Logo Icon.png"
                width={30}
                height={30}
                alt="logo pic"
              />
              <h3 className="text-2xl font-bold">Whitespace</h3>
            </div>
      
            {/* Hamburger Menu Icon */}
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
      
            {/* Navbar */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex items-center space-x-8`}
            >
              <div className="group relative">
                <button className="hover:text-blue-300">Products</button>
                <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-4 rounded shadow">
                  <a href="#" className="block hover:text-blue-900">
                    Product 1
                  </a>
                  <a href="#" className="block hover:text-blue-900">
                    Product 2
                  </a>
                </div>
              </div>
              <div className="group relative">
                <button className="hover:text-blue-300">Solutions</button>
              </div>
              <div className="group relative">
                <button className="hover:text-blue-300">Resources</button>
              </div>
              <button className="hover:text-blue-300">Pricing</button>
            </div>
      
            {/* Buttons */}
            <div className="space-x-4 hidden md:block">
              <button className="bg-yellow-300 text-blue-900 py-2 px-4 rounded hover:bg-yellow-400">
                Login
              </button>
              <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600">
                Try Whitespace Free →
              </button>
            </div>
      
            {/* Mobile Menu */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:hidden mt-4 space-y-4 text-center`}
            >
              <a href="#" className="block hover:text-blue-300">
                Products
              </a>
              <a href="#" className="block hover:text-blue-300">
                Solutions
              </a>
              <a href="#" className="block hover:text-blue-300">
                Resources
              </a>
              <a href="#" className="block hover:text-blue-300">
                Pricing
              </a>
              <button className="bg-yellow-300 text-blue-900 py-2 px-4 rounded hover:bg-yellow-400 w-full">
                Login
              </button>
              <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 w-full">
                Try Whitespace Free →
              </button>
            </div>
          </div>
        );
      }
      
       
 
  
    