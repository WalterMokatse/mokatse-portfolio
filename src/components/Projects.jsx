import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { ExternalLink, Github, Filter, ArrowRight, Eye, Code, Video } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
 

  const projects = [
    {
      id: 1,
      title: "Law Firm Website",
      description: "A professional website built for a law firm. The system allows potential clients to learn about legal services and request consultations. It also includes an internal admin dashboard for managing inquiries and client records.Most law firms struggle to look professional online and receive new client inquiries efficiently. This platform helps the firm present its expertise clearly and allows clients to contact them without visiting the office improving client outreach and saving time.",
      image: "/imgs/law-firm-image.avif",
      technologies: ["Vue.js", "Laravel", "Inertia.js", "PostgreSQL"],
      category: "fullstack",
      liveUrl: "https://mokatsechambers.onrender.com",
      githubUrl: "https://github.com/WalterMokatse/mokatsechambers",
      videoDemo:true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, and responsive layout.",
      image: "/imgs/portfolio-image.avif",
      technologies: ["React.js", "GSAP","Three.js","Javascript"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      videoDemo:false
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-white"></div>
            <span className="text-red-500 font-semibold tracking-wider text-sm uppercase">
              My Portfolio
            </span>
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-red-500 bg-clip-text">Projects</span>
          </h2>
          
          <p className="text-xl  max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web development, 
            from frontend design to backend architecture.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:bg-red-50'
              }`}
            >
              <div className="flex items-center gap-2">
                {filter.key === 'featured' && <Filter size={16} />}
                {filter.label}
              </div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex-center flex-wrap lg:flex-nowrap gap-8">
          {filteredProjects.map((project, index) => (
              <ProjectCard project={project} key={index}/>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};



export default Projects;