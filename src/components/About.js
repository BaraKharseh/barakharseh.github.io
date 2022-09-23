import React from "react";
import profilePic from "../images/IMG_4334.jpg";

const About = () => {
  return (
    <div className="md:mb-20" id="about">
      <h1 className="text-4xl dark:text-white text-black font-bold font-merriweather text-center pt-10 pb-20">
        About Myself
      </h1>

      <div className="md:flex md:justify-center md:items-center">
        <img
          width={250}
          src={profilePic}
          alt="My profile picture"
          className="rounded-lg"
        />
        <div className="md:w-1/3 md:ml-40">
          <h1 className="text-xl dark:text-white text-black font-merriweather">
            Hi! I'm Bara, a second year undergraduate student at the University
            of Toronto. <br /> <br /> I am currently pursuing a double major in
            Computer Science and Human Biology. <br /> <br /> My interests
            include reading, playing sports and working out.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
