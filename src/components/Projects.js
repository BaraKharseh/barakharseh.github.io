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
      <h1 className="md:text-4xl text-3xl  dark:text-white text-black font-bold font-merriweather text-center py-10">
        Projects
      </h1>

      <div className="md:w-2/3 w-10/12 dark:bg-zinc-700 bg-zinc-200 dark:text-white text-black font-merriweather text-center m-auto rounded-3xl hover:shadow-xl duration-300 dark:hover:shadow-xl-dark mb-10">
        <a
          href="https://github.com/The-CSC207-Group/Project207"
          target="_blank"
        >
          <div className="p-10">
            <h1 className="md:text-2xl text-xl dark:text-white text-black pb-5">
              Doctor Clinic Management System
            </h1>
            <div className="pb-5">
              <h1 className="text-sm dark:text-white text-black flex">
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

      <div className="md:w-2/3 w-10/12 dark:bg-zinc-700 bg-zinc-200 dark:text-white text-black font-merriweather text-center m-auto rounded-3xl hover:shadow-xl duration-300 dark:hover:shadow-xl-dark mb-10">
        <a
          href="https://github.com/BaraKharseh/personal-website"
          target="_blank"
        >
          <div className="p-10">
            <h1 className="md:text-2xl text-xl dark:text-white text-black pb-5">
              Personal Website
            </h1>
            <div className="pb-5">
              <h1 className="text-sm dark:text-white text-black flex">
                A website created to learn web development and showcase my
                skills and projects. It is also created to be an ideal place to
                put all my contact information and anything related to me. This
                website was created using the React and Tailwind CSS frameworks.
              </h1>
            </div>
            <div className="text-4xl flex justify-center place-items-center">
              <FontAwesomeIcon icon={faReact} className="md:mr-8 mr-2" />
              <img
                width="60"
                src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE4LjUgOS41MWE0LjIyIDQuMjIgMCAwIDEtMS45MS0xLjM0QTUuNzcgNS43NyAwIDAgMCAxMiA2YTQuNzIgNC43MiAwIDAgMC01IDQgMy4yMyAzLjIzIDAgMCAxIDMuNS0xLjQ5IDQuMzIgNC4zMiAwIDAgMSAxLjkxIDEuMzVBNS43NyA1Ljc3IDAgMCAwIDE3IDEyYTQuNzIgNC43MiAwIDAgMCA1LTQgMy4yIDMuMiAwIDAgMS0zLjUgMS41MXptLTEzIDQuOThhNC4yMiA0LjIyIDAgMCAxIDEuOTEgMS4zNEE1Ljc3IDUuNzcgMCAwIDAgMTIgMThhNC43MiA0LjcyIDAgMCAwIDUtNCAzLjIzIDMuMjMgMCAwIDEtMy41IDEuNDkgNC4zMiA0LjMyIDAgMCAxLTEuOTEtMS4zNUE1LjggNS44IDAgMCAwIDcgMTJhNC43MiA0LjcyIDAgMCAwLTUgNCAzLjIgMy4yIDAgMCAxIDMuNS0xLjUxeiIvPjwvc3ZnPg=="
                className="dark:invert md:mx-4"
              />
              {/* <svg
                className="md:mx-4 mx-2 md:h-14 md:w-14 dark:fill-current dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" />
              </svg> */}
              <FontAwesomeIcon icon={faJs} className="md:mx-8 mx-2" />
              <FontAwesomeIcon icon={faHtml5} className="md:mx-8 mx-2" />
              <FontAwesomeIcon icon={faCss3} className="md:ml-8 ml-2" />
            </div>
          </div>
        </a>
      </div>

      <div className="md:w-2/3 w-10/12 dark:bg-zinc-700 bg-zinc-200 dark:text-white text-black font-merriweather text-center m-auto rounded-3xl hover:shadow-xl duration-300 dark:hover:shadow-xl-dark mb-10">
        <a
          href="https://github.com/BaraKharseh/CSC110-Final-Project"
          target="_blank"
        >
          <div className="p-10">
            <h1 className="md:text-2xl text-xl dark:text-white text-black pb-5">
              COVID-19 Data Visualizer
            </h1>
            <div className="pb-5">
              <h1 className="text-sm dark:text-white text-black flex">
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
