const projects = [
  {
    title: "Pelican Point East",
    context: "Freelance full-stack development · Naples, FL",
    description:
      "Production resident and admin portal for a condominium association.",
    stack: "Next.js · TypeScript · Tailwind CSS · Firebase",
    live: "https://www.ppecondo.com/",
    github: "https://github.com/christiangdiaz/ppe-frontend-next",
  },
  {
    title: "BUILD UMass",
    context: "Website migration + internal tooling",
    description:
      "Modernized the organization website and built tooling for client discovery and outreach.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    live: "https://www.buildumass.com/",
    github: "https://github.com/build-umass/BUILD-website",
  },
  {
    title: "NEFAC Search",
    context: "Legal-document search",
    description:
      "Backend search functionality designed to improve access to First Amendment legal resources.",
    stack: "Backend · Search · AI/ML",
    live: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-b border-black/15 bg-[#f2f2f0]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="section-heading">
          <p className="kicker">Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="mt-10 border-t border-black/20">
          {projects.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-5 border-b border-black/15 py-7 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] md:items-start md:gap-10"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-xs tabular-nums text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-semibold tracking-[-0.025em]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 pl-8 text-sm text-black/48">
                  {item.context}
                </p>

                <p className="mt-3 max-w-xl pl-8 text-[15px] leading-6 text-black/65">
                  {item.description}
                </p>
              </div>

              <p className="text-sm leading-6 text-black/55 md:pt-1">
                {item.stack}
              </p>

              <div className="flex gap-4 text-sm font-medium md:justify-end md:pt-1">
                {item.live && (
                  <a
                    className="text-link whitespace-nowrap"
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live ↗
                  </a>
                )}

                {item.github && (
                  <a
                    className="text-link whitespace-nowrap"
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
