import React, { useState } from 'react';

const initialAppointments = [
  { id: 1, name: 'ABHIN', reason: 'Routine Check', date: '29-10-2024', status: 'Scheduled' },
  { id: 2, name: 'GREGORY', reason: 'MRI', date: '31-10-2024', status: 'Scheduled' },
  { id: 3, name: 'DAS', reason: 'FOLLOW-UP', date: '06-11-2024', status: 'Not applicable' }
];

const AppointmentList = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const completedCount = appointments.filter(app => app.status === 'Completed').length;

  const Completed = (id) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(app =>
        app.id === id ? { ...app, status: 'Completed' } : app
      )
    );
  };

  const styles = {
    container: { 
      maxWidth: '500px', 
      margin: '0 auto', 
      textAlign: 'center', 
      fontFamily: 'Verdana', 
      padding: '20px', 
      backgroundColor: '#89CFF0', 
      borderRadius: '10px',
    },
    header: { 
      fontSize: '28px', 
      margin: '20px', 
      color: '#800080' 
    },
    card: { 
      padding: '20px', 
      border: '5px solid #4CAF50', 
      borderRadius: '50px', 
      marginBottom: '10px', 
      backgroundColor: '#ADD8E6', 
      transition: 'transform 1s',
      color: '#000080'
    },
    cardHover: {
      transform: 'scale(1.02)'
    },
    completedText: { 
      color: '#4B0082',
      fontSize: '18px', 
    },
    completedDetails: { 
      color: '#4B0082',
      fontSize: '15px', 
    },
  
    notApplicableCard: { 
      border: '5px solid #FF8C00', 
      backgroundColor: '#FFE4E1',
      width: '75%', 
      margin: '20px auto', 
    },
    button: { 
      marginTop: '5px', 
      padding: '10px 15px', 
      cursor: 'pointer', 
      backgroundColor: '#007BFF', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '5px', 
      fontSize: '15px', 
      transition: 'background-color 0.3s'
    },
    buttonHover: {
      backgroundColor: '#007BFF'
    },
    footer: {
      marginTop: '20px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#FF0000'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Appointments</h1>
      
      {appointments.map(app => (
        <div 
          key={app.id} 
          style={{ ...styles.card, 
            ...(app.status === 'Completed' ? styles.completedCard : {}),
            ...(app.status === 'Not applicable' ? styles.notApplicableCard : {}),
            ...(app.status === 'Scheduled' ? styles.cardHover : {}) }}
        >
          <h2 style={app.status === 'Completed' ? styles.completedText : {}}>{app.name}</h2>
          <p style={app.status === 'Completed' ? styles.completedDetails : {}}>
            <strong>Reason:</strong> {app.reason}</p>
          <p style={app.status === 'Completed' ? styles.completedDetails : {}}>
            <strong>Date:</strong> {app.date}</p>
          <p style={app.status === 'Completed' ? styles.completedDetails : {}}>
            <strong>Status:</strong> {app.status}</p>

          {app.status === 'Scheduled' && (
            <button 
              style={styles.button} 
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
              onClick={() => Completed(app.id)}
            >
              Completed
            </button>
          )}
        </div>
      ))}

      <div style={styles.footer}> 
        Total Completed Appointments: {completedCount}
      </div>
    </div>
  );
};

export default AppointmentList;
