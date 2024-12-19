import React, { useState } from 'react';
// import '../styles/Modal.css';

const AddTransactionModal = ({ type, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    transaction_type: type,
    date: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Llama al método del Dashboard para agregar la transacción
    onClose(); // Cierra el modal
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{type === 'income' ? 'Agregar Ingreso' : 'Agregar Gasto'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            placeholder="Monto"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
