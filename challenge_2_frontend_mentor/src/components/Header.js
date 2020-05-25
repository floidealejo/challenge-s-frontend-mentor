import React from 'react';

export default function Header({ children }) {
  return (
    <div>
      <header className='header'>
        <div className='wrapper'>
          <h1>Social Media Dashboard</h1>
          <p>Total Followards: 23,004</p>
        </div>
        {children}
      </header>
    </div>
  );
}
