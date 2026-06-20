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
      description: 'Brand identity, websites, print, and marketing materials for small business clients — from full brand builds to ongoing marketing support.',
      projects: projectData.brandMarketing,
    },
    {
      label: 'Apps & Web',
      title: 'Apps & Web',
      description: 'Original app and web concepts I built independently — from idea and brand identity through UX design and build.',
      projects: projectData.appsDigital,
    },
    {
      label: 'Creative Production',
      title: 'Visual Campaigns & Creative Production',
      description: 'Commercial shoots and visual campaigns for e-commerce, fashion, and lifestyle brands — from shoot logistics and crew coordination through creative direction and final delivery.',
      projects: projectData.creativeProduction,
    },
    {
      label: 'Product Development',
      title: 'Product Development',
      description: 'Consumer products developed from concept through manufacturer sourcing, sampling, custom packaging, and brand identity.',
      projects: projectData.productDevelopment,
    },
    {
      label: 'Social Content',
      title: 'Social Content',
      description: 'Social content across formats — UGC and talking head, event recaps, and brand-focused campaigns.',
      projects: projectData.socialContent,
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
            I work across brand identity and marketing, product development, creative production and styling, digital concepts, and social content. Whether it's building a brand from scratch, developing a consumer product, directing and styling a shoot, or shaping a company's visual voice, I take ideas from concept through finished execution.
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