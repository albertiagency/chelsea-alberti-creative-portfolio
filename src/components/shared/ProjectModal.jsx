import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ project, open, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [project.image].filter(Boolean);
  const hasMultiple = images.length > 1;

  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIndex((i) => (i + 1) % images.length);

  // Reset index when project changes
  const handleOpenChange = (val) => {
    if (!val) { setImgIndex(0); onClose(); }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
        {/* Image gallery */}
        <div className="relative bg-muted aspect-square overflow-hidden">
          <img
            key={imgIndex}
            src={images[imgIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          {hasMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {hasMultiple && (
          <div className="flex gap-2 px-6 pt-4">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`w-16 h-12 rounded-sm overflow-hidden flex-shrink-0 border-2 transition-colors ${
                  i === imgIndex ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 lg:p-8 pt-4">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-semibold">{project.title}</DialogTitle>
            {project.category && (
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-accent mt-1">
                {project.category}
              </p>
            )}
          </DialogHeader>
          <DialogDescription className="sr-only">Details about the {project.title} project</DialogDescription>
          <p className="text-base font-body text-muted-foreground mt-4 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
          {project.deliverables && (
            <p className="text-sm font-body text-muted-foreground mt-4 pt-4 border-t border-border">{project.deliverables}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}