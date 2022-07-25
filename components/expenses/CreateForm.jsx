import React, {useState, useRef, useContext} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ExpenseContext from '../../context/ExpenseContext';
import {categories} from '../constant/categoryConstant';

export default function CreateForm({onAdd}) {
  const [startDate, setStartDate] = useState(new Date());
  const {addExpense} = useContext(ExpenseContext);

  const nameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();

  const categoryOption = Object.keys(categories).map((category) => (
    <option key={category} value={category}>
      {categories[category]}
    </option>
  ));

  function submitHandler(e) {
    e.preventDefault();
    const newExpense = {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      price: parseFloat(priceRef.current.value),
      date: startDate.toISOString(),
    };
    const baseURL = `/api/expenses`;
    axios.post(baseURL, newExpense).then((response) => {
      if (response.data.status === 'OK') {
        addExpense({id: response.data.expenseId, ...newExpense});
      }
    });
    setTimeout(onAdd, 500);
  }

  return (
    <form
      onSubmit={submitHandler}
      method="POST"
      className="w-5/6 md:w-9/12 xl:w-1/2 pt-7 pb-5 px-12 mt-5 m-auto bg-white dark:bg-slate-900/60 rounded-lg shadow-md"
    >
      <h1 className="font-bold text-2xl text-zinc-800 dark:text-slate-300">
        Create new expense
      </h1>
      <p className="text-sm">Fill in below informations to add new record.</p>
      <div className="mt-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          ref={nameRef}
          required
          className="rounded-md block w-full px-3 py-1 border dark:bg-slate-900/60 dark:border-gray-600 dark:text-slate-400 dark:focus:ring-teal-600 dark:focus:border-teal-600 border-gray-300 text-gray-900 focus:outline-none focus:ring-teal-600 focus:border-teal-600 focus:z-10"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          ref={categoryRef}
          required
          className="bg-white rounded-md block w-full px-3 py-1 border dark:bg-slate-900/60 dark:border-gray-600 dark:text-slate-400 dark:focus:ring-teal-600 dark:focus:border-teal-600 border-gray-300 text-gray-900 focus:outline-none focus:ring-teal-600 focus:border-teal-600 focus:z-10"
        >
          {categoryOption}
        </select>
      </div>
      <div className="mt-3 relative">
        <label htmlFor="price">Price</label>
        <div className="absolute top-7 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-600 ">RM </span>
        </div>
        <input
          id="price"
          name="price"
          type="number"
          ref={priceRef}
          required
          placeholder="0.00"
          min={0}
          step="0.01"
          className="rounded-md block w-full pl-11 pr-3 py-1 border dark:bg-slate-900/60 dark:border-gray-600 dark:text-slate-400 dark:focus:ring-teal-600 dark:focus:border-teal-600 border-gray-300 text-gray-900 focus:outline-none focus:ring-teal-600 focus:border-teal-600 focus:z-10"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="date">Date</label>
        <DatePicker
          className="rounded-md block w-full px-3 py-1 border dark:bg-slate-900/60 dark:border-gray-600 dark:text-slate-400 dark:focus:ring-teal-600 dark:focus:border-teal-600 border-gray-300 text-gray-900 focus:outline-none focus:ring-teal-600 focus:border-teal-600 focus:z-10"
          closeOnScroll={true}
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Create
        </button>
      </div>
    </form>
  );
}
