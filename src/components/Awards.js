import React from "react";

const awards = [
  {
    title: "Dorothy Helen McRobb Scholarship",
    org: "Woodsworth College, University of Toronto",
    date: "2026",
  },
  {
    title: "Entrance Scholarship",
    org: "Woodsworth College, University of Toronto",
    date: "2021",
  },
  {
    title: "Governor General's Academic Medal",
    org: "L'Amoreaux Collegiate Institute",
    date: "2021",
    url: "https://gg.ca/en/honours/recipients/116-109370",
  },
];

const Awards = () => {
  return (
    <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="section-label">Awards</h2>
      <ul className="space-y-4">
        {awards.map((award) => (
          <li
            key={award.title}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm"
          >
            <span>
              {award.url ? (
                <a
                  href={award.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium hover:underline underline-offset-4"
                >
                  {award.title}
                  <span className="text-zinc-400" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : (
                <span className="font-medium">{award.title}</span>
              )}
              <span className="text-zinc-500 dark:text-zinc-400">
                {" "}
                · {award.org}
              </span>
            </span>
            <span className="text-zinc-500 dark:text-zinc-400 shrink-0">
              {award.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Awards;
