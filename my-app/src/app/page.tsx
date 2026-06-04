"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const homeRef       = useRef<HTMLElement | null>(null);
  const aboutRef      = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef   = useRef<HTMLElement | null>(null);
  const contactRef    = useRef<HTMLElement | null>(null);

  const navItems = [
    { label: "Home",       ref: homeRef },
    { label: "About",      ref: aboutRef },
    { label: "Experience", ref: experienceRef },
    { label: "Projects",   ref: projectsRef },
    { label: "Contact",    ref: contactRef },
  ];

  const scroll = (ref: React.RefObject<HTMLElement | null>) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen overflow-x-hidden">

      {/* ── Floating Navbar ── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="pill-nav flex items-center gap-1 px-5 py-2.5">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 mr-3 uppercase font-mono">IL</span>
          {navItems.map(({ label, ref }) => (
            <button
              key={label}
              onClick={() => scroll(ref)}
              className="px-4 py-1.5 rounded-full text-sm text-white/45 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════
          ── HERO ──
          ══════════════════════════════════ */}
      <section ref={homeRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/berkeley.jpg')", backgroundPosition: "center 30%" }} />
        <div className="absolute inset-0 bg-[#111]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a1a1a] to-transparent" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="name-display text-center mb-10 select-none"
          >
            ISAEL<br />LARIOS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8"
          >
            <div className="absolute -inset-5 rounded-full bg-white opacity-[0.06] blur-2xl" />
            <div className="absolute -inset-px rounded-full bg-gradient-to-b from-white/15 to-transparent" />
            <img src="/IsaelL.jpg" alt="Isael Larios" className="relative w-56 h-56 rounded-full object-cover shadow-2xl border border-white/10" style={{ objectPosition: '50% 18%' }} />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-[10px] tracking-[0.4em] uppercase font-mono text-white/30 mb-3">
            ISAEL LARIOS
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-white/50 text-sm max-w-sm leading-relaxed mb-2">
            EECS @ <span className="text-accent font-medium">UC Berkeley</span> · Contract Software Engineer @ Sony PlayStation
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="flex items-center gap-5 mt-7">
            <a href="mailto:Isael07@berkeley.edu" className="text-white/30 hover:text-white transition-colors duration-200" title="Email"><Mail size={22} /></a>
            <a href="https://github.com/isa3l" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors duration-200" title="GitHub"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/isaellarios" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors duration-200" title="LinkedIn"><Linkedin size={22} /></a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="flex items-center gap-3 mt-8">
            <button onClick={() => scroll(experienceRef)} className="px-6 py-2.5 bg-white hover:bg-white/90 text-[#1a1a1a] rounded-xl text-sm font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(255,255,255,0.12)]">
              Experience
            </button>
            <button onClick={() => scroll(projectsRef)} className="px-6 py-2.5 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.09] rounded-xl text-sm font-semibold text-white/60 hover:text-white transition-all duration-200">
              Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ── ABOUT ──
          ══════════════════════════════════ */}
      <section ref={aboutRef} className="relative py-36 px-8">
        <div className="divider absolute top-0 left-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white opacity-[0.03] blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeUp} className="section-label">01 — About</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2 mb-14">Who I Am</motion.h2>

            <div className="grid md:grid-cols-2 gap-14">
              <motion.div variants={fadeUp} className="space-y-5 text-white/50 text-base leading-relaxed">
                <p>
                  I'm <span className="text-white font-semibold">Isael Larios</span>, an EECS student at UC Berkeley (Expected May 2029) fascinated by how things work — from engines to algorithms.
                </p>
                <p>
                  Growing up in National City, I spent weekends at car shows with my dad, amazed by the creativity behind every design. Inspired by his epilepsy diagnosis, I'm driven to build technology that improves health outcomes.
                </p>
                <p className="text-white/35 text-sm">
                  Codebase · CS Scholars · ColorStack · Hispanics in Engineering · CoE GLOBE Ambassador
                </p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {[
                  { icon: "🎓", label: "Education",  value: "B.E. CS & EE — UC Berkeley, May 2029" },
                  { icon: "💻", label: "Languages",  value: "Python · C/C++ · JavaScript · SQL · Scheme" },
                  { icon: "🛠", label: "Tools",       value: "Next.js · Node.js · PostgreSQL · Auth0 · AWS" },
                  { icon: "🚗", label: "Interests",   value: "Water polo · Cars · Star Wars · Mentoring" },
                ].map(({ icon, label, value }) => (
                  <motion.div key={label} variants={fadeUp} className="info-card flex items-center gap-4 px-5 py-4">
                    <span className="text-xl shrink-0">{icon}</span>
                    <div>
                      <p className="text-[10px] text-white/25 font-mono tracking-widest uppercase mb-0.5">{label}</p>
                      <p className="text-sm text-white/65">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ── EXPERIENCE ──
          ══════════════════════════════════ */}
      <section ref={experienceRef} className="relative py-36 px-8">
        <div className="divider absolute top-0 left-0" />
        <div className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full bg-white opacity-[0.02] blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeUp} className="section-label">02 — Experience</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2 mb-14">Where I've Worked</motion.h2>

            <div className="space-y-6">

              {/* Sony PlayStation */}
              <motion.div variants={fadeUp} className="info-card p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">Sony PlayStation</h3>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/[0.07] border border-white/[0.1] rounded-full text-[10px] font-mono text-white/50">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        Current
                      </span>
                    </div>
                    <p className="text-sm text-white/40">Contract Software Engineer · Text Profanity & Online Identity Filtering</p>
                  </div>
                  <span className="text-xs text-white/25 font-mono whitespace-nowrap">Jan 2026 — Present</span>
                </div>
                <ul className="space-y-2 text-sm text-white/50 leading-relaxed">
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Audited multilingual profanity datasets to evaluate Sony PlayStation's Text Profanity Filter across online IDs, chat, and user bios.</li>
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Compared detection accuracy between TPF Legacy (C++/AWS Lambda) and TPF2 (Kubernetes pipeline), identifying regressions across locales.</li>
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Analyzed evasion techniques — emoji obfuscation, creative slang — to surface weaknesses in deterministic rule-based filters.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["C++", "AWS Lambda", "Kubernetes", "Content Moderation"].map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] rounded-full text-xs text-white/30">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* NEXT for Autism */}
              <motion.div variants={fadeUp} className="info-card p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">NEXT for Autism</h3>
                    <p className="text-sm text-white/40">Software Engineer · DSP Dashboard Project</p>
                  </div>
                  <span className="text-xs text-white/25 font-mono whitespace-nowrap">Sept — Dec 2025</span>
                </div>
                <ul className="space-y-2 text-sm text-white/50 leading-relaxed">
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Built a data-driven DSP evaluation system replacing subjective reporting with structured metrics, achieving 95% on-time form submission in testing.</li>
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Developed interactive dashboards with drill-down analytics, leaderboards, and self-report vs. observer comparisons across 10+ programs.</li>
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Designed PostgreSQL schema and REST APIs handling 1k+ monthly submissions; integrated an ML clustering model for adaptive feedback summaries.</li>
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Deployed responsive frontend from Figma designs on Vercel with AWS backend and Auth0 RBAC for secure multi-org access.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Next.js", "Node.js", "PostgreSQL", "Auth0", "AWS", "Machine Learning"].map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] rounded-full text-xs text-white/30">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* UC Berkeley Pre-Engineering */}
              <motion.div variants={fadeUp} className="info-card p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">UC Berkeley Pre-Engineering Program</h3>
                    <p className="text-sm text-white/40">Engineer · Fire Detection Sensors</p>
                  </div>
                  <span className="text-xs text-white/25 font-mono whitespace-nowrap">July — Aug 2025</span>
                </div>
                <ul className="space-y-2 text-sm text-white/50 leading-relaxed">
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Designed and programmed an Arduino R4 Uno–based fire detection system using humidity and smoke sensors for early wildfire prevention.</li>
                  <li className="flex gap-2"><span className="text-white/20 mt-1 shrink-0">—</span>Integrated sensor data with drone-mounted monitoring and automated extinguisher activation; presented to industry professionals as part of a 5-member team.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Arduino", "C++", "Embedded Systems", "Sensors"].map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] rounded-full text-xs text-white/30">{t}</span>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ── PROJECTS ──
          ══════════════════════════════════ */}
      <section ref={projectsRef} className="relative py-36 px-8">
        <div className="divider absolute top-0 left-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-white opacity-[0.02] blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeUp} className="section-label">03 — Projects</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2 mb-14">What I've Built</motion.h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* House Price Prediction */}
              <motion.div variants={fadeUp} className="info-card p-7 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] rounded-full text-[10px] font-mono text-white/40">Machine Learning</span>
                    <span className="text-[10px] font-mono text-white/20">Dec 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">House Price Prediction</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Built and compared Linear Regression, Ridge Regression, and Decision Tree models to predict residential home prices from a Kaggle dataset. Ridge Regression selected as final model; evaluated with MAE, RMSE, and R². Includes an interactive price prediction interface.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Python", "scikit-learn", "Ridge Regression", "Decision Tree", "Kaggle"].map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] rounded-full text-xs text-white/30">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Fire Detection Drone */}
              <motion.div variants={fadeUp} className="info-card p-7 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] rounded-full text-[10px] font-mono text-white/40">Hardware + Software</span>
                    <span className="text-[10px] font-mono text-white/20">Aug 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fire Detection Drone</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Engineered an Arduino R4 Uno–based system using humidity and smoke sensors to detect early wildfire signs. Sensor data triggers a drone with an automated extinguisher — built and presented to industry professionals with a 5-member team.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Arduino", "C++", "Sensors", "Drone Systems"].map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] rounded-full text-xs text-white/30">{t}</span>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ── CONTACT ──
          ══════════════════════════════════ */}
      <section ref={contactRef} className="relative py-36 px-8">
        <div className="divider absolute top-0 left-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-white opacity-[0.03] blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeUp} className="section-label">04 — Contact</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2 mb-4">Let's Connect</motion.h2>
            <motion.p variants={fadeUp} className="text-white/35 text-sm mb-12 max-w-xs mx-auto leading-relaxed">
              Open to opportunities, collaborations, or just a great conversation.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-wrap items-center justify-center gap-3">
              {[
                { href: "https://www.linkedin.com/in/isaellarios", icon: <Linkedin size={17} />, label: "LinkedIn" },
                { href: "https://github.com/isa3l",                icon: <Github size={17} />,   label: "GitHub"   },
                { href: "mailto:Isael07@berkeley.edu",              icon: <Mail size={17} />,     label: "Email"    },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 bg-white/[0.03] border border-white/[0.07] rounded-xl text-white/40 text-sm font-medium transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  {icon}
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/12 text-xs font-mono tracking-widest">
          © 2025 ISAEL LARIOS
        </p>
      </section>

    </div>
  );
}
