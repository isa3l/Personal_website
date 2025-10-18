"use client";
import { useRef } from "react";
import { motion } from "framer-motion"; 
import { Linkedin, Github, Mail } from "lucide-react";



export default function Home() {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 flex justify-between items-center px-10 py-4">
        <h1 className="text-xl font-bold">Isael Larios</h1>
        <div className="space-x-6 text-sm">
          <button onClick={() => scrollToSection(homeRef)} className="hover:text-blue-400 transition">Home</button>
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-400 transition">About</button>
          <button onClick={() => scrollToSection(projectsRef)} className="hover:text-blue-400 transition">Projects</button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-400 transition">Contact</button>
        </div>
      </nav>

      {/* Sections */}
{/* Home Section */}
<section
  ref={homeRef}
  className="h-screen flex flex-col md:flex-row items-center justify-center text-left px-8 md:px-20 gap-8"
>
  {/* Profile Image */}
  <div className="flex justify-center md:justify-end w-full md:w-auto">
    <img
      src="/Isaellariosss.JPG"
      alt="Isael Larios"
      className="max-w-[250px] h-auto rounded-2xl object-cover shadow-lg border-4 border-blue-500"
    />
  </div>

  {/* Text Content */}
  <div className="max-w-lg md:ml-8">
    <h1 className="text-5xl font-extrabold mb-4 text-blue-400">Hi, I’m Isael Larios.</h1>
    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
      I’m a student studying <span className="text-blue-400">Electrical Engineering and Computer Science</span> at UC Berkeley.
      I’m passionate about building innovative technologies that make a real impact.
    </p>
    <button
      onClick={() => scrollToSection(aboutRef)}
      className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
    >
      Learn More About Me
    </button>
  </div>
</section>



{/* About Section */}
<section
  ref={aboutRef}
  className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col justify-center px-16"
>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
  >
    {/* About Text */}
    <div className="text-left">
      <h1 className="text-5xl font-extrabold mb-6 text-white">About Me</h1>
      <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-6">
        My name is <span className="text-blue-400 font-semibold">Isael Larios</span>. I’m an EECS student at UC Berkeley fascinated by how things work, from engines to algorithms.  
        Growing up in National City, I spent weekends at car shows with my dad, amazed by the creativity behind every design.  
        Inspired by my dad’s epilepsy, I’m now driven to build technology that can improve health outcomes; blending computer science and empathy to solve real-world problems.
      </p>

      <ul className="text-gray-400 text-lg space-y-2">
        <li>⚙️ Interested in AI, health tech, and embedded systems</li>
        <li>💻 Skilled in Python, JavaScript, and React</li>
        <li>🚗 Car enthusiast since age five</li>
        <li>🤝 Passionate about mentorship and community-driven engineering</li>
      </ul>
    </div>
  </motion.div>
</section>



<section
  ref={projectsRef}
  className="h-screen flex items-center justify-center bg-gray-900 px-16"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl">

    {/* LEFT SIDE — DESCRIPTION */}
    <div className="text-gray-300 text-left space-y-4">
      <h1 className="text-5xl font-extrabold text-white mb-4">Project: Fire Detection Drone</h1>
      <p className="text-lg leading-relaxed">
        - Engineered and programmed an <span className="text-blue-400 font-semibold">Arduino R4 Uno</span> 
        – humidity sensor and smoke detector system designed to detect early signs of wildfires.  
        The data triggers a drone equipped with custom-built sensors and an extinguisher system 
        that my team and I developed to quickly contain and suppress fires in remote areas.
      </p>
    </div>

    {/* RIGHT SIDE — PRESENTATION */}
    <div className="w-full aspect-video border-4 border-blue-500 shadow-xl rounded-2xl overflow-hidden">
      <iframe
        src= "https://drive.google.com/file/d/1mwTMV9JV-C96NFVxRPEMWoy4oi7bdBWi/view?usp=sharing"
        frameBorder="0"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>

  </div>
</section>


<section
  ref={contactRef}
  className="h-screen flex flex-col items-center justify-center bg-gray-900 text-center px-8"
>
  <h2 className="text-5xl font-extrabold mb-6 text-white">Contact Me</h2>
  <p className="text-gray-400 max-w-lg mb-12 text-lg">
    Let’s connect! You can reach me via email or on LinkedIn and GitHub.
  </p>

  <div className="flex space-x-8">
    {/* LinkedIn */}
    <a
      href= "https://www.linkedin.com/in/Isaellarios"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
    >
      <div className="p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition">
        <Linkedin size={36} className="text-gray-200 group-hover:text-white transition" />
      </div>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/isa3l"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
    >
      <div className="p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-600 transition">
        <Github size={36} className="text-gray-200 group-hover:text-white transition" />
      </div>
    </a>

    {/* Email */}
    <a
      href="mailto:isaellarios936@gmail.com"
      className="group relative"
    >
      <div className="p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:bg-red-600 transition">
        <Mail size={36} className="text-gray-200 group-hover:text-white transition" />
      </div>
    </a>
  </div>
</section>

    </div>
  );
}
