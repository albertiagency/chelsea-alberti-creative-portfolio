import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, name, title, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-card border border-border rounded-sm p-6 lg:p-8"
    >
      <svg className="w-8 h-8 text-accent/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-base font-body text-foreground leading-relaxed italic">
        "{quote}"
      </p>
      <div className="mt-5 pt-5 border-t border-border">
        <p className="text-sm font-body font-semibold text-foreground">{name}</p>
        <p className="text-xs font-body text-muted-foreground mt-0.5">{title}</p>
      </div>
    </motion.div>
  );
}