import React, { useState } from "react";
import { Link } from "react-scroll";
import Theme from "./Theme";

const links = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          to="home"
          smooth
          duration={500}
          className="text-sm font-medium cursor-pointer"
        >
          BK
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              className="link-muted cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Theme />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Theme />
          <button
            onClick={() => setOpen(!open)}
            className="text-sm link-muted"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 space-y-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              onClick={() => setOpen(false)}
              className="block link-muted cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
