import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/ui/SpotlightCard';
import DecryptedText from '../components/ui/DecryptedText';
import { Mail, Phone, FolderGit2, Globe, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-[#c5ff41]" />,
      label: "Email",
      value: "nishantpatil10121@gmail.com",
      link: "mailto:nishantpatil10121@gmail.com"
    },
    {
      icon: <Phone className="text-[#c5ff41]" />,
      label: "Phone",
      value: "+91 9511692910",
      link: "tel:+919511692910"
    },
    {
      icon: <FolderGit2 className="text-[#c5ff41]" />,
      label: "GitHub",
      value: "github.com/Nishant0121",
      link: "https://github.com/Nishant0121"
    },
    {
      icon: <Globe className="text-[#c5ff41]" />,
      label: "Website",
      value: "nishantpatil.vercel.app",
      link: "https://nishantpatil.vercel.app"
    }
  ];

  return (
    <div className="min-h-screen bg-[#151312] text-white py-20 px-6 font-geist">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <DecryptedText
            text="GET IN TOUCH"
            animateOn="view"
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
            encryptedClassName="text-[#c5ff41]/50"
            speed={80}
          />
          <p className="text-[#998f8f] mt-4 text-xl mx-auto max-w-2xl">
            Have a project in mind or just want to say hi? Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form Placeholder / Professional Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[32px] bg-white/5 border border-white/10"
          >
            <h3 className="text-3xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#998f8f] mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5ff41] transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#998f8f] mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5ff41] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#998f8f] mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5ff41] transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button className="w-full py-4 bg-[#c5ff41] text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#b0f030] transition-colors">
                <Send size={20} /> SEND MESSAGE
              </button>
            </form>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((info, i) => (
              <a key={i} href={info.link} target="_blank" rel="noreferrer">
                <SpotlightCard className="p-8 rounded-[24px] border border-white/5 bg-[#1a1817] hover:border-[#c5ff41]/30 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-[#c5ff41]/10">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#998f8f] mb-1">{info.label}</p>
                      <p className="text-xl font-bold text-white group-hover:text-[#c5ff41] transition-colors">{info.value}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
