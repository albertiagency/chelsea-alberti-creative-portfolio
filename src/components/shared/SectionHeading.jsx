import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-10 lg:mb-14 ${alignClass}`}
    >
      {label && (
        <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">
          {label}
        </p>
      )}
      {title && (
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
          {title}
        </h2>
      )}
      {description && (
        <p className={`text-base lg:text-lg font-body text-muted-foreground mt-4 leading-relaxed ${
          align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}