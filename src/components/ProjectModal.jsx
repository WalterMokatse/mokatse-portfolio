import React, { useState, useEffect } from 'react';
import {
    X,
    Eye,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Github,
    Calendar,
    Video,
    Play,
    Pause
} from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [showVideo, setShowVideo] = useState(false)


    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, project.screenshots.length]);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === project.screenshots.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? project.screenshots.length - 1 : currentIndex - 1);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (showVideo) return <ProjectVideoPlayer videoUrl={project.video} thumbnail={project.screenshots[0]} title={project.title} />

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg h-screen flex items-center justify-center px-4 py-8 z-50 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden w-full animate-scale-in">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-linear-to-r from-gray-50 to-white">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h2>
                        <p className="text-gray-600 mt-1 flex items-center gap-2">
                            <Calendar size={16} />
                            Completed: {project.completed}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"
                    >
                        <X size={24} className="text-gray-500 group-hover:text-gray-700" />
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Image Slideshow Section */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                        <Eye size={18} />
                                        Project Screenshots
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                            {currentIndex + 1} / {project.screenshots.length}
                                        </span>
                                        <button
                                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                            className={`px-2 py-1 rounded-full text-xs transition-colors ${isAutoPlaying
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-gray-100 text-gray-600'
                                                }`}
                                        >
                                            {isAutoPlaying ? <Pause /> : <Play />}
                                        </button>
                                    </div>
                                </div>

                                {/* Main Image Container */}
                                <div className="relative overflow-x-scroll bg-gray-50 rounded-xl  border border-gray-200 group">
                                    <img
                                        src={project.screenshots[currentIndex]}
                                        alt={`${project.title} screenshot ${currentIndex + 1}`}
                                        loading="eager"
                                        className="w-full h-64 md:h-80 object-contain transition-transform duration-700 ease-out"
                                    />

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                                    >
                                        <ChevronLeft size={20} className="text-gray-700" />
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                                    >
                                        <ChevronRight size={20} className="text-gray-700" />
                                    </button>

                                    {/* Image Indicators */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                        {project.screenshots.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? 'bg-white w-6'
                                                    : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Thumbnail Strip */}
                                <div className="flex gap-3 overflow-x-scroll pb-2">
                                    {project.screenshots.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                                                ? 'border-blue-500 ring-2 ring-blue-200'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                loading="lazy"
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="space-y-6">
                                {/* Description */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        Project Overview
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed ">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies?.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border transition-all duration-300 hover:scale-105"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>


                                {/* Action Buttons */}
                                <div className="flex flex-col flex-wrap sm:flex-row gap-4 py-4 border-t border-gray-100">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full md:w-fit btn-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center justify-center gap-3 group"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    )}

                                    {project.videoUrl && (
                                        <a
                                            href={project.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full md:w-fit btn-secondary px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center justify-center gap-3 group"
                                        >
                                            <Video size={18} />
                                            Video Demo
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    )}

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-fit border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:scale-105 transform flex items-center justify-center gap-3 group"
                                    >
                                        <Github size={18} />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;