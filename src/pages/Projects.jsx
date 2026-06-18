import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../components/ui/TiltedCard';
import BlurText from '../components/ui/BlurText';
import { FolderGit2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AutoCommit",
    subtitle: "VS Code Extension",
    tech: "TypeScript, VS Code API, Git",
    description: "Published a VS Code extension with 86+ active installs that auto-generates commit messages via LLM.",
    link: "https://github.com/Nishant0121",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "YouTube Classifier",
    subtitle: "Machine Learning",
    tech: "Python, NLP, RoBERTa",
    description: "Multimodal ML pipeline combining text and thumbnail features, achieving 97.34% accuracy.",
    link: "https://github.com/Nishant0121",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "IPL Win Predictor",
    subtitle: "Data Science",
    tech: "Python, Scikit-learn, Streamlit",
    description: "Real-time IPL match win probability predictor using live features, achieving 87% accuracy.",
    link: "https://github.com/Nishant0121",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Link Up",
    subtitle: "Gaming Platform",
    tech: "React, Node.js, Socket.io",
    description: "Real-time multiplayer hub where friends jump into shared game rooms with live state sync.",
    link: "https://github.com/Nishant0121",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#151312] text-white py-20 px-6 font-geist">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <BlurText
            text="SELECTED PROJECTS"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          />
          <p className="text-[#998f8f] mt-4 text-xl max-w-2xl">
            A collection of my work in Full Stack Development, App Development, and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={project.title}
                containerHeight="400px"
                imageHeight="400px"
                rotateAmplitude={10}
                scaleOnHover={1.02}
                overlayContent={
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col justify-end p-8">
                    <div className="space-y-2 translate-z-20">
                      <p className="text-[#c5ff41] font-bold text-sm tracking-widest uppercase">{project.subtitle}</p>
                      <h3 className="text-3xl font-black text-white">{project.title}</h3>
                      <p className="text-[#998f8f] text-sm max-w-sm">{project.description}</p>
                      <div className="flex gap-4 pt-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#c5ff41] hover:text-black rounded-xl transition-all font-bold text-xs"
                        >
                          <FolderGit2 size={16} /> GITHUB
                        </a>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-[#c5ff41] rounded-xl transition-all font-bold text-xs"
                        >
                          <ExternalLink size={16} /> LIVE
                        </a>
                      </div>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
