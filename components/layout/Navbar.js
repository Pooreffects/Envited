import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="p-6">
      <Link href="/">
        <a className="rounded-xl text-lg text-white font-semibold bg-heading p-2 hover:bg-opacity-90 hover:cursor-pointer">
          Home
        </a>
      </Link>
    </div>
  );
}
