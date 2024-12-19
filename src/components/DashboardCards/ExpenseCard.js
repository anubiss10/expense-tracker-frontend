import React from 'react';

const ExpenseCard = ({ totalExpenses, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>Gastos</h3>
      <p>${totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseCard;
