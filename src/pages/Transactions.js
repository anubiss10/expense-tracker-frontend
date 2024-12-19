import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/transactionService'; // Asegúrate de que esta ruta es correcta

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions(); // Usa `fetchTransactions` aquí
        setTransactions(data);
      } catch (error) {
        console.error('Error al obtener transacciones:', error);
      }
    };

    fetchData(); // Llama a la función `fetchData`
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
