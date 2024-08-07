import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const HomePage = () => (
  <main>
    <h2>Expense Tracker</h2>
    <ExpenseForm />
    <ExpenseList />
  </main>
);

export default HomePage;
