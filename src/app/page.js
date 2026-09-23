import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111111]">
      <Navigation />

      <section id="hero" className="border-b border-black/15">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
          <p className="kicker">Computer Science · UMass Amherst</p>

          <h1 className="mt-5 max-w-5xl text-[clamp(4.2rem,10vw,8.3rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            Christian Diaz
          </h1>

          <div className="mt-12 grid gap-10 border-t border-black/15 pt-7 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
            <div>
              <p className="max-w-2xl text-[clamp(1.35rem,2.4vw,2.05rem)] leading-[1.28] tracking-[-0.035em]">
                Software engineering across embedded systems, automation, computer vision, and full-stack web.
              </p>
              <p className="mt-4 text-sm leading-6 text-black/55">
                Amherst, MA · B.S. Computer Science, May 2027
              </p>
            </div>

            <div className="lg:justify-self-end lg:text-right">
              <p className="text-sm leading-6 text-black/60">
                Embedded Systems Intern at Cytrence<br />
                Freelance Full-Stack Developer<br />
                Software Developer at BUILD UMass
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium lg:justify-end">
                <a className="text-link" href="mailto:christiangdiaz2@gmail.com">Email</a>
                <a className="text-link" href="https://github.com/christiangdiaz" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="text-link" href="https://www.linkedin.com/in/christiangdiaz1" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="text-link" href="/Diaz, Christian.pdf" download>Résumé ↓</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
