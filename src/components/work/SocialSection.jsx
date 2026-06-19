import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/shared/ProjectCard';
import { projectData } from '@/lib/projectData';

const TABS = [
  { key: 'ugc', label: 'UGC & Talking Head' },
  { key: 'eventRecap', label: 'Event Recap' },
  { key: 'brandContent', label: 'Brand Content' },
];

export default function SocialSection({ onProjectClick }) {
  const [activeTab, setActiveTab] = useState('ugc');
  const projects = projectData.socialContent[activeTab] || [];

  return (
    <div className="py-16 lg:py-20">
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
            Social Content
          </p>
        </div>
        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground">
          Social Content
        </h3>
        <p className="text-base font-body text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          Social content across formats — UGC and talking head, event recaps, and brand-focused campaigns.
        </p>

        {/* Sub-tabs */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-1.5 text-sm font-body font-medium rounded-full border transition-colors ${
                activeTab === tab.key
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {projects.length > 0 ? (
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
      ) : (
        <p className="text-sm font-body text-muted-foreground italic">Coming soon.</p>
      )}
    </div>
  );
}