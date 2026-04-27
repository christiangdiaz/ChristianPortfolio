import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-8 py-12 max-w-6xl">

        <div className="flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Let's <span className="text-cyan-400">work together</span>
          </h3>
          <p className="text-gray-400 max-w-md">
            Open to internships, collaborations, and new opportunities. Feel free to reach out.
          </p>

          <a
            href="mailto:christiangdiaz2@gmail.com?subject=Portfolio Contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaEnvelope />
            Get in touch
          </a>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/christiangdiaz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/christiangdiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="/Diaz, Christian.docx"
              download="Diaz, Christian.docx"
              className="text-gray-500 hover:text-cyan-400 transition-colors text-xl"
              aria-label="Download Resume"
            >
              <FaDownload />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-600">
          © {currentYear} Christian Diaz
        </div>

      </div>
    </footer>
  );
}
