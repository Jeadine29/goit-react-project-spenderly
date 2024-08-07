import React from 'react';
import ExpenseItem from './ExpenseItem';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
