import React, { useState, useEffect } from 'react';
import { Briefcase, Phone, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: User, label: 'About me', href: '#about' },
    { icon: Briefcase, label: 'My work', href: '#work' },
    { icon: Phone, label: 'Contact me', href: '#contact' }
  ];

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
        }
      `}>
        <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center">
              <h1 className={`
                text-xl md:text-2xl font-bold transition-colors duration-300
                ${isScrolled ? 'text-gray-900' : 'text-white'}
                bg-black bg-clip-text text-transparent
              `}>
                Karabo Mokatse
              </h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`
                      flex items-center gap-2 font-bold transition-all duration-300
                      hover:scale-105 group
                      ${isScrolled 
                        ? 'text-gray-700 hover:text-black' 
                        : 'text-white/90 hover:text-white'
                      }
                    `}
                  >
                    <item.icon 
                      size={18} 
                      className={`
                        transition-all duration-300 group-hover:scale-110
                        ${isScrolled ? 'text-red-500' : 'text-white'}
                      `} 
                    />
                    <span className="relative">
                      {item.label}
                      <span className={`
                        absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300
                        group-hover:w-full
                        ${isScrolled ? 'bg-red-500' : 'bg-white'}
                      `}></span>
                    </span>
                  </a>
                </li>
              ))}
              
              {/* CTA Button */}
              <li>
                <a
                  href="#contact"
                  className="
                    bg-red-500 text-white shadow-md 
                    px-6 py-2.5 rounded-full font-semibold transition-all duration-300
                    transform hover:scale-100 hover:shadow-lg animate-bounce"
                >
                  Let's Talk
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                md:hidden p-2 rounded-lg transition-all duration-300
                ${isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
                }
              `}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden absolute top-full left-0 right-0 
          bg-white/95 backdrop-blur-md shadow-2xl
          transition-all duration-500 overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 text-gray-800 font-semibold text-lg 
                             hover:text-red-500 transition-colors duration-300 group"
                  >
                    <item.icon 
                      size={20} 
                      className="text-red-500 group-hover:scale-110 transition-transform duration-300" 
                    />
                    {item.label}
                  </a>
                </li>
              ))}
              
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full mx-auto text-center px-6 py-3 bg-red-500 
                           text-white font-semibold rounded-full transition-all duration-300
                           hover:shadow-lg transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;