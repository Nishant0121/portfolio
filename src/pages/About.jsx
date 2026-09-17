import React from 'react';
import { personalInfo, education, skillCategories, awards } from '../data/portfolioData';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-white font-geist">
      <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
        ABOUT <span className="text-[#c5ff41]">ME</span>
      </h1>
      
      <div className="space-y-6 text-lg text-[#998f8f] leading-relaxed">
        <p>
          I am <span className="text-white font-bold">{personalInfo.name}</span>, an Information Technology student at{' '}
          <span className="text-white font-semibold">{education.institution}</span>, Mumbai (CGPA {education.cgpa}, {education.status}). I am a passionate Software Engineer 
          and Full Stack Developer who loves engineering production-grade web/mobile applications, developer tooling, and intelligent machine learning systems.
        </p>
        
        <p>
          My industry experience includes working as a Software Engineer Intern at{' '}
          <span className="text-white font-semibold">Deloitte</span> (contributing to the Analytics Insights Center in External Audit, building the Feedback Portal and Projection Tracker with React & GenW.AI, and automating audit pipelines with Python and LLMs). Previously, I built a production full-stack health app at{' '}
          <span className="text-white font-semibold">Pilji Healthtech</span> with React Native, Node.js, Express, PostgreSQL, and JWT auth, and engineered a MERN Generative AI platform at{' '}
          <span className="text-white font-semibold">Digital Guruji</span>.
        </p>
        
        <p>
          I actively participate and excel in competitive hackathons and national competitions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          {awards.map((award, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c5ff41]/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5ff41] block mb-2">{award.badge}</span>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{award.title}</h3>
              </div>
              <p className="text-xs text-[#998f8f] leading-relaxed mt-2">{award.description}</p>
            </div>
          ))}
        </div>
        
        <p>
          Beyond web and mobile development, I design and ship machine learning pipelines like the{' '}
          <span className="text-white font-bold">YouTube Clickbait Classifier</span> (a multimodal RoBERTa + CNN architecture achieving 97.34% accuracy) and the{' '}
          <span className="text-white font-bold">IPL Win Predictor</span> (87% accuracy deployed via Streamlit). I also built and published{' '}
          <span className="text-white font-bold">AutoCommit</span>, an open-source VS Code extension with 100+ active installs that generates AI-powered git commits.
        </p>

        <div className="pt-10 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Technical Skills & Coursework</h2>
          <div className="space-y-4">
            {skillCategories.map((group, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#c5ff41] mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-white/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

