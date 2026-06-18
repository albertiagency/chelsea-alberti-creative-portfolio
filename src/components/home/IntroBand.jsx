import React from 'react';
import { motion } from 'framer-motion';

const PORTRAIT_URL = 'https://media.base44.com/images/public/6a3416a0b2d81e218daa4cbb/43a84d31d_generated_3d710e5a.png';

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
                I work in the space between the idea and the finished product — the strategy, the logistics, and the moving parts that make brands, campaigns, and launches actually happen.
              </p>
              <p>
                With a background across commercial production, brand development, and creative operations, I bring both a creative eye and the operational follow-through to take work from concept to done.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                'Brand Strategy & Identity',
                'Creative Production',
                'Product Development',
                'Digital & Web Design',
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
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={PORTRAIT_URL}
                alt="Chelsea Alberti"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent rounded-sm hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}