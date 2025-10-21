export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "JavaScript", "TypeScript",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express.js", "REST APIs", "GraphQL",
        "Firebase", "SQLite",
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS", "Heroku", "Git/GitHub",
      ]
    },
    {
      title: "Development Tools",
      skills: [
        "VS Code",
        "Figma", "Terminal", "Package Managers"
      ]
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-800 to-gray-900" id="skills">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
