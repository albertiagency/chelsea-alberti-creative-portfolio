import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">
            Let's build something that works.
          </h2>
          <p className="text-base lg:text-lg font-body opacity-70 mt-4 max-w-lg mx-auto">
            I'm open to new opportunities and always interested in a good conversation about creative work.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-sm font-body font-medium bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-all duration-300 group"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}