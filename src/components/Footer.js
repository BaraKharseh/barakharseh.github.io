import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto px-6 py-10 text-sm text-zinc-500 dark:text-zinc-400">
      <p>&copy; {new Date().getFullYear()} Bara Kharseh</p>
    </footer>
  );
};

export default Footer;
