import React from 'react';
import { motion } from 'framer-motion';

const COLLAGE_IMAGES = [
  // Column 1 (top to bottom)
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/6c5924ffb_Screenshot2026-06-19at123944PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/3e60113d8_Screenshot2026-06-18at112028PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/f792448f1_Screenshot2026-06-18at112554PM.png',
  // Column 2 (top to bottom)
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/f8b141180_Screenshot2026-06-19at125143PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/6f224be70_Screenshot2026-06-18at112513PM.png',
  'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/82638b7d4_Screenshot2026-06-18at112636PM.png',
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
              Where the idea meets the finished product.
            </h2>
            <div className="space-y-4 text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
              <p>
                I work in the space between the idea and the finished product — whether that's a brand, a photoshoot, a website, a product, or a social campaign. I'm the person who can hold the creative vision and the execution plan at the same time and keep both moving.
              </p>
              <p>
                My background spans commercial production, studio operations, brand development, and digital design. My path started with an Interior Design degree, evolved through photography and creative direction, and expanded into creative operations, product development, and independent brand work for small business clients.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                'Brand Strategy & Identity',
                'Creative Production',
                'Product Development',
                'Apps & Digital Design',
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
            className="grid grid-cols-2 gap-2"
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