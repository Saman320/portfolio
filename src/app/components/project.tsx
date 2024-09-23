import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
    return (
        <div id="Project">
            <section className="text-gray-600 body-font relative bg-fixed bg-cover bg-center custom-image">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-semibold leading-tight text-gray-800 mb-6 shadow-lg">
                            My Projects
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900 font-semibold">
                        I take pride in delivering high-quality, user-focused projects. My recent work showcases
                            a blend of innovation and functionality, tailored to meet client needs in a dynamic digital landscape.
                        </p>
                    </div>
                    <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {/* Project 1 */}
                        <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
                            <Image
                                alt="gallery"
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                src={require("../../../public/assets/Projects/a5.jpeg")}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center text-white p-6">
                                    <h2 className="text-lg font-medium">CLI Calculator</h2>
                                    <p>A simple command line calculator built using TypeScript and inquirer library.</p>
                                    <Link href={"https://github.com/Saman320/Project00_calculator.git"}>
                                        <p className="mt-2 underline">View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
                            <Image
                                alt="gallery"
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                src={require("../../../public/assets/Projects/a7.jpg")}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center text-white p-6">
                                    <h2 className="text-lg font-medium">ATM Machine</h2>
                                    <p>ATM Machine built with TypeScript and powered by the npm inquirer package.</p>
                                    <Link href={"https://github.com/Saman320/Project05_word_counter.git"}>
                                        <p className="mt-2 underline">View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
                            <Image
                                alt="gallery"
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                src={require("../../../public/assets/Projects/a8.jpg")}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center text-white p-6">
                                    <h2 className="text-lg font-medium">Word Counter</h2>
                                    <p>A word counter built using Node.js with TypeScript for enhanced type safety.</p>
                                    <Link href={"https://github.com/Saman320/Project05_word_counter.git"}>
                                        <p className="mt-2 underline">View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
