import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2010',
    phase: 'The Foundation',
    label: 'Interior Design Degree',
    description: 'My creative instincts were shaped in an Interior Design program — learning spatial composition, color theory, and how the details of a visual environment shape the way people feel in it. That foundation never left me.',
  },
  {
    year: '2018',
    phase: 'Behind the Lens',
    label: 'Photography & Content Creation',
    description: 'I moved into photography, styling, and content creation, where storytelling through imagery became my language. I was trusted for creative direction early — people liked my visual ideas, and I naturally found myself leading shoots and coordinating teams. That pull toward directing the bigger picture, not just shooting it, is what pushed me forward.',
  },
  {
    year: '2020',
    phase: 'The Pivot',
    label: 'Creative Operations & Production',
    description: 'My eye for visuals, combined with a knack for keeping complex projects organized, led me into production, operations, and marketing roles. I became the person who could hold both the creative vision and the execution plan at once — a combination not every team has.',
  },
  {
    year: '2024',
    phase: 'The Builder',
    label: 'Brand Development, Products & Apps',
    description: "Today my focus is brand and marketing for small businesses — taking each client from story and strategy through finished, launched work: identity, websites, print, and the marketing that gets them seen. That comes out of a builder's instinct I've always had — developing product concepts, prototyping apps, and turning rough ideas into something real. I'm focused on bringing that full range, the strategy and the execution, into a team where I can grow into brand and marketing leadership.",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Desktop grid layout with line + dots locked in center column */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-baseline">
        {/* Vertical line running down the center */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        {timeline.map((item, i) => (
          <React.Fragment key={item.phase}>
            {/* Left side (even items) */}
            {i % 2 === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-right pr-4"
              >
                <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-accent">{item.phase} {item.year} →</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">{item.label}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ) : (
              <div />
            )}

            {/* Center column: dot only */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="w-3 h-3 rounded-full bg-accent relative z-10"
            />

            {/* Right side (odd items) */}
            {i % 2 === 1 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-left pl-4"
              >
                <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-accent">{item.phase} {item.year} →</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">{item.label}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ) : (
              <div />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile layout: single column with line on left */}
      <div className="lg:hidden relative pl-8">
        <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-0.5 w-3 h-3 rounded-full bg-accent" />
              <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-accent">{item.phase} {item.year} →</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">{item.label}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}