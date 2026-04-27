import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql, SiFirebase, SiSqlite,
  SiAmazonwebservices, SiHeroku, SiGithub, SiVisualstudiocode, SiFigma,
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
}

interface Category {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: Category[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Firebase", icon: SiFirebase },
        { name: "SQLite", icon: SiSqlite },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: SiAmazonwebservices },
        { name: "Heroku", icon: SiHeroku },
        { name: "GitHub", icon: SiGithub },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", icon: SiVisualstudiocode },
        { name: "Figma", icon: SiFigma },
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-800 to-gray-900" id="skills">
      <div className="container mx-auto px-8 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-gray-900/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors duration-300"
            >
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-cyan-400/70 transition-colors duration-300" />
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
