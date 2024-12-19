import React from 'react';

const IncomeCard = ({ totalIncome, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>Ingresos</h3>
      <p>${totalIncome.toFixed(2)}</p>
    </div>
  );
};

export default IncomeCard;
