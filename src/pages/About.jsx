import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-white font-geist">
      <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
        ABOUT <span className="text-[#c5ff41]">ME</span>
      </h1>
      
      <div className="space-y-6 text-lg text-[#998f8f] leading-relaxed">
        <p>
          I am <span className="text-white font-bold">Nishant Patil</span>, an Information Technology student at 
          Thadomal Shahani Engineering College, Mumbai (Class of 2027). I am a passionate Full Stack Developer 
          and App Developer who loves building production-ready applications.
        </p>
        
        <p>
          My experience includes building full-stack health-tech mobile apps at Pilji Healthtech 
          and engineering Generative AI platforms at Digital Guruji. I thrive in hackathons, 
          having secured 1st place in both <span className="text-white font-bold">Need for Code 3.0</span> and 
          the <span className="text-white font-bold">Wabecade Hackathon</span>.
        </p>
        
        <p>
          Beyond web and mobile development, I am deeply interested in Machine Learning, 
          as demonstrated by my <span className="text-white font-bold">YouTube Clickbait Classifier</span> (achieving 97.34% accuracy) 
          and <span className="text-white font-bold">IPL Win Predictor</span>.
        </p>

        <div className="pt-10">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Core Competencies</h2>
          <div className="flex flex-wrap gap-3">
            {["React.js", "Node.js", "Next.js", "React Native", "MongoDB", "PostgreSQL", "Machine Learning", "Python"].map(skill => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
