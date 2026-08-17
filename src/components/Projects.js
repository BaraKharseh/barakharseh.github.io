import React from "react";

const projects = [
  {
    title: "SciRef",
    description:
      "Full-stack web app that generates customizable scientific references from journal URLs. React, Flask, Tailwind CSS.",
    url: "https://github.com/tkharseh/sci-ref",
  },
  {
    title: "Doctor Clinic Management System",
    description:
      "Terminal clinic management app with 50+ commands for appointments, prescriptions, and scheduling. Java, Clean Architecture, MVC.",
    url: "https://github.com/The-CSC207-Group/Project207",
  },
  {
    title: "Personal Website",
    description: "This site — built with React and Tailwind CSS.",
    url: "https://github.com/BaraKharseh/personal-website",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800"
    >
      <h2 className="section-label">Projects</h2>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.title}>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <span className="text-zinc-400 shrink-0" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </a>
            ) : (
              <div>
                <h3 className="font-medium">{project.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
