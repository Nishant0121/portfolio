import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../components/ui/TiltedCard';
import BlurText from '../components/ui/BlurText';
import { FolderGit2, ExternalLink } from 'lucide-react';

import { projects } from '../data/portfolioData';

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
                containerHeight="440px"
                imageHeight="440px"
                rotateAmplitude={10}
                scaleOnHover={1.02}
                overlayContent={
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-black/60 to-black/30 group-hover:bg-black/30 transition-colors flex flex-col justify-end p-6 md:p-8">
                    <div className="space-y-2 translate-z-20">
                      <p className="text-[#c5ff41] font-bold text-xs tracking-widest uppercase">{project.subtitle}</p>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">{project.title}</h3>
                      <p className="text-[#998f8f] text-xs md:text-sm leading-relaxed line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-0.5 text-[9px] uppercase font-bold tracking-wider rounded-full bg-black/60 border border-white/10 text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#c5ff41] hover:text-black rounded-xl transition-all font-bold text-xs"
                        >
                          <FolderGit2 size={15} /> GITHUB
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-[#c5ff41] rounded-xl transition-all font-bold text-xs"
                        >
                          <ExternalLink size={15} /> DEMO / CODE
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
