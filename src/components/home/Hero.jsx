import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Download } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/b74fde7b3_20250914_Chelsea_Studio_8.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left — text panel */}
      <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 pt-32 pb-16 lg:py-0 lg:w-1/2 bg-background">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6"
        >
          Creative Production & Brand Marketing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.93]"
        >
          Chelsea
          <br />
          <span className="italic font-medium text-accent">Alberti</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-16 h-px bg-border my-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-body text-muted-foreground max-w-xs leading-relaxed"
        >
          Some people have the vision.
          <br />
          Some people execute the plan.
          <span className="text-foreground font-semibold"> I do both.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-3 mt-10"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="lg:w-1/2 h-72 lg:h-auto relative overflow-hidden"
      >
        <img
          src={HERO_IMAGE}
          alt="Chelsea Alberti"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    </section>
  );
}