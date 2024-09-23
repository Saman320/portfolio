import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#8FBC8F] w-full z-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center flex-col sm:flex-row">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../../../public/assets/Picture/sa.png")}
              alt="Please wait"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="text-grey-1000 font-bold ml-3 text-xl">
              SAMAN SIDDIQUI
            </span>
          </a>
          <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 SAMAN SIDDIQUI
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.facebook.com/saman.siddiqui.5682"
              className="mr-5 text-gray-500"
            >
              <BsFacebook className="text-2xl hover:text-[#3b5998]" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/saman_siddiqui320/"
              className="mr-5 text-gray-500"
            >
              <BsInstagram className="text-2xl hover:text-[#8a3ab9]" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/saman-siddiqui-0023b3292/"
              className="mr-5 text-gray-500"
            >
              <BsLinkedin className="text-2xl hover:text-[#0e76a8]" />
            </Link>
            <Link
              target="_blank"
              href="http://www.youtube.com/@academicmentors"
              className="mr-5 text-gray-500"
            >
              <BsYoutube className="text-3xl hover:text-[#ff0000]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
