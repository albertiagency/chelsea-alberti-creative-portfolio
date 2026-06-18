import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import TestimonialCard from '@/components/about/TestimonialCard';

const ABOUT_PORTRAIT = 'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/b8a2065bf_20250914_Chelsea_Studio_10.jpg';

const journey = [
  {
    phase: 'The Foundation',
    label: 'Interior Design Degree',
    description: 'My creative instincts were shaped in an Interior Design program — learning spatial composition, color theory, and how the details of a visual environment shape the way people feel in it. That foundation never left me.',
  },
  {
    phase: 'Behind the Lens',
    label: 'Photography & Content Creation',
    description: 'I moved into photography and content creation, where storytelling through imagery became my language. I was trusted for creative direction early — people liked my visual ideas, and I found myself naturally leading shoots and coordinating teams.',
  },
  {
    phase: 'The Pivot',
    label: 'Creative Operations & Production',
    description: 'My eye for visuals, combined with a knack for keeping complex projects organized, led me into production and operations roles. I became the person who could hold both the creative vision and the execution plan in my head at the same time — a combination not every team has.',
  },
  {
    phase: 'The Builder',
    label: 'Brand Development, Products & Apps',
    description: 'I started building things independently — consumer products from concept to shelf, apps from idea to launch, and brand identities for small business clients. My current freelance work is brand and marketing for growing businesses, and I\'m actively looking to bring that range inside a team I can grow with.',
  },
];

const valueProps = [
  {
    title: 'Creative Project Leadership',
    items: [
      'Coordinating multi-layered creative projects from concept through final delivery.',
      'Managing timelines, shoot logistics, and cross-functional team workflows.',
      'Aligning creative teams to keep projects moving and on-schedule.',
    ],
  },
  {
    title: 'Brand & Concept Development',
    items: [
      'Developing brand concepts, positioning, and visual direction.',
      'Translating early ideas into cohesive campaigns, products, and brand assets.',
      'Informing brand strategy through market research and competitive insight.',
    ],
  },
  {
    title: 'Creative Production & Execution',
    items: [
      'Coordinating production logistics, shoot preparation, and asset organization.',
      'Managing photographers, talent, stylists, and freelance crews during production.',
      'Ensuring creative ideas translate clearly into final deliverables.',
    ],
  },
  {
    title: 'Visual Content & Storytelling',
    items: [
      'Shaping marketing visuals across digital and social platforms.',
      'Visual storytelling through photography, campaigns, and brand imagery.',
      'Supporting creative direction across shoots and content production.',
    ],
  },
];

const thriveItems = [
  {
    title: 'Aesthetic-first brands',
    description: 'Companies that prioritize cohesive visual identity and elevated storytelling — especially in fashion, beauty, and wellness.',
  },
  {
    title: 'Creative production environments',
    description: 'Fast-paced studios or in-house teams where creative alignment and execution deliver premium visual content.',
  },
  {
    title: 'Social-forward & influencer-led brands',
    description: 'Teams that operate at the intersection of brand and culture — not looking for a creator or a manager, but someone who understands the strategic side of content, influence, and community.',
  },
  {
    title: 'Growing, ideas-driven teams',
    description: 'Forward-thinking brands focused on new concepts and launches, where creative intuition and hands-on leadership move ideas into reality.',
  },
];

const testimonials = [
  {
    quote: "Chelsea is a creative problem solver who always thinks outside the box, finding innovative ways to improve efficiency and streamline production. She brings a sharp eye for detail, a resourceful approach to every project, and a natural ability to keep things running smoothly. On set, she knows how to strike the perfect balance — getting the job done seamlessly without being overbearing, ensuring a productive yet comfortable environment for everyone involved.",
    name: 'Lisa Javornick',
    title: 'Owner/Director, Javo Studios',
  },
  {
    quote: "I can't say enough good things about Chelsea. She is a wonderful person to work with and a joy to be around. She is extremely organized, easy to communicate with, understands your point of view, and has always been adaptable and works well under pressure. I look forward to the day we get to collaborate and work together again.",
    name: 'Andrea Brugnoli',
    title: 'Production Director, Marketing — Gabe\'s',
  },
  {
    quote: "Working with Chelsea is an absolute dream. She is an extremely efficient person to work with, figuring out solutions to any problems that might come up during a shoot. She thinks quick on her feet and you can tell she is dedicated to any project she is working on. I can't recommend her enough.",
    name: 'Maia Leppo',
    title: 'Founder, Safran Everyday',
  },
];

const roles = [
  'Creative Operations & Production',
  'Creative Project Management',
  'Brand Marketing & Campaign Production',
  'Visual Strategy & Content Production',
  'Brand & Concept Development',
  'Product Development & Launch',
  'Brand Activations & Experiential Marketing',
  'Studio Coordination & Management',
  'Digital Asset Management',
  'Influencer Marketing & Social Strategy',
];

export default function About() {
  return (
    <div className="pt-24 lg:pt-32 pb-0">

      {/* --- Intro --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden sticky top-28">
              <img src={ABOUT_PORTRAIT} alt="Chelsea Alberti" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent mb-4">About</p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">Hi, I'm Chelsea</h1>

            <div className="mt-8 space-y-5 text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
              <p>
                I'm a creative professional whose work sits at the intersection of visual thinking and operational execution — the person who can hold the creative vision and the production plan in their head at the same time, and keep both moving.
              </p>
              <p>
                My background spans commercial production, studio operations, brand development, product development, and digital design. Right now, my active client work is brand identity and marketing for small businesses — but I'm looking to bring that range inside a team, where I can do more than one thing at once and grow alongside people I respect.
              </p>
              <p>
                I'm a natural collaborator. I care about how things look, how they run, and how people feel about working together. That combination is what people tend to remember most about working with me.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-8 text-sm font-body font-medium text-foreground">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Based in Buffalo — fully open to relocation, remote, and travel-heavy roles.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- How I Got Here (Evolution) --- */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">The Journey</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">How I Got Here</h2>
            <p className="text-base font-body text-muted-foreground mt-3 max-w-xl leading-relaxed">
              My career isn't linear — it's layered. Each phase built on the last and shaped the hybrid skill set I have today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line on desktop */}
            <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10 lg:space-y-0">
              {journey.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-10 ${i % 2 === 0 ? '' : 'lg:[direction:rtl]'}`}
                >
                  <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12 lg:[direction:ltr]'}`}>
                    <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-accent">{step.phase}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">{step.label}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- How I Add Value --- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">Capabilities</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">How I Add Value</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp, i) => (
              <motion.div
                key={vp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/40 border border-border rounded-sm p-6"
              >
                <h3 className="font-display text-base font-semibold text-foreground mb-4 pb-3 border-b border-border">{vp.title}</h3>
                <ul className="space-y-2">
                  {vp.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-body text-muted-foreground leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Where I Thrive --- */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">Ideal Environments</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">Where I Thrive</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {thriveItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-5 border-l-2 border-accent/40"
              >
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-10 border-t border-border"
          >
            <p className="text-sm font-body font-semibold text-foreground mb-4">Open to roles including:</p>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <span key={role} className="px-4 py-2 text-xs font-body font-medium text-foreground bg-background border border-border rounded-sm">
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">Testimonials</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">What People Say</h2>
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