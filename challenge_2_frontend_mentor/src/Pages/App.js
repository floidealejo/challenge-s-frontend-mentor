import React from 'react';
import './App.css';
import './globals.css';
import '../components/header.css';
import '../components/cardSmall.css';
import '../components/bigCard.css';
import '../components/switch.css';

import Header from '../components/Header';
import BigCards from '../components/BigCards-List';
import OverviewsCardsList from '../components/OverviewsCards-List';
import Switch from '../components/Switch';
function App({ className }) {
  return (
    <>
      <Header className={className}>
        <Switch className={className}></Switch>
      </Header>
      <main className={className}>
        <BigCards className={className}></BigCards>
        <h2 className='wrapper'>Overview - Today</h2>
        <OverviewsCardsList className={className}></OverviewsCardsList>
      </main>
    </>
  );
}

export default App;
