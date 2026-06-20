import React from 'react';
import { motion } from 'framer-motion';

const COLLAGE_IMAGES = [
  // Column 1 (top to bottom)
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/4153d63f4_Screenshot2026-06-19at123944PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/3318e4d1d_Screenshot2026-06-20at12423PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/e12b30730_meeting.png',
  // Column 2 (top to bottom)
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/d7649deef_Screenshot2026-06-20at13354PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/d73cb6fc0_Screenshot2026-06-18at112513PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/8b0bd8365_Screenshot2026-06-20at13451PM.png',
];

export default function IntroBand() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              What I Do
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Where the idea meets finished product
            </h2>
            <div className="space-y-4 text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
              <p>
                I work across the full creative and marketing spectrum — brand strategy and development, campaign and event production, styling, product conceptualization, and social content. I'm the person who can hold the creative vision and the execution plan at once, leading the team and the idea from concept to finished.
              </p>
              <p>
                My background blends a creative's eye with an operator's discipline. It started with an Interior Design degree grounded in spatial composition and color, evolved through photography, styling, and creative direction, and grew into the brand and marketing work I do today. I shape the vision and lead the work that delivers it.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                'Brand & Marketing',
                'Social & Content',
                'Product Concept & Development',
                'Creative Production & Styling',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm font-body text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-2 max-h-[520px] lg:max-h-none overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {COLLAGE_IMAGES.slice(0, 3).map((src, i) => (
                <div key={i} className="aspect-[2/3] rounded-sm overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-6">
              {COLLAGE_IMAGES.slice(3).map((src, i) => (
                <div key={i} className="aspect-[2/3] rounded-sm overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}