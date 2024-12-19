import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TransactionsChart = ({ transactions }) => {
  // Agrupar datos por tipo
  const data = [
    {
      name: 'Ingresos',
      amount: transactions
        .filter((t) => t.transaction_type === 'income')
        .reduce((acc, t) => acc + parseFloat(t.amount), 0),
    },
    {
      name: 'Gastos',
      amount: transactions
        .filter((t) => t.transaction_type === 'expense')
        .reduce((acc, t) => acc + parseFloat(t.amount), 0),
    },
  ];

  return (
    <div>
      <h3>Gráfico de Transacciones</h3>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TransactionsChart;
