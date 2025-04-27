import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [helloWorld, setHelloWorld] = useState("Hello, World!");

  // setInterval(() => {
  //   if (helloWorld == "Hello, World!") {
  //     setHelloWorld("👋🏼, 🌍!");
  //   } else {
  //     setHelloWorld("Hello, World!");
  //   }
  // }, 3000);

  return (
    <div
      id="home"
      className="flex h-screen flex-col justify-center items-center"
    >
      <h1 className="md:text-6xl text-2xl dark:text-white text-black font-bold font-times text-center md:mb-7 mb-5">
        {helloWorld}
      </h1>
      <h1 className="md:text-6xl text-2xl dark:text-white text-black font-bold font-times text-center md:mb-7 mb-5">
        My name is Bara Kharseh.
      </h1>
      <div className="md:flex md:space-x-20 space-x-10 md:text-2xl text-md dark:text-white text-black font-times">
        <a
          href="https://github.com/BaraKharseh"
          target="_blank"
          className="hover:text-gray-500 duration-300"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/barakharseh/"
          target="_blank"
          className="hover:text-blue-500 duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/1VZMK1RUZLibEmPwBZehxTqiSmiPjBqSC/view?usp=sharing"
          target="_blank"
          className="hover:text-orange-400 duration-300"
        >
          <FontAwesomeIcon icon={faUser} /> Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
