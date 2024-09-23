"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#8FBC8F] z-50 sticky top-0">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-4 md:p-2 flex-col md:flex-row items-center justify-between">
                    {/* Logo Section */}
                    <a className="flex title-font font-medium items-center text-gray-900">
                        <Image src={require("../../../public/assets/Picture/sa.png")} alt="Please wait"
                            width={50}
                            height={50}
                            className="w-[50px]" />
                        <span className="text-gray-1000 font-bold ml-3 text-xl">Saman Siddiqui</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation Links */}
                    <nav className={`md:flex md:ml-auto md:items-center text-base justify-center space-y-2 md:space-y-0
                        ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <Link href="/" className="text-gray-900 font-bold mr-5 hover:text-green-600">Home</Link>
                        <Link href="#About" className="text-gray-900 font-bold mr-5 hover:text-green-600">About</Link>
                        <Link href="#Skills" className="text-gray-900 font-bold mr-5 hover:text-green-600">Skills</Link>
                        <Link href="#Project" className="text-gray-900 font-bold mr-5 hover:text-green-600">Projects</Link>
                        <Link href="#Contact" className="text-gray-900 font-bold mr-5 hover:text-green-600">Contact</Link>
                    </nav>

                    {/* Download CV Button */}
                    <a href="/assets/cv.pdf">
                        <button className="font-semibold text-white bg-green-800 inline-flex items-center py-1 px-3 
                        focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">
                            Download CV
                            <MdOutlineFileDownload className="text-xl ml-2" />
                        </button>
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
