import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeSection({ onCursorEnter, onCursorLeave }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    const element = document.createElement('a');
    element.href = '/assets/resume.pdf';
    element.download = 'Neej_Butani_Resume.pdf';
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
                <Sparkles className="w-3.5 h-3.5" /> OFFICIAL CURRICULUM VITAE
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                Want the full story?
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Explore my official PDF resume covering technical skills, 19+ production projects, engineering experience, and academic highlights.
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
              <Eye className="w-4 h-4 text-[#FF1E1E]" /> View Resume PDF
            </button>
            <button
              onClick={handleDownload}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="px-6 py-3.5 rounded-full bg-[#FF1E1E] hover:bg-[#FF2B2B] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#FF1E1E]/30"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Interactive PDF Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-full max-w-5xl h-[88vh] bg-[#121212] border border-[#FF1E1E]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#FF1E1E]" />
                  <h3 className="font-heading font-bold text-sm md:text-base text-white">
                    Official Resume — Neej Butani
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/assets/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171717] hover:bg-white/10 text-xs font-mono text-gray-300 hover:text-white border border-white/10 transition-colors"
                  >
                    Open in tab <ExternalLink className="w-3 h-3 text-[#FF1E1E]" />
                  </a>
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF1E1E] hover:bg-[#FF2B2B] text-xs font-heading font-bold text-white uppercase shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close modal"
                    className="p-2 rounded-full bg-[#171717] text-white hover:bg-[#FF1E1E] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Body */}
              <div className="flex-1 w-full bg-[#1e1e1e] relative overflow-hidden">
                <iframe
                  src="/assets/resume.pdf#toolbar=0&navpanes=0"
                  title="Neej Butani Resume PDF"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
