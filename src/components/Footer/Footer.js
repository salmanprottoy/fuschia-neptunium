import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="px-5 py-20 lg:max-w-7xl lg:mx-auto">
        <div className="mb-10 md:flex md:items-center md:justify-between">
          <h2 className="text-4xl mb-2">Fuschia Neptunium</h2>
          <p>Follow us on social media</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:justify-between">
          <p>
            &copy; Copyright Fuschia Neptunium, {new Date().getFullYear()} All
            Rights Reserved
          </p>

          <ul className="flex mb-2">
            <li className="mx-2 text-2xl">
              <a href="https://www.facebook.com/salman.prottoy1">
                <GrFacebook />
              </a>
            </li>
            <li className="mx-2 text-2xl">
              <a href="https://twitter.com/salman_prottoy">
                <GrTwitter />
              </a>
            </li>
            <li className="mx-2 text-2xl">
              <a href="https://www.instagram.com/salman_prottoy">
                <GrInstagram />
              </a>
            </li>
            <li className="mx-2 text-2xl">
              <a href="https://github.com/salmanprottoy">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
