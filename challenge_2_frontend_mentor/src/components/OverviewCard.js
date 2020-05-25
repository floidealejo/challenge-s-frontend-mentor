import React from 'react';

export default function OverviewCard({ icon, pageViews, growth, key }) {
  return (
    <>
      <artcle className='card-small'>
        <p className='card-small-views'>Pages Views</p>
        <img className='card-small-image' src={icon} alt='' />
        <p className='card-small-number'>{pageViews}</p>
        <p className='card-small-porcentage'>
          <img src='./images/icon-up.svg' alt='' />
          {growth}%
        </p>
      </artcle>
    </>
  );
}
