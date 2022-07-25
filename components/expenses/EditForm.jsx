import React, {useState, useEffect, useRef, useContext} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ExpenseContext from '../../context/ExpenseContext';
import {categories} from '../constant/categoryConstant';

export default function EditForm({onEdit, expenseId}) {
  const {editExpense} = useContext(ExpenseContext);

  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({});
  const [currentCategory, setCurrentCategory] = useState('');

  const nameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();

  const categoryOption = Object.keys(categories).map((category) => (
    <option key={category} value={category}>
      {categories[category]}
    </option>
  ));

  function submitHandler(e, id) {
    e.preventDefault();
    const updateExpense = {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      price: parseFloat(priceRef.current.value),
      date: startDate.toISOString(),
    };
    const baseURL = `/api/expenses/${id}`;
    axios.put(baseURL, updateExpense).then((response) => {
      if (response.data.status === 'OK') {
        editExpense({id, ...updateExpense});
      }
    });
    setTimeout(onEdit, 500);
  }

  useEffect(() => {
    const baseURL = `/api/expenses/${expenseId}`;
    axios.get(baseURL).then((response) => {
      if (response.data.status === 'OK') {
        setData(response.data.expense);
        setCurrentCategory(response.data.expense.category);
        setStartDate(new Date(response.data.expense.date));
      }
    });
  }, []);

  return (
    <div
      onClick={(e) => (e.target.id === 'modal' ? onEdit(data.id) : null)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto ">
        <div
          id="modal"
          className="flex items-end sm:items-center justify-center min-h-full"
        >
          <div className="relative bg-gray-100 dark:bg-slate-900/60 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl sm:w-full">
            <form
              onSubmit={(e) => submitHandler(e, expenseId)}
              method="POST"
              className="px-10 pt-7 pb-7 m-auto"
            >
              <h1 className="font-bold text-2xl text-zinc-800 dark:text-slate-300">
                Edit expense
              </h1>
              <p className="text-sm">
                Update below informations to edit record.
              </p>
              <div className="mt-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={data.name}
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
                  value={currentCategory}
                  onChange={(e) => setCurrentCategory(e.target.value)}
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
                  <span className="text-gray-600">RM </span>
                </div>
                <input
                  id="price"
                  name="price"
                  type="number"
                  defaultValue={data.price}
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
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
