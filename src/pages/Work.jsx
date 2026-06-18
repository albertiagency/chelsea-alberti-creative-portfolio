import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CategorySection from '@/components/work/CategorySection';
import ProjectModal from '@/components/shared/ProjectModal';
import { projectData } from '@/lib/projectData';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    {
      label: 'Brand & Marketing',
      title: 'Brand & Marketing',
      description: 'Brand identity, positioning, print, and marketing materials for small businesses across multiple industries.',
      projects: projectData.brandMarketing,
    },
    {
      label: 'Websites & Digital',
      title: 'Websites & Digital',
      description: 'Website and digital platform design for businesses and original concepts — structure, visuals, and brand messaging.',
      projects: projectData.websitesDigital,
    },
    {
      label: 'Product Development',
      title: 'Product Development',
      description: 'Consumer products from concept through sourcing, sampling, custom packaging, and delivery.',
      projects: projectData.productDevelopment,
    },
    {
      label: 'Creative Production',
      title: 'Creative Production',
      description: 'Visual campaigns and commercial shoots for product, fashion, and e-commerce brands — from shoot logistics through creative direction.',
      projects: projectData.creativeProduction,
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-6"
        >
          <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Portfolio
          </p>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            Selected Work
          </h1>
          <p className="text-lg font-body text-muted-foreground mt-6 leading-relaxed">
            From brand identities to product launches to digital platforms, I take ideas from concept to finished — whatever form they take. A selection of professional and independent projects below.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Category sections */}
        {categories.map((cat) => (
          <CategorySection
            key={cat.label}
            {...cat}
            onProjectClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}