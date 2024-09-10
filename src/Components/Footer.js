import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-black bottom-0">
      {/* <p className="text-white text-xl flex justify-center  py-6  ">
        {" "}
        Design and Build by{" "}
        <span className="text-red-500 font-bold pl-2">KKMJ</span>
      </p> */}
      <div className="flex justify-center py-10">
        <p className="text-white">Follow me on social media :</p>
        <div className="flex ">
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-white text-2xl px-2">
              <AiFillLinkedin />
            </button>
          </a>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-white text-2xl px-2">
              <AiOutlineInstagram />
            </button>
          </a>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-white text-2xl px-2">
              <AiFillTwitterCircle />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
