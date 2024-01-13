import React from "react";
import profilePic from "../images/Bara-Kharseh-bara.kharseh@mail.utoronto.ca.jpg";

const About = () => {
  return (
    <div className="mb-10" id="about">
      <h1 className="md:text-4xl text-3xl dark:text-white text-black font-bold font-merriweather text-center pt-10 md:pb-20 pb-10">
        About Myself
      </h1>

      <div className="md:flex md:justify-center md:items-center">
        <img
          width={250}
          src={profilePic}
          alt="My profile picture"
          className="rounded-lg md:mx-0 mx-auto"
        />
        <div className="md:w-1/3 md:ml-40 mx-10 md:mt-0 mt-10">
          <h1 className="text-2xl dark:text-white text-black font-merriweather md:text-left text-center font-bold">
            Hi! I'm Bara <br /> <br />
          </h1>
          <h1 className="md:text-xl text-lg dark:text-white text-black font-merriweather">
            I'm a third year undergraduate student at the University of Toronto.{" "}
            <br /> <br /> I am currently pursuing a double major in Computer
            Science and Human Biology. <br /> <br /> My interests include
            reading, playing sports and working out. <br /> <br /> Feel free to
            contact me via my LinkedIn or by using the form below!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
