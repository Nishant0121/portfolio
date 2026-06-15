import React from 'react';
import SplashCursor from '@/components/ui/SplashCursor';
import ShinyText from '@/components/ui/ShinyText';
import BlurText from '@/components/ui/BlurText';
import DecryptedText from '@/components/ui/DecryptedText';
import SpotlightCard from '@/components/ui/SpotlightCard';
import SplitText from '@/components/ui/SplitText';
import MagicBento from '@/components/MagicBento';
import { Mail, ExternalLink, Award, Code, Briefcase, GraduationCap, FolderGit2 } from 'lucide-react';

const resumeData = [
  {
    color: '#120F17',
    title: 'Nishant Patil',
    description: 'B.E. in Information Technology @ Thadomal Shahani Engineering College (2027). Full Stack Developer & App Developer.',
    label: 'Identity'
  },
  {
    color: '#120F17',
    title: 'Pilji Healthtech',
    description: 'App Developer Intern. Built a production-grade React Native health app with Node.js, Express, and PostgreSQL.',
    label: 'Experience'
  },
  {
    color: '#120F17',
    title: 'AutoCommit — VS Code Extension',
    description: '86+ active installs. Auto-generates commit messages using LLMs. Supported in Professional, Pirate, and Star Wars tones.',
    label: 'Project'
  },
  {
    color: '#120F17',
    title: 'YouTube Clickbait Classifier',
    description: 'Multimodal ML pipeline using RoBERTa & CNN features. Classified videos with 97.34% accuracy.',
    label: 'Project'
  },
  {
    color: '#120F17',
    title: 'Digital Guruji',
    description: 'Full Stack Web Intern. Built a MERN platform unifying multiple Generative AI models (image, video, audio).',
    label: 'Experience'
  },
  {
    color: '#120F17',
    title: 'Technical Skills',
    description: 'JavaScript, Python, C/C++, Java. React.js, Node.js, Express.js, Next.js, MongoDB, React Native, Scikit-learn.',
    label: 'Skills'
  }
];

const projects = [
  {
    title: "YouTube Clickbait Classifier",
    tech: "Python, Scikit-learn, NLP, RoBERTa",
    description: "Multimodal ML pipeline achieving 97.34% accuracy by combining text embeddings and thumbnail features.",
    link: "https://github.com/Nishant0121"
  },
  {
    title: "IPL Win Predictor",
    tech: "Python, Scikit-learn, Streamlit",
    description: "Real-time win probability predictor using live match states with 87% accuracy.",
    link: "https://github.com/Nishant0121"
  },
  {
    title: "AutoCommit",
    tech: "TypeScript, VS Code API, Git",
    description: "VS Code extension (86+ installs) that auto-generates commit messages using LLMs.",
    link: "https://github.com/Nishant0121"
  },
  {
    title: "Link Up",
    tech: "React.js, Node.js, Socket.io, MongoDB",
    description: "Real-time multiplayer gaming hub with shared rooms and live state sync.",
    link: "https://github.com/Nishant0121"
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050408] text-white overflow-hidden font-geist selection:bg-purple-500/30">


      <SplashCursor
        DENSITY_DISSIPATION={7.5}
        VELOCITY_DISSIPATION={0.5}
        PRESSURE={0.05}
        CURL={3}
        SPLAT_RADIUS={0.03}
        SPLAT_FORCE={3000}
        COLOR_UPDATE_SPEED={2}
        SHADING={false}
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20 px-4">
        <div className="text-center space-y-6 max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-4">
            <ShinyText text="Available for Internships" speed={3} className="text-sm font-medium" />
          </div>

          <SplitText
            text="Nishant Patil"
            className="text-7xl md:text-8xl font-black tracking-tighter"
            delay={100}
            duration={0.8}
          />

          <BlurText
            text="Engineering Student & Full Stack Developer building impactful digital experiences."
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            delay={50}
          />

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">
              View Projects
            </button>
            <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-colors backdrop-blur-md">
              <DecryptedText text="Download Resume" animateOn="hover" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a href="https://github.com/Nishant0121" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FolderGit2 size={24} />
            </a>
            <a href="mailto:nishantpatil10121@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://nishantpatil.vercel.app" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Bento Section */}
      <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Award className="text-purple-500" />
          <h2 className="text-3xl font-bold">Highlights</h2>
        </div>

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
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Code className="text-pink-500" />
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <SpotlightCard key={i} spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FolderGit2 size={20} />
                  </a>
                </div>
                <p className="text-gray-400 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.split(',').map((t, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-blue-500" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6 border-l border-white/10 ml-4 pl-8">
            <div className="relative">
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <h4 className="text-xl font-bold">App Developer Intern</h4>
              <p className="text-blue-400 font-medium">Pilji Healthtech Pvt Ltd • Aug 2025 – Feb 2026</p>
              <p className="text-gray-400 mt-2">Built a production-grade full-stack mobile app using React Native, Node.js, Express, and PostgreSQL.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-blue-500/50 border border-blue-500/20" />
              <h4 className="text-xl font-bold">Full Stack Web Developer Intern</h4>
              <p className="text-blue-400 font-medium">Digital Guruji • Apr 2025 – Jun 2025</p>
              <p className="text-gray-400 mt-2">Built a MERN stack platform unifying multiple Generative AI models into a single cohesive product.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="text-purple-500" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.15)">
            <h4 className="text-xl font-bold">B.E. in Information Technology</h4>
            <p className="text-purple-400 font-medium">Thadomal Shahani Engineering College • 2027</p>
            <p className="text-gray-400 mt-2">Focusing on Data Structures, Algorithms, and Object-Oriented Programming.</p>
          </SpotlightCard>

          <div className="flex items-center gap-3 mt-12 mb-2">
            <Award className="text-pink-500" />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-pink-400">1st Place — Need for Code 3.0 Hackathon</p>
              <p className="text-gray-400 text-sm">Digitized India's ration card system with digital verification.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-pink-400">1st Place — Wabecade Hackathon</p>
              <p className="text-gray-400 text-sm">Built an ed-tech platform streamlining student learning journeys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2026 Nishant Patil. Built with React Bits & Magic.
        </p>
      </footer>
    </div>
  );
}
