import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

function isVideoUrl(url) {
  return /\.(mp4|webm|mov|avi|mkv)$/i.test(url);
}

function useImageOrientation(src) {
  const [isPortrait, setIsPortrait] = useState(false);
  useEffect(() => {
    if (!src || isVideoUrl(src)) return;
    const img = new Image();
    img.onload = () => setIsPortrait(img.naturalHeight > img.naturalWidth);
    img.src = src;
  }, [src]);
  return isPortrait;
}

export default function ProjectModal({ project, open, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const images = project ? (project.images || [project.image].filter(Boolean)) : [];
  const isPortrait = useImageOrientation(images[imgIndex]);

  if (!project) return null;

  const hasMultiple = images.length > 1;
  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIndex((i) => (i + 1) % images.length);

  const handleOpenChange = (val) => {
    if (!val) { setImgIndex(0); onClose(); }
  };

  // Aspect ratios by category
  const aspectClass = project.category === 'Apps & Web' ? 'aspect-video' : project.category === 'Social Content' ? 'aspect-[2/3]' : 'aspect-[3/2]';
  const bgClass = 'bg-white';
  const fitClass = 'object-contain';

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-3xl w-[95vw] p-0 overflow-y-auto bg-card max-h-[92vh] rounded-sm flex flex-col">
        {/* Image/Video gallery */}
        <div className={`relative overflow-hidden w-full flex-shrink-0 ${aspectClass} ${bgClass} ${project.category === 'Social Content' ? 'max-h-[50vh]' : ''}`}>
          {isVideoUrl(images[imgIndex]) ? (
            <>
              <video
                key={imgIndex}
                src={images[imgIndex]}
                controls
                muted={isMuted}
                className={`w-full h-full transition-opacity duration-300 ${fitClass}`}
              />
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </>
          ) : (
            <img
              key={imgIndex}
              src={images[imgIndex]}
              alt={project.title}
              className={`w-full h-full transition-opacity duration-300 ${fitClass}`}
            />
          )}
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
          <div className="flex gap-2 px-6 pt-4 flex-wrap">
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

        <div className="p-4 lg:p-8 pt-3">
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
          {project.studioCredit && (
            <div className="mt-4 pt-4 border-t border-border">
              <img src={project.studioCredit} alt="Javo Studios" className="h-6 object-contain" />
            </div>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-body font-medium text-accent hover:underline">
              {project.website.replace(/^https?:\/\/(www\.)?/, '')} →
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}