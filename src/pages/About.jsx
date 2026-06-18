import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import TestimonialCard from '@/components/about/TestimonialCard';

const ABOUT_PORTRAIT = 'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/ca9c082c4_generated_ed15bfac.png';

const thriveItems = [
  {
    title: 'Aesthetic-first brands',
    description: 'Companies that prioritize cohesive visual identity and elevated storytelling, especially in fashion, beauty, and wellness.',
  },
  {
    title: 'Creative production environments',
    description: 'Fast-paced studios or in-house teams where creative alignment and execution deliver premium visual content.',
  },
  {
    title: 'Growing, ideas-driven teams',
    description: 'Forward-thinking brands focused on new concepts and launches, where creative intuition and hands-on leadership move ideas into reality.',
  },
];

const testimonials = [
  {
    quote: "Chelsea is a creative problem solver who always thinks outside the box, finding innovative ways to improve efficiency and streamline production. She brings a sharp eye for detail and a natural ability to keep things running smoothly.",
    name: 'Lisa Javornick',
    title: 'Owner/Director, Javo Studios',
  },
  {
    quote: "I can't say enough good things about Chelsea. She's extremely organized, easy to communicate with, adaptable, and works well under pressure. A joy to work with.",
    name: 'Andrea Brugnoli',
    title: 'Production Director, Marketing, Gabe\'s',
  },
  {
    quote: "Working with Chelsea is an absolute dream. She's extremely efficient, thinks quick on her feet, and you can tell she's dedicated to any project she's working on. I can't recommend her enough.",
    name: 'Maia Leppo',
    title: 'Founder, Safran Everyday',
  },
];

const roles = [
  'Creative Operations',
  'Creative Project Management',
  'Brand Marketing',
  'Visual Strategy & Content Production',
  'Brand & Concept Development',
  'Product Development & Launch',
  'Brand Activations',
];

export default function About() {
  return (
    <div className="pt-24 lg:pt-32 pb-0">
      {/* Intro section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden sticky top-28">
              <img
                src={ABOUT_PORTRAIT}
                alt="Chelsea Alberti"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent mb-4">
              About
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Hi, I'm Chelsea
            </h1>

            <div className="mt-8 space-y-5 text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
              <p>
                I'm a creative operations and production professional with a background in commercial production, studio operations, and brand development. I specialize in translating a raw idea into a finished campaign — bringing the coordination, creative instinct, and hands-on leadership that most teams don't find in one person.
              </p>
              <p>
                I'm a collaborator people rely on for my visual eye and my intuitive approach to execution. Whether I'm working between client marketing teams and freelance crews or building an original brand concept from the ground up, my focus stays on making sure the final result reflects the vision behind it.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-8 text-sm font-body font-medium text-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>
                Based in Buffalo — fully open to relocation, remote, and travel-heavy roles.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Where I Thrive */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Ideal Environments
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-12">
              Where I Thrive
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {thriveItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-5 border-l-2 border-accent/30"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-10 border-t border-border"
          >
            <p className="text-sm font-body font-semibold text-foreground mb-4">Open to:</p>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 text-xs font-body font-medium text-foreground bg-background border border-border rounded-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
              What People Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}