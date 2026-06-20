import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    phase: 'The Foundation',
    label: 'Interior Design Degree',
    description: 'My creative instincts were shaped in an Interior Design program — learning spatial composition, color theory, and how the details of a visual environment shape the way people feel in it. That foundation never left me.',
  },
  {
    phase: 'Behind the Lens',
    label: 'Photography & Content Creation',
    description: 'I moved into photography, styling, and content creation, where storytelling through imagery became my language. I was trusted for creative direction early — people liked my visual ideas, and I naturally found myself leading shoots and coordinating teams. That pull toward directing the bigger picture, not just shooting it, is what pushed me forward.',
  },
  {
    phase: 'The Pivot',
    label: 'Creative Operations & Production',
    description: 'My eye for visuals, combined with a knack for keeping complex projects organized, led me into production, operations, and marketing roles. I became the person who could hold both the creative vision and the execution plan at once — a combination not every team has.',
  },
  {
    phase: 'The Builder',
    label: 'Brand Development, Products & Apps',
    description: "Today my focus is brand and marketing for small businesses — taking each client from story and strategy through finished, launched work: identity, websites, print, and the marketing that gets them seen. That comes out of a builder's instinct I've always had — developing product concepts, prototyping apps, and turning rough ideas into something real. I'm focused on bringing that full range, the strategy and the execution, into a team where I can grow into brand and marketing leadership.",
  },
];

export default function Timeline() {
  const cardRefs = useRef([]);
  const [dotPositions, setDotPositions] = useState([]);

  useEffect(() => {
    const calculatePositions = () => {
      const positions = cardRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const parentRect = ref.parentElement.parentElement.getBoundingClientRect();
          return rect.top - parentRect.top + 12; // Center of 24px dot
        }
        return 0;
      });
      setDotPositions(positions);
    };

    // Calculate after a short delay to ensure layout is complete
    const timer = setTimeout(calculatePositions, 100);
    window.addEventListener('resize', calculatePositions);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePositions);
    };
  }, []);

  return (
    <div className="relative">
      {/* Vertical center line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

      {/* Numbered dots on the line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-full pointer-events-none">
        {dotPositions.map((top, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-3 h-3 rounded-full bg-foreground transition-all"
            style={{ top: `${top}px`, left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>

      {/* Cards container */}
      <div className="space-y-12">
        {timeline.map((item, i) => (
          <motion.div
            key={item.phase}
            ref={(el) => (cardRefs.current[i] = el)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${
              i % 2 === 0
                ? 'mr-auto w-1/2 pr-16 text-right'
                : 'ml-auto w-1/2 pl-16 text-left'
            }`}
          >
            {/* Content */}
            <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-accent">{item.phase}</span>
            <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">{item.label}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}