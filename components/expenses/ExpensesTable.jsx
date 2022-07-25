import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import TableItem from './TableItem';
import ExpenseContext from '../../context/ExpenseContext';
import EditForm from './EditForm';
import {months} from '../constant/monthConstant';

export default function ExpensesTable() {
  const {expenses, fetchExpenses} = useContext(ExpenseContext);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [editModal, setEditModal] = useState(false);
  const [expenseId, setExpenseId] = useState('');

  useEffect(() => {
    const baseURL = '/api/expenses';
    axios.get(baseURL).then((response) => {
      if (response.data.status === 'OK') {
        const expensesPerMonth = response.data.expenses.filter(
          (item) => item.month == currentMonth
        );
        fetchExpenses(expensesPerMonth);
      }
    });
  }, [currentMonth]);

  function toggleEditForm(id) {
    setEditModal(!editModal);
    setExpenseId(id);
  }

  const rowData = expenses.map((item, index) => (
    <TableItem
      key={item.id}
      data={item}
      index={index + 1}
      onEdit={toggleEditForm}
    />
  ));
  const monthOption = Object.keys(months).map((month) => (
    <option key={month} value={month}>
      {months[month]}
    </option>
  ));

  return (
    <>
      {editModal && <EditForm onEdit={toggleEditForm} expenseId={expenseId} />}
      <div className="">
        <span>Month: </span>
        <select
          className="mt-4 ml-1 py-1 px-4 rounded-md bg-gray-200"
          name="month"
          defaultValue={currentMonth}
          onChange={(e) => setCurrentMonth(e.target.value)}
        >
          {monthOption}
        </select>
      </div>
      <div className="min-w-full overflow-hidden align-middle relative shadow-md rounded-lg">
        <table className="min-w-full border-separate">
          <thead>
            <tr className="text-sm bg-slate-300">
              <th className="px-4 py-2 w-2">No.</th>
              <th className="px-4 py-2 w-max">Name</th>
              <th className="px-4 py-2 w-1/6">Category</th>
              <th className="px-4 py-2 w-1/6">Price</th>
              <th className="px-4 py-2 w-1/6">Date</th>
              <th className="px-4 py-2 w-3.5"></th>
            </tr>
          </thead>
          <tbody>
            {rowData.length !== 0 ? (
              rowData
            ) : (
              <tr className="even:bg-slate-200 text-sm whitespace-no-wrap">
                <td className="px-4 py-1 text-center" colSpan="6">
                  No records, please add expenses.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
