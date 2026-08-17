import React from "react";
import profilePic from "../images/IMG_2406.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800"
    >
      <h2 className="section-label">About</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <img
          src={profilePic}
          alt="Bara Kharseh"
          width={200}
          height={200}
          className="rounded-md"
        />
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I graduated with an HBSc in Computer Science and Human Biology from
          the University of Toronto in June 2026 (GPA 3.90, Dean's List). I've
          built full-stack software at SickKids and done research in cancer
          genomics and neurophysiology. I'm looking for full-time roles in
          health tech and biotech. In my free time, I play soccer, train
          calisthenics, and read a lot. Feel free to reach out on{" "}
          <a
            href="https://www.linkedin.com/in/barakharseh/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
