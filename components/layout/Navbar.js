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
          className="mr-4 lg:mr-0 border-[1px] rounded px-4 py-1 border-pinkGR bg-transparent text-btnBG font-semibold text-md hover:bg-pinkGR hover:text-white hover:border-none"
        >
          Home
        </motion.a>
      </Link>
    </div>
  );
}
