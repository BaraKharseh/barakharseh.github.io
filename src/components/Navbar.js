import React, { useState } from "react";
import { Link } from "react-scroll";
import Theme from "./Theme";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let Links = [
    { name: "ABOUT", to: "about", id: "about" },
    { name: "PROJECTS", to: "projects", id: "projects" },
    { name: "CONTACT", to: "contact", id: "contact" },
  ];
  // let [open, setOpen] = useState(false);

  return (
    <div className="w-full absolute top-0 left-0">
      <div className="flex items-center justify-between py-10 p-10vw">
        <div className="text-2vw dark:text-white text-black font-merriweather font-bold">
          BARA KHARSEH
        </div>

        {/* <div
          onClick={() => setOpen(!open)}
          className="dark:text-white text-black text-3xl absolute right-8 top-9 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faX : faBars} />
        </div> */}

        <ul className="dark:text-white text-black font-merriweather flex">
          {Links.map((link) => (
            <li key={link.name} className="ml-8 text-1.5vw md:my-0">
              <Link
                to={link.to}
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
