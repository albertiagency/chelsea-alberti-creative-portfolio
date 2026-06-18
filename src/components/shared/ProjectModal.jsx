import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function ProjectModal({ project, open, onClose }) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="p-6 lg:p-8">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-semibold">{project.title}</DialogTitle>
            {project.category && (
              <p className="text-xs font-body font-medium tracking-widest uppercase text-accent mt-1">
                {project.category}
              </p>
            )}
          </DialogHeader>
          <DialogDescription className="sr-only">Details about the {project.title} project</DialogDescription>
          <p className="text-base font-body text-muted-foreground mt-4 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
          {project.deliverables && (
            <div className="mt-6">
              <h4 className="text-sm font-body font-semibold tracking-wide uppercase text-foreground mb-2">Deliverables</h4>
              <p className="text-sm font-body text-muted-foreground">{project.deliverables}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}