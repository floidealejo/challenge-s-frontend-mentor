import React from 'react';
import OverviewCard from '../components/OverviewCard';
import '../components/cardSmall.css';
import '../Pages/globals.css';
export default function OverviewsCardsList(props) {
  const overviewList = [
    {
      id: 1,
      icon: '../images/icon-facebook.svg',
      pageViews: '97',
      growth: 4,
    },
    {
      id: 2,
      icon: '../images/icon-instagram.svg',
      pageViews: '1827',
      growth: -54,
    },
    {
      id: 3,
      icon: '../images/icon-twitter.svg',
      pageViews: '6487',
      growth: -32,
    },
    {
      id: 4,
      icon: '../images/icon-youtube.svg',
      pageViews: '1287',
      growth: 8,
    },
  ];
  return (
    <>
      <section className='overview grid'>
        {overviewList.map((overviewList) => (
          <OverviewCard
            className={props.className}
            key={overviewList.id}
            {...overviewList}
          ></OverviewCard>
        ))}
      </section>
    </>
  );
}
