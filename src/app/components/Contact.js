import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center py-16 bg-gray-900 w-full">
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get in Touch</h2>
      <p className="text-md text-gray-300 text-center max-w-lg mb-8 px-4">
        Interested in a project, collaboration, or just want to say hello? Reach out through email, LinkedIn, or GitHub.
      </p>
      
      <div className="flex space-x-4">
        <a
          href="mailto:cgd6055@gmail.com"
          className="flex items-center space-x-2 px-5 py-3 bg-gray-800 text-white font-medium rounded-full shadow-md hover:text-cyan-400 transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Email"
        >
          <FaEnvelope className="text-lg" />
          <span className="hidden sm:inline">Email</span>
        </a>
        <a
          href="https://linkedin.com/in/christian-diaz-276246327/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-5 py-3 bg-gray-800 text-white font-medium rounded-full shadow-md hover:text-cyan-400 transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-lg" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          href="https://github.com/christiangdiaz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-5 py-3 bg-gray-800 text-white font-medium rounded-full shadow-md hover:text-cyan-400 transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="GitHub"
        >
          <FaGithub className="text-lg" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </section>
  );
}
