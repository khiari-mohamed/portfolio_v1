import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-[#4c1d95] text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/khiari-mohamed-aba313316"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.facebook.com/mouhamed.khiari.56" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a
        href="https://github.com/khiari-mohamed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;