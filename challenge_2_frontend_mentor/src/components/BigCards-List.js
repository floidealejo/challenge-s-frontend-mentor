import React from 'react';
import BigCard from '../components/BigCard';

const BigCardListData = [
  {
    id: 1,
    userName: 'alebetau',
    numberFollowers: '1980',
    todayFollowers: '12',
    socialIcon: '../images/icon-facebook.svg',
    socialColor: 'facebook',
  },
  {
    id: 2,
    userName: 'dilipa',
    numberFollowers: '1483',
    todayFollowers: '13',
    socialIcon: '../../public/images/icon-instagram.svg',
    socialColor: 'instagram',
  },
  {
    id: 3,
    userName: 'celau',
    numberFollowers: '28K',
    todayFollowers: '14',
    socialIcon: '../../public/images/icon-twitter.svg',
    socialColor: 'twitter',
  },
  {
    id: 4,
    userName: 'betadani',
    numberFollowers: '6K',
    todayFollowers: '15',
    socialIcon: '../../public/images/icon-youtube.svg',
    socialColor: 'youtube',
  },
];

export default function BigCardsList(props) {
  return (
    <div>
      <section className='section__social'>
        <div className='grid'>
          {BigCardListData.map((cardData) => (
            <BigCard
              key={cardData.id}
              className={props.className}
              {...cardData}
            ></BigCard>
          ))}

          {/* <article className='card twitter'>
            <p className='card-social-media'>
              <img src='./images/icon-facebook.svg' alt='' />
              @facebook
            </p>
            <p className='card-followers'>
              <strong className='card-followers-number'>1980</strong>
              <span className='card-followers-title'>Fallowers</span>
            </p>
            <p className='card-today'>
              <img src='/images/icon-down.svg' alt='' /> 12 Today
            </p>
          </article>
          <article className='card instagram'>
            <p className='card-social-media'>
              <img src='./images/icon-facebook.svg' alt='' />
              @facebook
            </p>
            <p className='card-followers'>
              <strong className='card-followers-number'>1980</strong>
              <span className='card-followers-title'>Fallowers</span>
            </p>
            <p className='card-today'>
              <img src='/images/icon-down.svg' alt='' /> 12 Today
            </p>
          </article>
          <article className='card youtube'>
            <p className='card-social-media'>
              <img src='./images/icon-facebook.svg' alt='' />
              @facebook
            </p>
            <p className='card-followers'>
              <strong className='card-followers-number'>1980</strong>
              <span className='card-followers-title'>Fallowers</span>
            </p>
            <p className='card-today'>
              <img src='/images/icon-down.svg' alt='' /> 12 Today
            </p>
          </article> */}
        </div>
      </section>
    </div>
  );
}
