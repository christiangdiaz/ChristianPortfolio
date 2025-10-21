import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaDownload } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-900 border-t border-gray-800">
            <div className="w-full px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-6">
                        <h3 className="text-2xl font-bold text-cyan-400">Christian Diaz</h3>
                        <div className="flex space-x-5">
                            <a
                                href="mailto:christiangdiaz2@gmail.com?subject=Portfolio Contact"
                                className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/christiangdiaz1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/christiangdiaz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="/Diaz, Christian.docx"
                            download="Diaz, Christian.docx"
                            className="flex items-center space-x-2 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors border border-cyan-400/30"
                        >
                            <FaDownload className="text-sm" />
                            <span className="text-base">Resume</span>
                        </a>
                        <p className="text-gray-400 text-base">
                            © {currentYear} Christian Diaz
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
