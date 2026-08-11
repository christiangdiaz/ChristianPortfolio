const groups = [
  ["Languages", "Python · TypeScript · JavaScript · Java · C · HTML/CSS"],
  [
    "Development",
    "Next.js · React · Node.js · FastAPI · Tailwind CSS · Git · Docker",
  ],
  [
    "Vision / ML / Platforms",
    "OpenCV · Hugging Face · sentence-transformers · Gemma · Pandas · Linux · Firebase · AWS",
  ],
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-black/15">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <p className="kicker">Technical skills</p>
          <div className="border-t border-black/20">
            {groups.map(([label, items]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-black/15 py-5 md:grid-cols-[190px_1fr] md:gap-8"
              >
                <h3 className="text-sm font-semibold">{label}</h3>
                <p className="text-sm leading-6 text-black/58">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
