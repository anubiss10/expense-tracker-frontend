import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BalanceChart = ({ transactions }) => {
  // Calcular balance acumulado
  let balance = 0;
  const data = transactions.map((t) => {
    balance += t.transaction_type === 'income' ? parseFloat(t.amount) : -parseFloat(t.amount);
    return { name: t.date, balance };
  });

  return (
    <div>
      <h3>Gráfico de Balance</h3>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="balance" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default BalanceChart;
