import React from 'react';
import DatePicker from './DatePicker';

export default function Modal({ modalIsOpen, setModalIsOpen }) {
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        modalIsOpen === true ? 'flex items-center justify-center' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-[rgba(0,0,0,0.5)]`}
    >
      <div className="z-50 relative p-4 w-full max-w-2xl h-full md:h-auto bg-white rounded-lg shadow">
        <div className="relative bg-gradient-to-r from-purpleGR to-pinkGR rounded-lg shadow ">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-white font-primary">
              Book an event!
            </h3>
            <button
              type="button"
              className="text-white bg-transparent hover:bg-btnHeading rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
              onClick={() => setModalIsOpen(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-6">
            <div className="w-full flex flex-col items-start justify-evenly">
              <label
                className="text-md mb-2 ml-2 text-heading font-semibold font-primary"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-2 py-1 rounded outline-none border-none placeholder:text-sm"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-evenly mt-4">
              <label
                className="text-md mb-2 ml-2 text-heading font-semibold font-primary"
                htmlFor="name"
              >
                Event Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-2 py-1 rounded outline-none border-none placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col items-start justify-evenly mt-6">
              <DatePicker />
            </div>
          </form>
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => setModalIsOpen(false)}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
