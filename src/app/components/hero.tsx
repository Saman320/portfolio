"use client"
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero = () => {
    return (
        <section className="text-gray-600 font-bold bg-cover bg-center custom-image bg-fixed">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                
                {/* Image Section (Reordered on smaller screens) */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center mb-8 md:mb-0">
                    <div className="ring-2 ring-green-700/50 outline-double outline-3 outline-offset-2 rounded-full aspect-square shadow-xl">
                        <Image
                            className="object-cover rounded-full"
                            alt="Profile Picture"
                            width={500}
                            height={500}
                            src={require("../../../public/assets/Picture/Capture.PNG")}
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        I am
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'UI/UX Designer', 'AI Expert'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="w-[100px] h-[2px] bg-green-900 mb-4"></div>
                    <p className="mb-8 leading-relaxed text-base sm:text-lg md:text-xl">
                        I am a web development and AI expert with a passion for creating innovative
                        and user-friendly solutions. With over 5 years of experience in the tech industry,
                        I have had the opportunity to work on various projects that have helped me hone my
                        skills and stay up to date with the latest trends.
                    </p>

                    <div className="flex justify-center">
                        <Link href={"#Contact"}>
                            <button className="font-semibold text-white bg-green-800 inline-flex items-center border-0 py-2 px-6 
                            focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
