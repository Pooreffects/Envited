import Image from 'next/image';
import React from 'react';
import CTAbutton from './shared/CTAbutton';
/* Framer motion quick animation */
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-evenly py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}
        className="rounded filter drop-shadow-md"
      >
        <Image
          src="/assets/landing.svg"
          height={292}
          width={165}
          alt="landing event card preview"
        />
      </motion.div>
      <CTAbutton text="Create my event" href="/create" />
    </section>
  );
}
