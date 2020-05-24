import React from 'react';
import Switch from '../components/Switch';

import '../components/switch.css';
export default function Header({ className }) {
  return (
    <div>
      <header className='header'>
        <div className='wrapper'>
          <h1>Social Media Dashboard</h1>
          <p>Total Followards: 23,004</p>
        </div>
        <Switch className={className}></Switch>
      </header>
    </div>
  );
}
