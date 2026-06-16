import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SplashCursor from '@/components/ui/SplashCursor';
import ShinyText from '@/components/ui/ShinyText';
import MagicBento from '@/components/MagicBento';
import {
  Mail,
  ExternalLink,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  FolderGit2,
  ChevronRight,
  Terminal,
  Cpu,
  Layers,
  Smartphone,
  Phone
} from 'lucide-react';

const resumeData = [
  {
    color: '#c5ff41',
    title: 'Nishant Patil',
    description: 'B.E. in Information Technology @ Thadomal Shahani Engineering College (2027). Full Stack Developer & App Developer.',
    label: 'Identity',
    textColor: '#151312'
  },
  {
    color: '#1a1817',
    title: 'Pilji Healthtech',
    description: 'App Developer Intern. Built a production-grade React Native health app with Node.js, Express, and PostgreSQL.',
    label: 'Experience',
    textColor: '#ffffff'
  },
  {
    color: '#f46c38',
    title: 'AutoCommit — VS Code Extension',
    description: '86+ active installs. Auto-generates commit messages using LLMs. Supported in Professional, Pirate, and Star Wars tones.',
    label: 'Project',
    textColor: '#ffffff'
  },
  {
    color: '#1a1817',
    title: 'YouTube Clickbait Classifier',
    description: 'Multimodal ML pipeline using RoBERTa & CNN features. Classified videos with 97.34% accuracy.',
    label: 'Project',
    textColor: '#ffffff'
  },
  {
    color: '#c5ff41',
    title: 'Digital Guruji',
    description: 'Full Stack Web Intern. Built a MERN platform unifying multiple Generative AI models (image, video, audio).',
    label: 'Experience',
    textColor: '#151312'
  },
  {
    color: '#1a1817',
    title: 'Technical Skills',
    description: 'JavaScript, Python, C/C++, Java. React.js, Node.js, Express.js, Next.js, MongoDB, React Native, Scikit-learn.',
    label: 'Skills',
    textColor: '#ffffff'
  }
];

const projects = [
  {
    title: "YouTube Clickbait Classifier",
    tech: "Python, Scikit-learn, NLP, RoBERTa",
    description: "Developed a multimodal ML pipeline combining text embeddings and thumbnail features, achieving 97.34% accuracy.",
    link: "https://github.com/Nishant0121",
    accent: "#c5ff41"
  },
  {
    title: "IPL Win Predictor",
    tech: "Python, Scikit-learn, Logistic Regression, Streamlit",
    description: "Built a real-time IPL match win probability predictor using live features, achieving 87% prediction accuracy.",
    link: "https://github.com/Nishant0121",
    accent: "#f46c38"
  },
  {
    title: "AutoCommit",
    tech: "TypeScript, VS Code API, Git",
    description: "Published a VS Code extension with 86+ active installs that auto-generates commit messages via LLM.",
    link: "https://github.com/Nishant0121",
    accent: "#c5ff41"
  },
  {
    title: "Link Up",
    tech: "React.js, Node.js, Socket.io, MongoDB",
    description: "Real-time multiplayer hub where friends can jump into shared game rooms with live bi-directional state sync.",
    link: "https://github.com/Nishant0121",
    accent: "#f46c38"
  }
];

const skills = [
  { category: "Languages", items: ["JavaScript", "Python", "C/C++", "Java"], icon: <Terminal size={20} /> },
  { category: "Web Dev", items: ["React.js", "Node.js", "Express.js", "Next.js", "MongoDB", "REST API", "Firebase"], icon: <Layers size={20} /> },
  { category: "Mobile", items: ["React Native"], icon: <Smartphone size={20} /> },
  { category: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Logistic Regression", "Streamlit"], icon: <Cpu size={20} /> },
];

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex flex-col gap-2 mb-8">
    <div className="flex items-center gap-2">
      {Icon && <Icon className="text-[#c5ff41]" size={20} />}
      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#998f8f]">{title}</h2>
    </div>
    {subtitle && <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">{subtitle}</h3>}
  </div>
);

const FullPageSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: false
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen flex flex-col justify-center py-20 snap-start ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  return (
    <div className="relative h-screen bg-[#151312] text-white font-geist selection:bg-[#c5ff41]/30 overflow-hidden">
      {/* <SplashCursor
        DENSITY_DISSIPATION={7.5}
        VELOCITY_DISSIPATION={0.5}
        PRESSURE={0.05}
        CURL={3}
        SPLAT_RADIUS={0.03}
        SPLAT_FORCE={3000}
        COLOR_UPDATE_SPEED={2}
        SHADING={false}
        RAINBOW_MODE={false}
        COLOR="#c5ff41"
      /> */}

      {/* Main Container with Scroll Snapping */}
      <div className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth" style={{ "scrollbarWidth": "none" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative">

          <div className="flex flex-col lg:flex-row gap-20">

            {/* SIDEBAR - Fixed on Desktop, Snap section on Mobile */}
            <aside className="lg:w-95 lg:fixed lg:h-[calc(100vh-160px)] lg:top-20 flex flex-col justify-center lg:justify-between py-20 lg:py-10 z-20 snap-start min-h-screen lg:min-h-0">
              <div className="space-y-8">
                <div className="relative group w-full max-w-70 lg:mx-0 mx-auto">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#c5ff41] to-[#f46c38] rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 bg-[#1a1817]">
                    <img
                      src="/images/nishant_1.png"
                      alt="Nishant Patil"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  </div>
                </div>

                <div className="space-y-6 text-center lg:text-left">
                  <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight">Nishant Patil</h1>
                    <p className="text-[#998f8f] leading-relaxed max-w-[320px] mx-auto lg:mx-0">
                      B.E. IT Student & Full Stack Developer.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-[#998f8f]">
                      <Phone size={16} className="text-[#c5ff41]" />
                      <span className="text-sm font-medium">+91 9511692910</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-[#998f8f]">
                      <Mail size={16} className="text-[#c5ff41]" />
                      <span className="text-sm font-medium text-xs md:text-sm">nishantpatil10121@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-12 lg:mt-0 px-4 lg:px-0">
                {/* <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <a href="https://github.com/Nishant0121" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#c5ff41] hover:text-black transition-all">
                    <FolderGit2 size={20} />
                  </a>
                  <a href="https://nishantpatil.vercel.app" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#c5ff41] hover:text-black transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div> */}

                <button className="w-full my-5 py-5 rounded-2xl bg-[#c5ff41] text-black font-bold text-lg hover:bg-[#b0f030] transition-colors shadow-lg shadow-[#c5ff41]/10">
                  Let's Work Together
                </button>
              </div>
            </aside>

            {/* SPACER for fixed sidebar on desktop */}
            <div className="hidden lg:block lg:w-[380px] shrink-0" />

            {/* CONTENT SECTIONS */}
            <main className="flex-1 lg:max-w-[800px] z-10">

              {/* HERO SECTION */}
              <FullPageSection>
                <div className="space-y-8">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-[#c5ff41]/20 bg-[#c5ff41]/5 backdrop-blur-md">
                    <ShinyText text="Available for Internships" speed={3} className="text-xs font-bold text-[#c5ff41] uppercase tracking-widest" />
                  </div>
                  <h2 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.85] text-white">
                    BUILDING <br />
                    <span className="text-[#c5ff41]">FUTURE</span> <br />
                    DIGITAL.
                  </h2>
                  <p className="text-xl md:text-2xl text-[#998f8f] max-w-2xl leading-relaxed">
                    I specialize in creating production-grade applications and intelligent machine learning pipelines.
                  </p>
                </div>
              </FullPageSection>

              {/* PROJECTS SECTION */}
              <FullPageSection>
                <SectionHeader title="Selected Work" subtitle="Projects" icon={Code} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, i) => (
                    <a key={i} href={project.link} target="_blank" rel="noreferrer" className="group h-full">
                      <div className="p-8 rounded-[28px] bg-white/5 border border-white/5 hover:border-[#c5ff41]/30 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="text-[#c5ff41]" size={20} />
                        </div>
                        <div className="space-y-4">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center" style={{ color: project.accent }}>
                            <FolderGit2 size={20} />
                          </div>
                          <h4 className="text-2xl font-bold leading-tight">{project.title}</h4>
                          <p className="text-[#998f8f] text-sm leading-relaxed line-clamp-2">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.tech.split(',').slice(0, 3).map((t, idx) => (
                            <span key={idx} className="px-3 py-1 text-[9px] uppercase font-bold tracking-widest rounded-full bg-white/5 text-white/40">
                              {t.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </FullPageSection>

              {/* EXPERIENCE SECTION */}
              <FullPageSection>
                <SectionHeader title="Path" subtitle="Experience" icon={Briefcase} />
                <div className="space-y-4">
                  {[
                    {
                      company: "Pilji Healthtech Pvt Ltd",
                      role: "App Developer Intern",
                      period: "Aug 2025 – Feb 2026",
                      desc: "Built a production-grade full-stack mobile app using React Native, Node.js, Express, and PostgreSQL."
                    },
                    {
                      company: "Digital Guruji",
                      role: "Full Stack Web Developer Intern",
                      period: "Apr 2025 – Jun 2025",
                      desc: "Built a MERN platform unifying multiple Generative AI models into a single cohesive product."
                    }
                  ].map((exp, i) => (
                    <div key={i} className="p-8 rounded-[28px] bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-xl font-bold group-hover:text-[#c5ff41] transition-colors">{exp.role}</h4>
                          <p className="text-[#c5ff41] font-medium">{exp.company}</p>
                        </div>
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 bg-white/5">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[#998f8f] leading-relaxed">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </FullPageSection>

              {/* SKILLS SECTION */}
              <FullPageSection>
                <SectionHeader title="Expertise" subtitle="Skills" icon={Layers} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, i) => (
                    <div key={i} className="p-8 rounded-[28px] bg-white/5 border border-white/5">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2.5 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41]">
                          {skill.icon}
                        </div>
                        <h4 className="text-lg font-bold">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, idx) => (
                          <span key={idx} className="px-4 py-2 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-[#998f8f]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </FullPageSection>

              {/* EDUCATION & AWARDS */}
              <FullPageSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  <div className="flex flex-col">
                    <SectionHeader title="Learning" subtitle="Education" icon={GraduationCap} />
                    <div className="p-8 rounded-[28px] bg-white/5 border border-white/5 flex-1">
                      <h4 className="text-xl font-bold mb-1">B.E. IT</h4>
                      <p className="text-[#c5ff41] font-medium mb-4">Thadomal Shahani Engineering</p>
                      <p className="text-[#998f8f] text-sm leading-relaxed">
                        Expected 2027 <br />
                        Mumbai, India
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <SectionHeader title="Wins" subtitle="Awards" icon={Award} />
                    <div className="p-8 rounded-[28px] bg-[#c5ff41] text-black flex-1 flex flex-col justify-center space-y-6">
                      {[
                        "1st Place — Need for Code 3.0",
                        "1st Place — Wabecade Hackathon"
                      ].map((award, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-black" />
                          <p className="font-bold text-lg leading-tight">{award}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FullPageSection>

              {/* BENTO HIGHLIGHTS */}
              {/* <FullPageSection>
                <SectionHeader title="Vibe" subtitle="Highlights" icon={Layers} />
                <div className="h-[500px]">
                  <MagicBento
                    data={resumeData}
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={20}
                    glowColor="197, 255, 65"
                    disableAnimations={false}
                  />
                </div>
              </FullPageSection> */}

              {/* FOOTER - As a small snap section */}
              <section className="py-20 snap-start border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-[#998f8f] text-sm">
                  &copy; 2026 Nishant Patil.
                </p>
                <div className="flex gap-8">
                  {['Github', 'LinkedIn', 'Twitter'].map(link => (
                    <a key={link} href="#" className="text-xs font-bold uppercase tracking-widest text-[#998f8f] hover:text-[#c5ff41] transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
