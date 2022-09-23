import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-4xl dark:text-white text-black font-bold font-merriweather text-center py-10">
        Projects
      </h1>

      <div className="w-2/3 dark:bg-zinc-700 bg-zinc-200 dark:text-white text-black font-merriweather text-center m-auto rounded-3xl hover:shadow-xl duration-300 dark:hover:shadow-xl-dark mb-10">
        <a
          href="https://github.com/The-CSC207-Group/Project207"
          target="_blank"
        >
          <div className="p-10">
            <h1 className="text-2xl dark:text-white text-black pb-5">
              Doctor Clinic Management System
            </h1>
            <div className="pb-5">
              <h1 className="text-sm dark:text-white text-black">
                A program created to manage doctor clinics, including a login
                system and user to user interactions. This program makes it easy
                for patients to book appointments and view prescriptions, for
                doctors to create patient prescriptions and reports and organize
                their schedules, and for secretaries to book appointments for
                patients and view a patient's prescriptions.
              </h1>
            </div>
            <FontAwesomeIcon icon={faJava} className="text-4xl" />
          </div>
        </a>
      </div>

      <div className="w-2/3 dark:bg-zinc-700 bg-zinc-200 dark:text-white text-black font-merriweather text-center m-auto rounded-3xl hover:shadow-xl duration-300 dark:hover:shadow-xl-dark mb-10">
        <a
          href="https://github.com/BaraKharseh/personal-website"
          target="_blank"
        >
          <div className="p-10">
            <h1 className="text-2xl dark:text-white text-black pb-5">
              Personal Website
            </h1>
            <div className="pb-5">
              <h1 className="text-sm dark:text-white text-black">
                A website created to learn web development and showcase my
                skills and projects. It is also created to be an ideal place to
                put all my contact information and anything related to me. This
                website was created using the React and Tailwind CSS frameworks.
              </h1>
            </div>
            <div className="text-4xl flex justify-center place-items-center">
              <FontAwesomeIcon icon={faReact} className="mx-8" />
              <svg
                className="mx-4 h-14 w-14 dark:fill-current dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" />
              </svg>
              <FontAwesomeIcon icon={faJs} className="mx-8" />
              <FontAwesomeIcon icon={faHtml5} className="mx-8" />
              <FontAwesomeIcon icon={faCss3} className="mx-8" />
            </div>
          </div>
        </a>
      </div>

      <div className="w-2/3 dark:bg-zinc-700 bg-zinc-200 dark:text-white text-black font-merriweather text-center m-auto rounded-3xl hover:shadow-xl duration-300 dark:hover:shadow-xl-dark mb-10">
        <a
          href="https://github.com/BaraKharseh/CSC110-Final-Project"
          target="_blank"
        >
          <div className="p-10">
            <h1 className="text-2xl dark:text-white text-black pb-5">
              COVID-19 Data Visualizer
            </h1>
            <div className="pb-5">
              <h1 className="text-sm dark:text-white text-black">
                A program created to visualize staffing actions taken during the
                COVID-19 pandemic. By parsing multiple CSV files taken directly
                from the Statistics Canada website and interacting with geojson
                files, my partner and I were able to create double bar graphs
                and choropleth maps to clearly portray the given data.
              </h1>
            </div>
            <FontAwesomeIcon icon={faPython} className="text-4xl" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
