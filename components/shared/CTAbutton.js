import Link from 'next/link';
import React from 'react';
/* Framer motion quick animation */
import { motion } from 'framer-motion';

export default function CTAbutton({ href, text }) {
  return (
    <Link href={href}>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeIn' }}
        className="ml-2 text-white text-sm text-primary font-semibold rounded-xl my-6 flex justify-between items-center p-2 md:py-3 md:px-4 bg-gradient-to-r from-purpleGR to-pinkGR hover:cursor-pointer hover:opacity-90 hover:shadow-lg"
      >
        <span className="text-sm mr-2">🎉</span>
        {text}
      </motion.a>
    </Link>
  );
}
