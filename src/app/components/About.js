export default function About() {
  return (
    <section className="w-full py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                I'm <span className="text-cyan-400 font-semibold">Christian Diaz</span>, a Computer Science student at UMass Amherst building full-stack applications with modern technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I specialize in creating production-ready web applications using React, Next.js, Node.js, and cloud platforms like AWS and Heroku. My recent work includes a secure document management system for condo residents and an e-commerce platform for translation services.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I'm currently collaborating with Build UMass on modernizing their website and implementing an AI-powered search engine for new opportunities. I'm also creating a website for a small student run podcast on campus to help them expand their audience and announce new episodes. I'm also constantly updating my completed projects to keep them modern and responsive.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
