import React from 'react';

const ReminderCard = ({ reminders }) => {
  return (
    <div className="card">
      <h3>Próximos Recordatorios</h3>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder.name} - {reminder.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderCard;
