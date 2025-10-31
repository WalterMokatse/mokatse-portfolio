import React from 'react';
import { Download, Mail, Github, Linkedin, Code, Heart } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log('Downloading CV...');
  };

  const techSkills = [
    { name: 'Laravel', imageSrc: '/3d-imgs/laravel-logo.png' },
    { name: 'Vue.js', imageSrc: '/3d-imgs/vue-logo.png' },
    { name: 'Node.js', imageSrc: '/3d-imgs/node-logo.png' },
    { name: 'React.js', imageSrc: '/3d-imgs/react-icon.png' },
    { name: 'Typescript', imageSrc: '/3d-imgs/ts-logo.png' },
    { name: 'Javascript', imageSrc: '/3d-imgs/js-logo.png' },
    { name: 'PHP', imageSrc: '/3d-imgs/php-logo.png' },
    { name: 'TailwindCSS', imageSrc: '/3d-imgs/tailwind-logo.png' }
  ]

  return (
    <section id="about" className="min-h-screen flex flex-col space-y-4 items-center py-20 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto w-ful">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">

            <div className="space-y-4">
              <div className="hidden lg:flex items-center gap-3">
                <div className="w-12 h-0.5 bg-red-500"></div>
                <span className="font-semibold tracking-wider text-black text-sm uppercase">
                  Get To Know Me
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                About <span className="text-transparent bg-red-500 bg-clip-text">Me</span>
              </h2>
            </div>

            {/* My Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I'm a <span className="text-red-500 font-semibold">Web Developer</span> with a love for creating digital experiences that make a difference. With expertise in modern web technologies, I bridge the gap between design and functionality.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in tech started in 2021 when I studied Computer Science at National University of Lesotho,
                and since then I've loved the craft of developing software solutions.
                I believe in writing clean, efficient code and creating user-centered solutions while growing as a developer and gaining experience to build digital solutions that further make our lives easier.
              </p>
            </div>

            <div className="">
              <a
                href="/CV-Karabo Mokatse.pdf"
                className="btn-primary flex-center rounded-2xl px-8 py-6 w-full md:w-fit gap-1"
                download
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download My CV
              </a>
            </div>


          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative">
              {/* Main Image */}
              <div className="lg:hidden flex items-center gap-3 mb-3">
                <div className="w-12 h-0.5 bg-red-500"></div>
                <span className="font-semibold tracking-wider text-black text-sm uppercase">
                  Get To Know Me
                </span>
              </div>
              <div className="relative h-auto mx-auto rounded-full  bg-linear-to-br p-1 ">
                <img
                  className="rounded-full mx-auto border-2  border-red-300 size-96 md:w-100 md:h-auto object-contain"
                  src="/imgs/ME.png"
                  loading="eager"
                  alt="Karabo Mokatse - Full Stack Developer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack 3d images */}
      <div className="flex flex-col  gap-6  mt-12 bg-gray-100 p-4 w-full">
        <h2 className='font-semibold text-5xl text-black w-full text-center'>My <span className='text-red-500'>Tech Stack</span></h2>
        <div className='flex justify-evenly md:justify-around space-y-4 items-center flex-wrap w-full'>
          {techSkills.map((tech) => (
            <div className='space-y-4' key={tech.name}>
              <img className='animate-wiggle size-20' loading="eager" src={tech.imageSrc} />
              <span
                className="block mx-auto w-fit  px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-red-300"
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;