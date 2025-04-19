import React, { useEffect, useState } from 'react';
import { Shield, Terminal, Lock, Server, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    { name: 'Penetration Testing', icon: <Terminal className="h-5 w-5" /> },
    { name: 'Network Security', icon: <Server className="h-5 w-5" /> },
    { name: 'Ethical Hacking', icon: <Lock className="h-5 w-5" /> },
    { name: 'Security Analysis', icon: <Shield className="h-5 w-5" /> },
    { name: 'Vulnerability Assessment', icon: <Globe className="h-5 w-5" /> },
    { name: 'Security Research', icon: <Award className="h-5 w-5" /> },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-20"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cybersecurity Expert" 
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl">
                <Shield className="h-10 w-10 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
              About <span className="text-cyan-400">The Author</span>
            </h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              With over a decade of experience in the cybersecurity field, I've worked behind the scenes 
              monitoring technology developments and security landscapes, particularly in Indonesia. 
              My approach combines technical expertise with a commitment to honest, ethical practices in the digital world.
            </p>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              As an independent researcher and observer, I'm passionate about exposing misleading practices 
              in technology education while advocating for authentic learning experiences that build 
              real skills rather than empty promises.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 font-mono text-slate-200">Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-slate-800/70 rounded-lg border border-slate-700">
                    <div className="mr-3 text-cyan-400">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-slate-800 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-700 transition-all hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;