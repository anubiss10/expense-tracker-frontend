import React, { useEffect, useState } from 'react';
import IncomeCard from '../components/DashboardCards/IncomeCard';
import ExpenseCard from '../components/DashboardCards/ExpenseCard';
import SubscriptionCard from '../components/DashboardCards/SubscriptionCard';
import ReminderCard from '../components/DashboardCards/ReminderCard';
import TransactionsChart from '../components/Charts/TransactionsChart';
import AddTransactionModal from '../components/Modals/AddTransactionModal'; // Importar el modal
import { fetchTransactions, fetchSubscriptions } from '../services/apiClient';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [showModal, setShowModal] = useState(false); // Controlar el modal
  const [modalType, setModalType] = useState(''); // Define el tipo de transacción

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsData = await fetchTransactions();
        setTransactions(transactionsData);

        const subscriptionsData = await fetchSubscriptions();
        setSubscriptions(subscriptionsData);

        const upcomingReminders = subscriptionsData.map((sub) => ({
          name: sub.name,
          date: sub.start_date,
        }));
        setReminders(upcomingReminders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddTransaction = async (newTransaction) => {
    try {
      const response = await fetch('http://localhost:8000/api/transactions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(newTransaction),
      });
  
      if (response.ok) {
        const savedTransaction = await response.json();
        setTransactions([...transactions, savedTransaction]); // Actualiza el estado con los datos guardados
        console.log('Transacción añadida:', savedTransaction);
      } else {
        console.error('Error al guardar la transacción:', await response.json());
      }
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
    }
  };
  
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="card-container">
        <IncomeCard
          totalIncome={transactions.reduce(
            (acc, t) => (t.transaction_type === 'income' ? acc + parseFloat(t.amount) : acc),
            0
          )}
          onClick={() => {
            setModalType('income');
            setShowModal(true);
          }}
        />
        <ExpenseCard
          totalExpenses={transactions.reduce(
            (acc, t) => (t.transaction_type === 'expense' ? acc + parseFloat(t.amount) : acc),
            0
          )}
          onClick={() => {
            setModalType('expense');
            setShowModal(true);
          }}
        />
        <SubscriptionCard
          totalSubscriptions={subscriptions.length}
          onClick={() => console.log('Manage Subscriptions')}
        />
        <ReminderCard reminders={reminders} />
      </div>
      <div className="chart-container">
        <TransactionsChart transactions={transactions} />
      </div>
      {showModal && (
        <AddTransactionModal
          type={modalType}
          onClose={() => setShowModal(false)}
          onSubmit={handleAddTransaction}
        />
      )}
    </div>
  );
};

export default Dashboard;
