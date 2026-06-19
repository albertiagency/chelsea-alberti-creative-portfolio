import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
        {/* Top row: brand left, nav right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold">Chelsea Alberti</p>
            <p className="text-sm opacity-60 mt-0.5 font-body">Creative Production & Brand Marketing</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-body">
            <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/work" className="opacity-70 hover:opacity-100 transition-opacity">Work</Link>
            <Link to="/about" className="opacity-70 hover:opacity-100 transition-opacity">About</Link>
            <Link to="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-body opacity-50">
          <span>© {new Date().getFullYear()} Chelsea Alberti. All rights reserved.</span>
          <span>chelseaalberti@gmail.com · 716-207-0518</span>
        </div>
      </div>
    </footer>
  );
}