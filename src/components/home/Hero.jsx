import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/ac45fd04d_20250914_Chelsea_Studio_11.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Chelsea Alberti"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      </div>

      {/* Text content — top left */}
      <div className="relative z-10 w-full px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
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
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[0.93]"
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
          <br />
          <span className="text-white font-semibold">I do both.</span>
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
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium border border-white/40 text-white rounded-sm hover:border-white/80 transition-all duration-300"
          >
            Get in touch
          </Link>
        </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}