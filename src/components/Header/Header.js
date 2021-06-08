import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="fixed w-full flex items-center justify-between px-5 py-3 lg:justify-around bg-blue-100 z-50">
        <div className="logo">
          <h2 className="text-2xl lg:text-4xl">Fuschia Neptunium</h2>
        </div>

        <nav>
          <ul className="flex items-center">
            <li className="mx-2 lg:mx-5">
              <a href="#home" className="lg:text-xl">
                Home
              </a>
            </li>
            <li>
              <FaSearch className="lg:text-xl" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
