import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, ExternalLink, Eye, X, Filter, RotateCcw } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects({ onCursorEnter, onCursorLeave }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(portfolioData.projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Effective query to filter with (realtime input query)
  const effectiveQuery = searchQuery.trim().toLowerCase();

  // Filter projects by category & search query
  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      if (!effectiveQuery) return matchesCategory;

      const matchesTitle = project.title.toLowerCase().includes(effectiveQuery);
      const matchesSubtitle = project.subtitle.toLowerCase().includes(effectiveQuery);
      const matchesDesc = project.description.toLowerCase().includes(effectiveQuery);
      const matchesCategoryName = project.category.toLowerCase().includes(effectiveQuery);
      const matchesTech = project.techStack.some((tech) =>
        tech.toLowerCase().includes(effectiveQuery)
      );

      return matchesCategory && (matchesTitle || matchesSubtitle || matchesDesc || matchesCategoryName || matchesTech);
    });
  }, [activeCategory, effectiveQuery]);

  const featuredProjects = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );
  const otherProjects = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSubmittedQuery('');
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Ambient Red/Obsidian Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF1E1E]/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF1E1E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3"
        >
          <Sparkles className="w-4 h-4" /> CRAFTED PORTFOLIO WORK ({portfolioData.projects.length} DEPLOYED SYSTEMS)
        </motion.div>

        {/* Section Heading & Stat Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight"
          >
            Selected <span className="text-[#FF1E1E]">Projects.</span>
          </motion.h2>

          {/* Quick Counter Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="px-4 py-2 rounded-2xl bg-[#121212] border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-bold">{portfolioData.projects.filter(p => p.liveUrl.includes('vercel.app')).length}</span> Live Vercel Apps
            </div>
            <div className="px-4 py-2 rounded-2xl bg-[#121212] border border-white/10 text-xs font-mono text-gray-300">
              <span className="text-[#FF1E1E] font-bold">{portfolioData.projects.length}</span> Total Projects
            </div>
          </motion.div>
        </div>

        {/* Search Bar & Category Filter Controls */}
        <div className="space-y-6 mb-14">
          {/* Interactive Search Bar Form */}
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects (e.g. React, Node, AI, Converter, Weather)..."
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-[#121212] border border-white/15 focus:border-[#FF1E1E] text-sm text-white placeholder-gray-500 focus:outline-none transition-colors shadow-lg"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                  title="Clear Search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              type="submit"
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="px-6 py-3.5 rounded-2xl bg-[#FF1E1E] hover:bg-[#FF2B2B] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FF1E1E]/30 shrink-0"
            >
              <Search className="w-4 h-4" /> Search
            </button>
          </form>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <Filter className="w-4 h-4 text-gray-500 shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? portfolioData.projects.length
                  : portfolioData.projects.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  onMouseEnter={() => onCursorEnter('hover')}
                  onMouseLeave={onCursorLeave}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-[#FF1E1E] text-white border-[#FF1E1E] shadow-lg shadow-[#FF1E1E]/30 scale-105'
                      : 'bg-[#121212] text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      isActive ? 'bg-black/30 text-white' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE SEARCH RESULTS TITLE / STATUS BAR */}
        {effectiveQuery && (
          <div className="flex items-center justify-between bg-[#121212] border border-[#FF1E1E]/30 rounded-2xl px-6 py-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>Search results for</span>
              <span className="font-mono font-bold text-[#FF1E1E]">"{searchQuery}"</span>
              <span className="text-xs text-gray-400">({filteredProjects.length} found)</span>
            </div>
            <button
              onClick={handleClearSearch}
              className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1 hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear search
            </button>
          </div>
        )}

        {/* EMPTY RESULTS STATE */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#121212]/50 border border-white/10 rounded-3xl p-8">
            <p className="text-lg text-gray-300 font-heading font-bold mb-2">No projects found matching "{searchQuery}"</p>
            <p className="text-xs text-gray-500 mb-6">Try searching for keywords like "React", "AI", "Node", "Design", or select a different category.</p>
            <button
              onClick={() => {
                handleClearSearch();
                setActiveCategory('All');
              }}
              className="px-6 py-2.5 rounded-full bg-[#FF1E1E] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#FF2B2B] transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* IF USER IS SEARCHING: CONSOLIDATED GRID VIEW */}
        {effectiveQuery ? (
          filteredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                    onCursorEnter={onCursorEnter}
                    onCursorLeave={onCursorLeave}
                  />
                ))}
              </AnimatePresence>
            </div>
          )
        ) : (
          /* STANDARD VIEW (FEATURED SHOWCASE + ALL DEPLOYED GRID) */
          <>
            {/* FEATURED PROJECTS SHOWCASE */}
            {featuredProjects.length > 0 && (
              <div className="space-y-16 mb-20">
                {featuredProjects.map((project, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 md:p-12 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E]/50 transition-all duration-500 shadow-2xl group relative overflow-hidden"
                    >
                      {/* Accent Glow Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Image Section */}
                      <div
                        className={`lg:col-span-7 ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        } relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 cursor-pointer`}
                        onClick={() => setSelectedProject(project)}
                        onMouseEnter={() => onCursorEnter('project', 'EXPLORE')}
                        onMouseLeave={onCursorLeave}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                        
                        {/* Live Badge */}
                        {project.liveUrl && project.liveUrl.includes('vercel.app') && (
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Vercel App
                          </div>
                        )}
                      </div>

                      {/* Information Section */}
                      <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6 text-left`}>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-[#FF1E1E] uppercase tracking-widest">
                            FEATURED PROJECT
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
                          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                            {project.category}
                          </span>
                        </div>

                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="font-heading font-extrabold text-2xl sm:text-4xl text-white hover:text-[#FF1E1E] transition-colors cursor-pointer leading-tight"
                        >
                          {project.title}
                        </h3>

                        <p className="text-sm text-gray-300 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg bg-[#171717] text-white text-xs font-mono border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                          <button
                            onClick={() => setSelectedProject(project)}
                            onMouseEnter={() => onCursorEnter('hover')}
                            onMouseLeave={onCursorLeave}
                            className="px-6 py-3 rounded-full bg-[#FF1E1E] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#FF2B2B] transition-colors flex items-center gap-2 shadow-lg shadow-[#FF1E1E]/30"
                          >
                            <Eye className="w-4 h-4" /> View Details
                          </button>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => onCursorEnter('hover')}
                              onMouseLeave={onCursorLeave}
                              className="px-5 py-3 rounded-full bg-[#171717] hover:bg-white text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border border-white/20"
                            >
                              <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => onCursorEnter('hover')}
                              onMouseLeave={onCursorLeave}
                              className="p-3 rounded-full bg-[#171717] text-white hover:bg-white/20 transition-colors border border-white/20"
                              aria-label="GitHub Repository"
                              title="View Source Code"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* OTHER PROJECT GRID CARDS */}
            {otherProjects.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF1E1E]" /> All Deployed Projects ({otherProjects.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {otherProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={setSelectedProject}
                        onCursorEnter={onCursorEnter}
                        onCursorLeave={onCursorLeave}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCursorEnter={onCursorEnter}
        onCursorLeave={onCursorLeave}
      />
    </section>
  );
}
