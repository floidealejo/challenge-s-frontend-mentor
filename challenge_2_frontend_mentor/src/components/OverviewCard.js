import React from 'react';

export default function OverViewCard({ icon, pageViews, growth }) {
  return (
    <>
      <article className='card-small'>
        <p className='card-small-views'>Pages Views</p>
        <img className='card-small-image' src={icon} alt='' />
        <p className='card-small-number'>{pageViews}</p>
        <p className='card-small-porcentage'>
          <img src='./images/icon-up.svg' alt='' />
          {growth}%
        </p>
      </article>
    </>
  );
}
