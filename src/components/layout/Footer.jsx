import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="text-sm font-body opacity-70">
            <p>chelseaalberti@gmail.com</p>
            <p className="mt-1">716-207-0518</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-xs font-body opacity-50">
          © {new Date().getFullYear()} Chelsea Alberti. All rights reserved.
        </div>
      </div>
    </footer>
  );
}