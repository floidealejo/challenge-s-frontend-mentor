import React from 'react';
// import '../public/css/styles.css';

export default function Header() {
  return (
    <div>
      <header className='header'>
        <div className='wrapper'>
          <h1>Social Media Dashboard</h1>
          <p>Total Followards: 23,004</p>
        </div>
        <nav className='dark-mode'>
          <p className='dark-mode--title'>Dark Mode</p>
          <input className='checkbox' type='checkbox' name='' id='checkbox' />
          <label className='switch' htmlFor='checkbox'></label>
        </nav>
      </header>
    </div>
  );
}
