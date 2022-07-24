import React, {useContext, useState} from 'react';
import axios from 'axios';
import {format} from 'date-fns';
import ExpenseContext from '../../context/ExpenseContext';
import {categories} from '../constant/categoryConstant';

export default function TableItem({data, index, onEdit}) {
  const {deleteExpense} = useContext(ExpenseContext);

  function deleteHandler(id) {
    const baseURL = `/api/expenses/${id}`;
    axios.delete(baseURL).then((response) => {
      if (response.data.status === 'OK') {
        deleteExpense(id);
      }
    });
  }

  return (
    <>
      <tr className="even:bg-slate-200 text-sm whitespace-no-wrap">
        <td className="px-4 py-1">{index}</td>
        <td className="px-4 py-1">{data.name}</td>
        <td className="px-4 py-1">{categories[data.category]}</td>
        <td className="px-4 py-1">{data.price}</td>
        <td className="px-4 py-1">
          {format(new Date(data.date), 'dd-MM-yyyy')}
        </td>
        <td className="px-4 py-1">
          <div className="flex gap-2 justify-end">
            <button onClick={() => onEdit(data.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline hover:text-yellow-500 duration-75"
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
            <button onClick={() => deleteHandler(data.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline hover:text-red-500 duration-75"
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
    </>
  );
}
