import React, { useState } from "react"
import ProjectModal from "./ProjectModal";
import { ExternalLink, Github, Filter, ArrowRight, Eye, Code, Video } from 'lucide-react';

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false)

  if (showModal) return <ProjectModal project={project} onClose={() => setShowModal(false)} />

  return (
    <div
      key={project.id}
      className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="eager"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 ">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description.substring(0, 90)}...
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded-full border border-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="">
          <button
            onClick={() => setShowModal(true)}
            className="btn-secondary flex-center rounded-2xl w-full gap-1 my-auto"
          >
            <Eye size={20} className="hover:animate-bounce" />
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard