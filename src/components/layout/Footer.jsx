import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-display text-xl font-semibold">Chelsea Alberti</p>
            <p className="text-sm opacity-70 mt-1 font-body">Creative Production & Brand Marketing</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm font-body">
            <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/work" className="opacity-70 hover:opacity-100 transition-opacity">Work</Link>
            <Link to="/about" className="opacity-70 hover:opacity-100 transition-opacity">About</Link>
            <Link to="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
          <div className="text-sm font-body space-y-3">
            <p className="opacity-70">chelseaalberti@gmail.com</p>
            <p className="opacity-70">716-207-0518</p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.linkedin.com/in/chelseaalberti/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://media.base44.com/files/public/6a3416a0b2d81e218daa4cbb/4a7d894c0_ALBERTI_RESUME_FL-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-xs font-body opacity-50">
          © {new Date().getFullYear()} Chelsea Alberti. All rights reserved.
        </div>
      </div>
    </footer>
  );
}