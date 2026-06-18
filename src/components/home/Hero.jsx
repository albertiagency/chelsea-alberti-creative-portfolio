import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent mb-6"
          >
            Creative Production & Brand Marketing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.95]"
          >
            Chelsea
            <br />
            Alberti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl font-body text-muted-foreground mt-8 max-w-xl leading-relaxed"
          >
            Some people have the vision. Some people execute the plan.
            <span className="text-foreground font-medium"> I do both.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
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
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-border"
        />
      </div>
    </section>
  );
}