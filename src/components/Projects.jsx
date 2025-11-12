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
      technologies: ["Vue.js", "Laravel", "Inertia.js", "TailwindCSS", "Apexchart.js", "PostgreSQL"],
      category: "fullstack",
      liveUrl: "https://mokatsechambers.onrender.com",
      githubUrl: "https://github.com/WalterMokatse/mokatsechambers",
      videoUrl: "https://vimeo.com/1131975428?fl=ip&fe=ec",
      screenshots: [
        '/screenshots/firm1.png', '/screenshots/firm2.png', '/screenshots/firm4.png', '/screenshots/firm3.png', '/screenshots/firm5.png',
        '/screenshots/firm6.png', '/screenshots/firm7.png', '/screenshots/firm8.png', '/screenshots/firm9.png', '/screenshots/firm10.png'
      ],
      completed: 2025
    },
    {
      id: 2,
      title: "Job and market portal",
      description: "A full-featured web platform that connects job seekers, recruiters, and entrepreneurs in one ecosystem. The system allows users to search and apply for jobs, chat with recruiters, and participate in a digital marketplace for buying and selling goods. It also includes intelligent job recommendations powered by OpenAI embeddings, which match users to suitable positions based on their skills and profiles.Many job seekers and small businesses in developing regions lack a unified platform that offers employment opportunities, professional networking, and local commerce. This project bridges that gap by providing an all-in-one digital space for finding jobs, conducting virtual interviews, and trading products all accessible on any device.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      technologies: ["Vue.js", "Laravel", "Websocket.io", "webRTC", "TailwindCSS", "Open Ai apis", "Apexchart.js", "MySQL"],
      category: "fullstack",
      liveUrl: "",
      githubUrl: "https://github.com/WalterMokatse/C-reer_Connect",
      videoUrl:"",
      screenshots: ['/screenshots/job1.png', '/screenshots/job6.png','/screenshots/job7.png','/screenshots/job9.png','/screenshots/job2.png','/screenshots/job8.png', '/screenshots/job3.png','/screenshots/job11.png','/screenshots/job10.png' ,'/screenshots/job5.png', '/screenshots/job4.png'],
      completed: 2025
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, and responsive layout.",
      image: "/imgs/portfolio-image.avif",
      technologies: ["React.js", "TailwindCSS", "Javascript"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/WalterMokatse/mokatse-portfolio",
      videoUrl:"",
      screenshots: ['/screenshots/portfolio1.png'],
      completed: 2025
    },

  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="work" className="py-20 px-4 md:px-12">
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
            Recent <span className="text-transparent bg-red-500 bg-clip-text">Projects</span>
          </h2>

          <p className="text-xl  max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeFilter === filter.key
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};



export default Projects;