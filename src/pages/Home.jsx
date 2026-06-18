import React from 'react';
import Hero from '@/components/home/Hero';
import IntroBand from '@/components/home/IntroBand';
import FeaturedWork from '@/components/home/FeaturedWork';
import ClosingCTA from '@/components/home/ClosingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <IntroBand />
      <FeaturedWork />
      <ClosingCTA />
    </>
  );
}