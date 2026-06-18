import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/shared/ProjectCard';
import ProjectModal from '@/components/shared/ProjectModal';
import { featuredProjects } from '@/lib/projectData';

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 lg:mb-14">
          <SectionHeading
            label="Portfolio"
            title="Selected Work"
          />
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-accent hover:text-foreground transition-colors group flex-shrink-0"
          >
            View all work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}