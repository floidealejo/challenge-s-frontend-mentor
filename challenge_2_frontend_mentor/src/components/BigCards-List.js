import React from 'react';

export default function BigCards() {
  return (
    <div>
      <section className='section__social'>
        <div className='grid'>
          <article className='card facebook'>
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
          <article className='card twitter'>
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
          </article>
        </div>
      </section>
    </div>
  );
}
