import React from 'react';
import { Shield, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="ml-2 text-lg font-bold tracking-wider">CYBER<span className="text-cyan-400">INSIGHT</span></span>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/odaysec" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Github className="h-5 w-5 text-slate-300" />
            </a>
            <a href="https://instagram.com/youryreborn" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Instagram className="h-5 w-5 text-slate-300" />
            </a>
            <a href="https://www.linkedin.com/in/securewithandri/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Linkedin className="h-5 w-5 text-slate-300" />
            </a>
            <a href="mailto:github@zerodaysec.org" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Mail className="h-5 w-5 text-slate-300" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CyberInsight. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;