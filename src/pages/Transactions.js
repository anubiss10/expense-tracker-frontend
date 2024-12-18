import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/transactionService';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error al obtener transacciones:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Mis Transacciones</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.description} - ${t.amount} ({t.transaction_type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
