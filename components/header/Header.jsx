import React from 'react';
import Searchbar from './Searchbar';
import ToggleModeButton from './ToggleModeButton';

export default function Header() {
  return (
    <div className="bg-stone-50 dark:bg-slate-900/60 flex justify-between p-2 shadow-md sticky">
      <Searchbar />
      <div className="flex gap-2">
        <ToggleModeButton />
        <button className="rounded-full bg-teal-500 border border-teal-600 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-stone-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
