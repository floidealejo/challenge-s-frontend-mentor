import React from 'react';
import './App.css';
import './globals.css';
import '../components/header.css';
import '../components/cardSmall.css';

import Header from '../components/Header';
import BigCards from '../components/BigCards-List';
import OverviewsCardsList from '../components/OverviewsCards-List';

function App({ className }) {
  return (
    <>
      <Header className={className}></Header>
      <main className={className}>
        <BigCards className={className}></BigCards>
        <h2 className='wrapper'>Overview - Today</h2>
        <OverviewsCardsList className={className}></OverviewsCardsList>
      </main>
    </>
  );
}

export default App;
