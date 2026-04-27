import { FaMapMarkerAlt, FaGraduationCap, FaCode } from 'react-icons/fa';

export default function About() {
  const stats = [
    { label: 'Projects Shipped', value: '5+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Years Coding', value: '3+' },
  ];

  return (
    <section className="w-full py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-8 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* left — text */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm <span className="text-cyan-400 font-semibold">Christian Diaz</span>, a Computer Science student at UMass Amherst building full-stack applications with modern technologies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in creating production-ready web applications using React, Next.js, Node.js, and cloud platforms like AWS and Heroku. My recent work includes a secure document management system for condo residents and an e-commerce platform for translation services.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm currently collaborating with Build UMass on modernizing their website and implementing an AI-powered search engine for new opportunities. I'm also building a site for a student-run campus podcast to help them grow their audience.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-cyan-400 shrink-0" />
                <span>Massachusetts, USA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaGraduationCap className="text-cyan-400 shrink-0" />
                <span>B.S. Computer Science — UMass Amherst</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaCode className="text-cyan-400 shrink-0" />
                <span>Open to internships & collaborations</span>
              </div>
            </div>
          </div>

          {/* right — stats */}
          <div className="flex flex-col gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 bg-gray-900/60 border border-gray-700 rounded-2xl px-8 py-6 hover:border-cyan-400/40 transition-colors duration-300"
              >
                <span className="text-4xl font-extrabold text-cyan-400">{stat.value}</span>
                <span className="text-gray-300 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
