const experience = [
  {
    number: "01",
    company: "Cytrence",
    role: "Embedded Systems Intern",
    location: "Burlington, MA",
    dates: "Jun 2026 — Aug 2026",
    bullets: [
      "Built Python QA automation for keyboard, mouse, USB, and video validation through a hardware-control SDK.",
      "Developed OpenCV calibration logic and Windows/Linux validation and recovery workflows.",
      "Developed BIOS/UEFI automation using visual analysis, semantic retrieval, local Gemma reasoning, deterministic routing, and state verification.",
    ],
  },
  {
    number: "02",
    company: "Pelican Point East",
    role: "Freelance Full-Stack Developer",
    location: "Naples, FL",
    dates: "2024 — Present",
    bullets: [
      "Independently designed, built, deployed, and maintain a production resident portal for a condominium association.",
      "Own authentication, role-based administration, document workflows, Firebase data, responsive UI, and ongoing client updates.",
    ],
  },
  {
    number: "03",
    company: "Learning Resource Center, UMass Amherst",
    role: "Supplemental Instruction Leader — CICS 110",
    location: "Amherst, MA",
    dates: "Aug 2025 — Jan 2026",
    bullets: [
      "Led two weekly programming sessions and created review material and debugging exercises for a course serving 200+ students per semester.",
    ],
  },
  {
    number: "04",
    company: "BUILD UMass",
    role: "Software Developer",
    location: "Amherst, MA",
    dates: "Sep 2024 — Present",
    bullets: [
      "Developed backend search for New England First Amendment Coalition resources.",
      "Led BUILD's migration from legacy JavaScript/HTML to Next.js, TypeScript, and Tailwind CSS and built internal outreach tooling.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-black/15">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="section-heading">
          <p className="kicker">Experience</p>
          <h2>Professional &amp; technical</h2>
        </div>

        <div className="mt-10 border-t border-black/20">
          {experience.map((item) => (
            <article key={item.number} className="grid gap-6 border-b border-black/15 py-8 md:grid-cols-[56px_180px_1fr] md:gap-8 lg:grid-cols-[70px_220px_1fr]">
              <p className="index-number">{item.number}</p>

              <div className="text-sm leading-6 text-black/50">
                <p>{item.dates}</p>
                <p>{item.location}</p>
              </div>

              <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.company}</h3>
                  <p className="mt-1 text-sm text-black/55">{item.role}</p>
                </div>

                <ul className="space-y-2.5 text-[15px] leading-6 text-black/68">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[10px_1fr] gap-2">
                      <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-black/45" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
