import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800">
        <div className="text-white flex flex-col justify-center items-start p-10">
          <div className="flex  justify-center items-center gap-5">
            <label>Home</label>
            <label>Terms and Conditions</label>
            <label>Privacy Policy</label>
            <label>Collection Statement</label>
            <label> Help</label>
            <label> Manage Account</label>
          </div>
          <label>Copyright@2016 DEMO Streaming All Rights Reserved</label>

          <div className="flex justify-between gap-14">
            <div className="flex  justify-center items-center">
              <label>FaceBook</label>
              <label>Twiter</label>
              <label>InstaGram</label>
            </div>
            <div>
              <label>Apple Img</label>
              <label>google Img</label>
              <label>microsoft Img</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
