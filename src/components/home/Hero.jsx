import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Download } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&fit=crop&crop=top';

const tags = [
  'Creative Direction',
  'Brand Identity',
  'Production Coordination',
  'Shoot Logistics',
  'Visual Storytelling',
  'Product Development',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* Left — text panel */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-16 pt-28 pb-16 lg:py-0 w-full lg:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent mb-5"
        >
          Creative Production & Brand Marketing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[0.93]"
        >
          Chelsea
          <br />
          <span className="italic font-medium text-accent">Alberti</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35, transformOrigin: 'left' }}
          className="w-16 h-px bg-accent my-7"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-body text-muted-foreground max-w-sm leading-relaxed"
        >
          Some people have the vision.
          <br />
          Some people execute the plan.
          <span className="text-foreground font-semibold"> I do both.</span>
        </motion.p>

        {/* Skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-2 mt-7 max-w-sm"
        >
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-body font-medium border border-border rounded-full text-muted-foreground bg-secondary/60">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-3 mt-9"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium bg-primary text-primary-foreground rounded-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            View Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium border border-foreground/20 text-foreground rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-4 mt-8"
        >
          <a
            href="https://www.linkedin.com/in/chelseaalberti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-body font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://media.base44.com/files/public/6a3416a0b2d81e218daa4cbb/4a7d894c0_ALBERTI_RESUME_FL-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-body font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Right — photo panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="hidden lg:block lg:w-1/2 relative"
      >
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Chelsea Alberti"
            className="w-full h-full object-cover object-top"
          />
          {/* Fade on left edge to blend */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-foreground/5" />
        </div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-16 left-8 bg-background/95 backdrop-blur-sm border border-border rounded-sm px-5 py-4 shadow-lg"
        >
          <p className="text-2xl font-display font-bold text-foreground">7+</p>
          <p className="text-xs font-body text-muted-foreground mt-0.5">Years in Creative Production</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="absolute top-1/3 right-8 bg-accent text-accent-foreground rounded-sm px-5 py-4 shadow-lg"
        >
          <p className="text-2xl font-display font-bold">10+</p>
          <p className="text-xs font-body mt-0.5 opacity-90">Brands Launched</p>
        </motion.div>
      </motion.div>
    </section>
  );
}