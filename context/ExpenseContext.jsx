import {createContext, useState} from 'react';

const ExpenseContext = createContext();

export function ExpenseProvider({children}) {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses((prevState) => [...prevState, expense]);
  }

  function editExpense(expense) {
    setExpenses((prevState) => {
      return prevState.map((item) => (item.id === expense.id ? expense : item));
    });
  }

  function fetchExpenses(expense) {
    setExpenses([...expense]);
  }

  function deleteExpense(id) {
    setExpenses((prevState) => {
      return prevState.filter((item) => item.id != id);
    });
  }

  return (
    <ExpenseContext.Provider
      value={{expenses, addExpense, fetchExpenses, deleteExpense, editExpense}}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
