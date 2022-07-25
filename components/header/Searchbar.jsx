import React from 'react';

export default function Searchbar() {
  return (
    <button className=" flex-1 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        className="mx-2 px-2 w-full focus:outline-none rounded bg-stone-50 dark:bg-slate-900/60"
        placeholder="Search"
      />
    </button>
  );
}
