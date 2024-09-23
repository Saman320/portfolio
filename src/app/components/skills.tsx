
import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Skills = () => {
    return (
        <div id="Skills">
            <section className="text-gray-600 font-bold bg-cover bg-center custom-image bg-fixed">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h2 className="text-xs text-green-900 tracking-widest font-medium title-font mb-1">
                            Skills
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-semibold leading-tight text-gray-800 mb-6 shadow-lg">
                            My Skills
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {/* Skill 1 */}
                        <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
                            <div className="flex rounded-lg h-full p-6 flex-col bg-white shadow-lg bg-gray-200">
                                <div className="flex items-center mb-3 bg-gray-200">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white">
                                        <AiOutlineCheckSquare className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-bold">
                                        HTML
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                        <div className="absolute bg-green-900 h-1 rounded-xl w-[100%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-900 text-right mt-2">100%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skill 2 */}
                        <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
                            <div className="flex rounded-lg h-full p-6 flex-col bg-white shadow-lg bg-gray-200">
                                <div className="flex items-center mb-3 bg-gray-200">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white">
                                        <AiOutlineCheckSquare className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-bold">
                                        CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                        <div className="absolute bg-green-900 h-1 rounded-xl w-[95%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-900 text-right mt-2">95%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skill 3 */}
                        <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
                            <div className="flex rounded-lg h-full p-6 flex-col bg-white shadow-lg bg-gray-200">
                                <div className="flex items-center mb-3 bg-gray-200">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white">
                                        <AiOutlineCheckSquare className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-bold">
                                        JavaScript/TypeScript
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                        <div className="absolute bg-green-900 h-1 rounded-xl w-[90%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-900 text-right mt-2">90%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skill 4 */}
                        <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
                            <div className="flex rounded-lg h-full p-6 flex-col bg-white shadow-lg bg-gray-200">
                                <div className="flex items-center mb-3 bg-gray-200">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white">
                                        <AiOutlineCheckSquare className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-bold">
                                        NEXT JS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                        <div className="absolute bg-green-900 h-1 rounded-xl w-[70%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-900 text-right mt-2">70%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skill 5 */}
                        <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
                            <div className="flex rounded-lg h-full p-6 flex-col bg-white shadow-lg bg-gray-200">
                                <div className="flex items-center mb-3 bg-gray-200">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white">
                                        <AiOutlineCheckSquare className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-bold">
                                        Graphic Designing (Canva)
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                        <div className="absolute bg-green-900 h-1 rounded-xl w-[90%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-900 text-right mt-2">90%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skill 6 */}
                        <div className="p-4 sm:w-1/2 md:w-1/3 w-full ">
                            <div className="flex rounded-lg h-full p-6 flex-col bg-white shadow-lg bg-gray-200">
                                <div className="flex items-center mb-3 bg-gray-200">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white">
                                        <AiOutlineCheckSquare className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-bold">
                                        Wordpress
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                        <div className="absolute bg-green-900 h-1 rounded-xl w-[75%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-900 text-right mt-2">75%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;
