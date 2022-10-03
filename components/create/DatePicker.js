import React from 'react';

export default function DatePicker() {
  return (
    <div date-rangepicker className="flex items-center justify-between w-full">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center  pl-3 pointer-events-none w-1/2">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-heading"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          name="start"
          type="text"
          datepicker
          datepicker-autohide
          initDatePicker={true}
          className="bg-white border-none text-gray-900 sm:text-sm rounded-lg block pl-10 py-2.5 w-full"
          placeholder="Select date start"
        />
      </div>
      <span className="mx-4 text-heading text-xl">Start - End</span>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none w-1/2">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-heading"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          name="end"
          type="text"
          datepicker
          datepicker-autohide
          initDatePicker={true}
          className="bg-white border-none text-gray-900 sm:text-sm rounded-lg block pl-10 p-2.5 w-full"
          placeholder="Select date end"
        />
      </div>
    </div>
  );
}
