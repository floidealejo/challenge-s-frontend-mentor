import React from 'react';

export default function Switch() {
  return (
    <>
      <nav className='dark-mode'>
        <p className='dark-mode--title'>Dark Mode</p>
        <input className='checkbox' type='checkbox' name='' id='checkbox' />
        <label className='switch' htmlFor='checkbox'></label>
      </nav>
    </>
  );
}
