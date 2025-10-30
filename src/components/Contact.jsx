import React from 'react';
import { Mail, MessageCircle, Phone, Linkedin, Sparkles, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:karabo@example.com',
      description: 'Send me an email',
      color: 'from-red-400 to-red-600',
      glow: 'hover:shadow-red-500/25',
      username: 'karabomokatse18@gmail.com'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/26658684992',
      description: 'Chat on WhatsApp',
      color: 'from-green-400 to-green-600',
      glow: 'hover:shadow-green-500/25',
      username: '+266 58684992'
    },
    {
      name: 'Telephone',
      icon: Phone,
      href: 'tel:+26612345678',
      description: 'Call me directly',
      color: 'from-violet-400 to-violet-600',
      glow: 'hover:shadow-violet-500/25',
      username: '+266 58684992 / 63317532'
    },
    {
        name: 'Linkedin',
        icon: Linkedin,
        href: 'https://ls.linkedin.com/in/karabo-mokatse-617299292',
        description: 'My Linkedin profile',
        color: 'from-blue-400 to-blue-600',
        glow: 'hover:shadow-blue-500/25',
        username: 'Karabo Mokatse'
      },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-red-500"></div>
            <span className="text-black font-semibold tracking-wider text-sm uppercase flex items-center gap-2">
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-red-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="text-red-500 bg-clip-text">Connect</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start something great? Reach out through any of these channels 
            and let's start building something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : '_self'}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Glowing Icon Container */}
              <div className={`relative z-10 bg-gradient-to-br ${social.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${social.glow}`}>
                <social.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-transparent group-hover:bg-white  group-hover:bg-clip-text transition-all duration-300">
                  {social.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {social.description}
                </p>
                <p className="text-gray-700 font-medium text-sm bg-gray-50 rounded-lg py-2 px-3 group-hover:bg-gradient-to-r group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300">
                  {social.username}
                </p>
              </div>

              {/* External Link Indicator */}
              {social.href.startsWith('http') && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={16} className="text-gray-400" />
                </div>
              )}

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${social.color.replace('from-', 'from-').replace('to-', 'to-')} border-transparent bg-gradient-to-r ${social.color} bg-clip-border`}></div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-50 rounded-2xl p-8 md:p-12 border border-purple-100 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Lets Start Your Next Project!
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                I'm currently available for freelance work and exciting new opportunities. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you!
              </p>

              {/* Quick Stats */}
              <div className="flex-center gap-6 mb-8 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-600">24h</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
            
                <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-600">Free</div>
                  <div className="text-sm text-gray-600">Initial Consultation</div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="mailto:karabomokatse18@gmail.com"
                className="inline-flex items-center gap-3 btn-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-2xl hover:scale-105 transform group"
              >
                <Mail size={20} />
                Start Conversation
              </a>

              <p className="text-gray-500 text-sm mt-4">
                Typically replies within 2-4 hours
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Karabo Mokatse. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Crafted with passion 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;