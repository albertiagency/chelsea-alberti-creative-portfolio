import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onClick?.(project)}
    >
      <div className="overflow-hidden rounded-sm bg-muted aspect-video">
        <img
          src={(project.images && project.images[0]) || project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm font-body text-muted-foreground mt-1 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}