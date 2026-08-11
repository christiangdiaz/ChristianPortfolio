export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.13em] text-white/45">Contact</p>
            <a href="mailto:christiangdiaz2@gmail.com" className="mt-3 inline-block text-xl font-medium tracking-[-0.025em] hover:text-white/70 md:text-2xl">
              christiangdiaz2@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70 md:justify-end">
            <a className="footer-text-link" href="https://www.linkedin.com/in/christiangdiaz1" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="footer-text-link" href="https://github.com/christiangdiaz" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="footer-text-link" href="/Christian-Diaz-Resume.pdf" download>Résumé ↓</a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/15 pt-4 text-xs text-white/35">Christian Diaz · Amherst, MA</p>
      </div>
    </footer>
  );
}
