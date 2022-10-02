import Link from 'next/link';
import { motion } from 'framer-motion';
export default function Navbar() {
  return (
    <div className="p-6">
      <Link href="/">
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="rounded-xl text-lg text-white font-semibold bg-heading p-2 hover:bg-opacity-90 hover:cursor-pointer"
        >
          Home
        </motion.a>
      </Link>
    </div>
  );
}
