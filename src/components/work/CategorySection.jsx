import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/shared/ProjectCard';

export default function CategorySection({ label, title, description, projects, onProjectClick }) {
  return (
    <div className="py-10 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="w-8 h-px bg-accent" />
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent">
            {label}
          </p>
        </div>
        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-base font-body text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          {description}
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  );
}