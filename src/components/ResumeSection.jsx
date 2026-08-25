import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeSection({ onCursorEnter, onCursorLeave }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    // Generate a clean text resume download file dynamically if PDF is placeholder
    const element = document.createElement('a');
    const file = new Blob([
      `NEEJ BUTANI — FULL STACK DEVELOPER
Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.github}
LinkedIn: ${portfolioData.personal.linkedin}

SUMMARY:
${portfolioData.personal.bio}

SKILLS:
Frontend: React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3
Backend: Node.js, Express.js, REST APIs
Programming: C++, JavaScript, Python
Databases: MySQL, MongoDB, Firebase
Tools: Git, GitHub, VS Code, Figma, Postman

SELECTED PROJECTS:
1. Nexus Innovation (React, Node.js, Tailwind CSS)
2. Nexus Data Science Hub (React, Python, FastAPI, Chart.js)
3. Aether Editorial UI Kit (React, Tailwind CSS, Framer Motion)
      `
    ], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = "Neej_Butani_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="py-20 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-r from-[#121212] via-[#171717] to-[#050505] border border-[#FF1E1E]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#FF1E1E]/20 text-[#FF1E1E] flex items-center justify-center border border-[#FF1E1E]/40 shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF1E1E] flex items-center gap-1.5 mb-1 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> CURRICULUM VITAE
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                Want the full story?
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Explore my detailed resume covering work experience, skill breakdown, and academic highlights.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => setIsPreviewOpen(true)}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="px-6 py-3.5 rounded-full bg-[#171717] hover:bg-white/20 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-[#FF1E1E]" /> View Resume
            </button>
            <button
              onClick={handleDownload}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="px-6 py-3.5 rounded-full bg-[#FF1E1E] hover:bg-[#FF2B2B] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#FF1E1E]/30"
            >
              <Download className="w-4 h-4" /> Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#121212] border border-[#FF1E1E]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 bg-[#050505] border-b border-white/10">
                <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#FF1E1E]" /> Resume — Neej Butani
                </h3>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 rounded-full bg-[#171717] text-white hover:bg-[#FF1E1E]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto space-y-6 text-left">
                <div className="border-b border-white/10 pb-6">
                  <h1 className="font-heading font-extrabold text-3xl text-white">Neej Butani</h1>
                  <p className="text-[#FF1E1E] font-mono text-sm uppercase tracking-wider mt-1">Full Stack Developer</p>
                  <p className="text-xs text-gray-400 mt-2">Email: {portfolioData.personal.email} | GitHub: github.com/Neej03</p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-[#FF1E1E] text-sm uppercase tracking-wider mb-2">Professional Summary</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{portfolioData.personal.bio}</p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-[#FF1E1E] text-sm uppercase tracking-wider mb-3">Technical Skills</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                    <div>
                      <strong className="text-white">Frontend:</strong> React.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3
                    </div>
                    <div>
                      <strong className="text-white">Backend:</strong> Node.js, Express.js, REST APIs
                    </div>
                    <div>
                      <strong className="text-white">Programming:</strong> C++, JavaScript, Python
                    </div>
                    <div>
                      <strong className="text-white">Databases:</strong> MySQL, MongoDB, Firebase
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#050505] border-t border-white/10 flex justify-end">
                <button
                  onClick={handleDownload}
                  className="px-5 py-2 rounded-full bg-[#FF1E1E] text-white font-heading font-bold text-xs uppercase"
                >
                  Download TXT Resume
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
