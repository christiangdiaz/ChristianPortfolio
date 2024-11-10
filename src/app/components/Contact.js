import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center py-12 bg-gray-900 w-full">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-300 text-center max-w-md mb-8">
      Let’s connect! Whether you’re interested in a project, a collaboration, or just want to say hi, reach out via email or find me on LinkedIn and GitHub.
      </p>
      <div className="flex space-x-6">
        <a
          href="mailto:cgd6055@gmail.com"
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          aria-label="Email"
        >
          <FaEnvelope className="mr-2" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/christian-diaz-276246327/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
        <a
          href="https://github.com/christiangdiaz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      </div>
    </section>
  );
}
