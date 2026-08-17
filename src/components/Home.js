import React from "react";

const links = [
  { label: "GitHub", href: "https://github.com/BaraKharseh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/barakharseh/" },
  {
    label: "Resume",
    href: `${process.env.PUBLIC_URL}/Bara_Kharseh_2026_Resume.pdf`,
  },
];

const Home = () => {
  return (
    <section id="home" className="pt-32 pb-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Bara Kharseh
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Prev @ SickKids | HBSc in Computer Science & Human Biology
      </p>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="link-muted underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Home;
