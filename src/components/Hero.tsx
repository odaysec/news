import React, { useState, useEffect } from 'react';
import { ShieldAlert, Lock, Code, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <div className="mr-3 bg-cyan-400/20 p-2 rounded-lg">
                <ShieldAlert className="h-6 w-6 text-cyan-400" />
              </div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400">Cybersecurity Expert</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono tracking-tight leading-tight">
              Insights From <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Behind The Screen
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
              Sharing authentic observations, experiences, and critical perspectives on technology, 
              cybersecurity, and digital education in Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('quotes')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg 
                shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-1">
                Explore Quotes
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-6 py-3 bg-transparent border border-slate-600 text-slate-300 font-medium rounded-lg 
                hover:bg-slate-800 transition-all hover:-translate-y-1">
                About Me
              </button>
            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800 p-6 md:p-10 rounded-2xl border border-slate-700 shadow-xl">
                <div className="flex items-center mb-6">
                  <Lock className="h-5 w-5 text-cyan-400 mr-2" />
                  <Code className="h-5 w-5 text-blue-500" />
                  <div className="h-3 w-3 rounded-full bg-cyan-400 ml-auto"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">Featured Perspective</h3>
                <p className="text-slate-400 leading-relaxed line-clamp-6">
                  "Saat ini, kita sedang menghadapi tantangan besar dalam ranah teknologi—bukan hanya dari sisi perkembangan inovasi, 
                  tapi lebih kepada penyalahgunaan teknologi itu sendiri. Salah satu hal yang cukup meresahkan bagi saya adalah semakin 
                  maraknya praktik penipuan yang mengatasnamakan edukasi teknologi, khususnya dalam bentuk kursus atau kelas belajar online..."
                </p>
                <button onClick={() => document.getElementById('quotes')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="mt-6 text-cyan-400 font-medium flex items-center hover:text-cyan-300 transition-colors">
                  Read Full Quote
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;