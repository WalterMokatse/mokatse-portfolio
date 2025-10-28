import React,{ useState } from "react"
import { ExternalLink, Github, Filter, ArrowRight, Eye, Code, Video } from 'lucide-react';

function ProjectCard({project}){
    const [fullDescription,setFullDescription] = useState(false)
  
    function toggleDescription(description){
        if(fullDescription){
          return description
        }
  
        return description.substring(0,150)
    }
    return(
      <div
                key={project.id}
                className="group w-full md:w-1/2 h-auto bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {toggleDescription(project.description)}
                    {fullDescription ? (
                            <button onClick={()=>setFullDescription(false)} className='text-red-500 font-semibold cursor-pointer block'>show less</button>
                        ):(
                            <button className='text-red-500 font-semibold cursor-pointer' onClick={()=>setFullDescription(true)}>...show more</button>
                        )}
                  </p>
  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded-full border border-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
  
                  {/* Action Buttons */}
                  <div className="flex justify-evenly flex-wrap md:flex-nowrap  items-center pt-4 border-t border-gray-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-700 transition-colors duration-300 group/link"
                    >
                      <Eye size={16} />
                      Live Demo
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
  
                    {project.videoDemo &&(
                        <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-700 transition-colors duration-300 group/link"
                      >
                        <Video size={16} />
                        Video Demo
                      </a>
                    )}
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-700 transition-colors duration-300 group/link"
                    >
                      <Code size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
    )
  }

  export default ProjectCard