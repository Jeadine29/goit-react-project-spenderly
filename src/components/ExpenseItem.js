import React from 'react';

const ExpenseItem = ({ expense }) => (
  <li>
    {expense.description}: ${expense.amount}
  </li>
);

export default ExpenseItem;
