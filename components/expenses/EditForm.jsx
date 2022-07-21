import React from 'react';
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditForm() {
  const categories = {
    food: 'Food',
    entertainment: 'Entertainment',
  };
  const categoryOption = Object.keys(categories).map((category) => (
    <option key={category} value={categories[category]}>
      {categories[category]}
    </option>
  ));

  const [startDate, setStartDate] = useState(new Date());

  return (
    <form
      action=""
      className="w-5/6 md:w-9/12 xl:w-1/2 pt-7 pb-5 px-14 mt-5 m-auto bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold">Add new expense</h2>

      <div className="mt-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md block w-full px-3 py-1 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          required
          className="rounded-md block w-full px-3 py-1 border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
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
          required
          placeholder="0.00"
          min={0}
          step="0.01"
          className="rounded-md block w-full pl-11 pr-3 py-1 border border-gray-300 text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="date">Date</label>
        <DatePicker
          className="rounded-md block w-full px-3 py-1 border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
          closeOnScroll={true}
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Edit
        </button>
      </div>
    </form>
  );
}
