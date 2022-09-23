import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../hook/useDarkMode";
import { useEffect } from "react";

const Theme = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button onClick={() => setTheme(colorTheme)} className="text-1.5vw ml-8">
      {colorTheme === "dark" ? (
        <FontAwesomeIcon
          icon={faSun}
          className="text-yellow-400 hover:text-yellow-500 duration-300"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="hover:text-gray-500 duration-300"
        />
      )}
    </button>
  );
};

export default Theme;
