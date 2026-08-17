import React from "react";

const experience = [
  {
    role: "Neurophysiology Research Student",
    org: "Krembil Brain Institute",
    period: "2025 – 2026",
    description:
      "Analyzed power spectral densities from 30+ Parkinson's DBS microelectrode recordings to study beta frequency shifts in the subthalamic nucleus during cognitive tasks.",
  },
  {
    role: "Full-stack Software Developer Intern",
    org: "SickKids",
    period: "2024 – 2025",
    description: (
      <>
        Contributed to the development of{" "}
        <a
          href="https://otter.ccm.sickkids.ca/app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 hover:text-black dark:hover:text-white transition-colors"
        >
          OTTER
          <span className="text-zinc-400" aria-hidden="true">
            ↗
          </span>
        </a>
        , an AI app used by 40+ institutions to classify tumour samples into 455
        subtypes. Launched CAPYBARA, a web portal for pathologists at SickKids,
        Mount Sinai, and Aga Khan Nairobi — scaled to 400 files in 8 months.
      </>
    ),
  },
  {
    role: "Cancer Genomics Research Student",
    org: "SickKids",
    period: "2024 – 2025",
    description:
      "First-author analysis of 13,313 tumour samples to identify novel gene targets in childhood cancer.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800"
    >
      <h2 className="section-label">Experience</h2>
      <ul className="space-y-8">
        {experience.map((item) => (
          <li key={`${item.role}-${item.org}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-medium">
                {item.role}
                <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                  {" "}
                  · {item.org}
                </span>
              </h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 shrink-0">
                {item.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
