import React from 'react';

const SubscriptionCard = ({ totalSubscriptions, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>Suscripciones</h3>
      <p>{totalSubscriptions} activas</p>
    </div>
  );
};

export default SubscriptionCard;
