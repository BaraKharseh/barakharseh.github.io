import React, { useState } from "react";
import { Link } from "react-scroll";
import Theme from "./Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let Links = [
    { name: "ABOUT", to: "about", id: "about" },
    { name: "PROJECTS", to: "projects", id: "projects" },
    { name: "CONTACT", to: "contact", id: "contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full absolute top-0 left-0">
      <div className="md:flex items-center justify-between md:py-10 py-5 md:p-10vw px-7">
        <div className="md:text-2xl text-xl dark:text-white text-black font-merriweather font-bold">
          BARA KHARSEH
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="flex dark:text-white text-black absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faX : faBars} className="text-xl" />
          <div className="font-merriweather ml-3">
            {open ? "Close" : "Menu"}
          </div>
        </div>

        <ul
          className={`dark:text-white text-black font-merriweather md:flex md:items-center absolute md:static w-full md:w-auto transition-all duration-300 ease-in-out ${
            open ? "left-7 opacity-100" : "left-[-90px]"
          } md:opacity-100`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:text-xl text-lg md:my-0 my-7"
            >
              <Link
                to={link.to}
                onClick={() => setOpen(!open)}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-gray-400 duration-300 scroll-smooth hover:cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Theme />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
