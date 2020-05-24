import React from 'react';

export default function BigCard({
  userName,
  numberFollowers,
  todayFollowers,
  socialIcon,
  socialColor,
}) {
  const cardClass = `card ${socialColor}`;
  return (
    <>
      <article className={cardClass}>
        <p className='card-social-media'>
          <img src={socialIcon} alt='' />@{userName}
        </p>
        <p className='card-followers'>
          <strong className='card-followers-number'>{numberFollowers}</strong>
          <span className='card-followers-title'>Fallowers</span>
        </p>
        <p className='card-today'>
          <img src='/images/icon-down.svg' alt='' /> {todayFollowers} Today
        </p>
      </article>
    </>
  );
}
