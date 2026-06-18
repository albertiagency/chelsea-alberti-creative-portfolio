import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Download } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80&fit=crop&crop=top';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Chelsea Alberti"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient: dark at bottom for text, lighter at top for nav */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      {/* Text content — pinned to bottom */}
      <div className="relative z-10 px-6 lg:px-16 pb-20 pt-32 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-white/60 mb-5"
        >
          Creative Production & Brand Marketing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.93]"
        >
          Chelsea
          <br />
          <span className="italic font-medium">Alberti</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-16 h-px bg-white/40 my-7 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-body text-white/70 max-w-sm leading-relaxed"
        >
          Some people have the vision.
          <br />
          Some people execute the plan.
          <span className="text-white font-semibold"> I do both.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-3 mt-9"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium bg-white text-foreground rounded-sm hover:bg-white/90 transition-all duration-300 group"
          >
            View Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium border border-white/30 text-white rounded-sm hover:border-white/70 transition-all duration-300"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-4 mt-8"
        >
          <a
            href="https://www.linkedin.com/in/chelseaalberti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-body font-medium text-white/50 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <span className="w-px h-4 bg-white/20" />
          <a
            href="https://media.base44.com/files/public/6a3416a0b2d81e218daa4cbb/4a7d894c0_ALBERTI_RESUME_FL-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-body font-medium text-white/50 hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}