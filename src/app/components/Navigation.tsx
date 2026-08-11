export default function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#fafafa]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#hero" className="text-sm font-semibold tracking-[-0.02em]">Christian Diaz</a>
        <div className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm">
          <a className="text-link" href="#experience">Experience</a>
          <a className="text-link" href="#work">Work</a>
          <a className="text-link" href="/Christian-Diaz-Resume.pdf" download>Résumé</a>
        </div>
      </div>
    </nav>
  );
}
