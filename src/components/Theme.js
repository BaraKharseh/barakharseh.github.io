import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hook/useDarkMode";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="link-muted"
      aria-label="Toggle dark mode"
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className="text-sm"
      />
    </button>
  );
};

export default Theme;
