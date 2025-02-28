/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";

import { useState } from "react";
import logo from "../assets/images/logo.png";
import Navbar from "./Navbar";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center  md:px-6  md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src={logo}
              width={40}
              height={40}
              alt="Manjur al jubayer logo"
            />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            onClick={() => setNavOpen((prevent) => !prevent)}
            className="menu-btn md:hidden"
          >
            <span className="material-symbols-rounded">
              {navOpen ? <FaXmark /> : <FiMenu />}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end; "
        >
          {" "}
          <MdOutlineLocalPhone /> Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
