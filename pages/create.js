import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '../components/create/Modal';
/* Icons import */
import { CgCalendarDates } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
/* Framer motion quick animation */
import { motion } from 'framer-motion';
import Link from 'next/link';

/* Notes:
  - I could extract the date data into components 
  - Data components generated by the user form submission
*/

export default function Create() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <main className="mx-auto container p-6">
      <div className="w-full p-0 m-0 flex flex-col lg:flex-row items-center lg:justify-betwneen justify-evenly">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-center"
        >
          <Image
            src="/assets/bd-cake.png"
            alt="Birthday Cake"
            height={375}
            width={375}
          />
        </motion.div>
        <main className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-start justify-start mx-4 my-2">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeIn' }}
              className="text-primary text-heading font-bold text-2xl"
            >
              Birthday Bash
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}
              className="text-headingLight font-normal text-md m-1"
            >
              Hosted <span className="font-bold">Elysia</span>
            </motion.p>
          </div>
          <section className="w-full mx-4">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}
              className="my-4 flex items-center justify-evenly lg:justify-between lg:w-full  lg:px-4"
            >
              <div className="rounded-md p-2 bg-white shadow-sm w-10 flex items-center justify-center lg:mr-2">
                <CgCalendarDates className="text-purpleGR text-2xl" />
              </div>
              {/* Text */}
              <div className="flex flex-col items-start justify-start lg:justify-between">
                <h1 className="text-heading text-md font-bold">
                  18 August 6:00PM
                </h1>
                <p className="text-headingLight font-normal text-sm m-1">
                  to 19 August 1:00PM UTC +10
                </p>
              </div>
            </motion.div>
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: 'easeIn' }}
              className=" flex items-center justify-evenly lg:justify-between lg:w-full lg:px-4"
            >
              <div className="rounded-lg p-2 bg-white shadow-sm w-10 flex items-center justify-center lg:mr-2">
                <GoLocation className="text-purpleGR text-2xl" />
              </div>
              {/* Text */}
              <div className="flex flex-col items-start justify-start lg:justify-between">
                <h1 className="text-heading text-md font-bold">
                  18 August 6:00PM
                </h1>
                <p className="text-headingLight font-normal text-sm m-1">
                  to 19 August 1:00PM UTC +10
                </p>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
      {/* Call to action button is set with animation and reusability props */}
      <section className="flex items-center justify-center lg:justify-evenly p-4">
        <button
          type="button"
          data-modal-toggle="defaultModal"
          onClick={() => setModalIsOpen(true)}
          className="mr-4 lg:mr-0 border-[1px] rounded px-4 py-1 border-pinkGR bg-transparent text-btnBG font-semibold text-md hover:bg-pinkGR hover:text-white hover:border-none"
        >
          Book
        </button>
        <Link href="/event" passHref>
          <a className="border-[1px] rounded px-4 py-1 border-pinkGR bg-transparent text-btnBG font-semibold text-md hover:bg-pinkGR hover:text-white hover:border-none">
            Next
          </a>
        </Link>
      </section>
      {modalIsOpen && (
        <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      )}
    </main>
  );
}
