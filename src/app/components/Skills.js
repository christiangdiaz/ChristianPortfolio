export default function Skills() {
  return (
    <section className="w-full py-16 bg-gray-900" id="skills">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Front-End */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400">Front-End</h3>
            <p className="text-gray-300 mt-2">
              HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
            </p>
          </div>
          {/* Back-End */} 
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400">Back-End</h3>
            <p className="text-gray-300 mt-2">
              Node.js, Express, GraphQL, SQLite
            </p>
          </div>
          {/* Tools */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400">Tools & Platforms</h3>
            <p className="text-gray-300 mt-2">
              Git, GitHub, VS Code, Heroku, Firebase, AWS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
