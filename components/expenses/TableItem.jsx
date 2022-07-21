import React from 'react';

export default function TableItem() {
  return (
    <tr className="even:bg-slate-200 text-sm whitespace-no-wrap">
      <td className="px-4 py-1 w-2">1</td>
      <td className="px-4 py-1 w-max">Eat breakfast</td>
      <td className="px-4 py-1 w-1/6">Food</td>
      <td className="px-4 py-1 w-1/6">RM 19.00</td>
      <td className="px-4 py-1 w-1/6">11/7/2022</td>
      <td className="px-4 py-1 w-3.5">
        <div className="flex gap-2 justify-end">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
