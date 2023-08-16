import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-300 h-12 flex justify-center items-center space-x-4 pr-10">
      <span className="text-2xl">
        <a href="https://www.facebook.com/vlad.vidru" target="_blank">
          <BsFacebook />
        </a>
      </span>
      <span className="text-2xl">
        <a
          href="https://instagram.com/vladvidru?igshid=NGExMmI2YTkyZg=="
          target="_blank"
        >
          <AiFillInstagram />
        </a>
      </span>
    </div>
  );
}

export default Footer