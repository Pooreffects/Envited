import React from 'react';
import styles from '../styles/Header.module.css';
import { motion } from 'framer-motion';
export default function Header() {
  return (
    <header className="text-center flex flex-col items-center justify-evenly">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`${styles.headingWrapper} text-primary font-bold text-4xl md:text-6xl my-4`}
      >
        <h3>Imagine if</h3>
        <h3>Snapchat</h3>
        <h3>had events.</h3>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeIn' }}
        className="text-primary font-regular text-xl my-2 "
      >
        Easily host and share events with your
        <br /> friends across any social media.
      </motion.p>
    </header>
  );
}
