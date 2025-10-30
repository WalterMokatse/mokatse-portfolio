import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 md:px-12 bg-center bg-cover bg-fixed py-24 md:py-0"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(/imgs/hero-image.avif)'
      }}>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-indigo-400 rounded-full opacity-25 animate-ping"></div>
      </div>

      {/* Social Links */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-6">
        <a href="mailto:karabomokatse18@gmail.com" className="group">
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20">
            <Mail size={20} className="text-white group-hover:text-purple-200 transition-colors" />
          </div>
        </a>
        <a href="https://github.com/WalterMokatse" target="_blank" rel="noopener noreferrer" className="group">
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20">
            <Github size={20} className="text-white group-hover:text-purple-200 transition-colors" />
          </div>
        </a>
        <a href="https://ls.linkedin.com/in/karabo-mokatse-617299292" target="_blank" rel="noopener noreferrer" className="group">
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20">
            <Linkedin size={20} className="text-white group-hover:text-purple-200 transition-colors" />
          </div>
        </a>
      </div>

      {/* Main Content */}
      <div className="text-center text-white max-w-4xl mx-auto relative z-10">

        <div className="bflex items-center justify-center gap-2 mb-6 animate-fade-in">
          <p className="text-lg md:text-xl font-light tracking-wide">
            Hello, I'm
          </p>
        </div>

        {/* Name with Gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up">
          <span className="">
            Karabo Mokatse
          </span>
        </h1>

        {/* My title badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in-delayed">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-purple-100 font-medium">Web Developer</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 opacity-0 animate-fade-in-delayed-2 max-w-3xl mx-auto  md:text-center ">
          I create <span className="text-red-500 font-semibold">digital experince</span> that blend
          beautiful design with <span className="text-red-500 font-semibold">cutting-edge technology</span>.
          Excited about building solutions that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0 animate-fade-in-delayed-3">
          <button
            onClick={scrollToContact}
            className="btn-primary flex-center gap-2 rounded-full px-8 py-4 animate-bounce"
          >
            Get In Touch
            <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button onClick={scrollToWork} className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 transform">
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;