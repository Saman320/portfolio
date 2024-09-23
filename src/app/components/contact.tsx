import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
    return (
        <div id="Contact" className="bg-gray-100 py-16 custom-image">
            <section className="container mx-auto px-5">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
                    <p className="text-gray-600 mt-4">
                        Feel free to reach out for collaborations or just a friendly hello 👋
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Contact Item 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <div className="text-center">
                            <AiOutlineMail className="text-5xl text-green-900 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-800">Email</h3>
                          <Link href="mailto:samansiddiqui320@gmail.com">  <p className="text-gray-600">samansiddiqui320@gmail.com</p></Link>
                        </div>
                    </div>

                    {/* Contact Item 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <div className="text-center">
                            <AiOutlinePhone className="text-5xl text-green-900 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-800">Phone</h3>
                            <p className="text-gray-600">+923149261518</p>
                        </div>
                    </div>

                    {/* Contact Item 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <div className="text-center">
                            <AiOutlineEnvironment className="text-5xl text-green-900 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-800">Location</h3>
                            <p className="text-gray-600">Karachi Sindh</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-12 flex justify-center items-center">
                    <form className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Send me a message</h3>
                        
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:border-green-900"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:border-green-900"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:border-green-900"
                                
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-900 text-white font-medium p-3 rounded-lg hover:bg-green-800 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
