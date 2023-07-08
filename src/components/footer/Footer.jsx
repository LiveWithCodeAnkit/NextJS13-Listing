import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 h-max">
        <div className="text-white flex flex-col justify-center items-start p-10 gap-5">
          <div className="flex  justify-center items-center gap-5 flex-wrap">
            <label>Home </label>|<label>Terms and Conditions</label>|
            <label>Privacy Policy</label>|<label>Collection Statement</label>|
            <label> Help</label>|<label> Manage Account</label>
          </div>
          <label>Copyright@2016 DEMO Streaming All Rights Reserved</label>

          <div className="flex justify-between items-center gap-4 lg:gap-80 flex-wrap">
            <div className="flex  justify-center items-center text-3xl gap-4 p-4">
              <label
                className="hover:text-blue-500  hover:border-green-400  delay-300 
                 hover:scale-125 transition duration-500 cursor-pointer"
              >
                <FaFacebookF />
              </label>
              <label
                className="hover:text-blue-500  hover:border-green-400  delay-300 
                 hover:scale-125 transition duration-500 cursor-pointer"
              >
                <BsTwitter />
              </label>
              <label
                className="hover:text-red-500  hover:border-green-400  delay-300 
                 hover:scale-125 transition duration-500 cursor-pointer"
              >
                <BsInstagram />
              </label>
            </div>
            <div className="flex justify-center items-center  flex-wrap">
              <Image
                src={"/apple.png"}
                width={200}
                height={200}
                className=" hover:border-green-400  delay-300 
                 hover:scale-125 transition duration-500 cursor-pointer"
              />
              <Image
                src={"/google.png"}
                width={200}
                height={200}
                className=" hover:border-green-400  delay-300 
                 hover:scale-125 transition duration-500 cursor-pointer"
              />
              <Image
                src={"/microsoft.png"}
                width={200}
                height={200}
                className=" hover:border-green-400  delay-300 
                 hover:scale-125 transition duration-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
