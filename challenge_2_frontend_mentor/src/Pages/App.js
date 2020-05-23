import React from 'react';
import './App.css';
import './globals.css';
import '../components/header.css';

import Header from '../components/Header';
import BigCards from '../components/BigCards-List';

function App({ className }) {
  return (
    <>
      <Header className={className}></Header>
      <main className={className}>
        <BigCards className={className}></BigCards>
      </main>
    </>
  );
}

export default App;
