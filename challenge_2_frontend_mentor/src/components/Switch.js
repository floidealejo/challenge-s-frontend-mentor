import React, { useRef, useEffect, useState } from 'react';
import './switch.css';
export default function Switch() {
  const [checked, setChecked] = useState(false);
  const ref = useRef(null);
  const handleChange = () => {
    console.log(ref.current.checked);
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.remove('is-light-mode');
      document.body.classList.add('is-dark-mode');
    } else {
      document.body.classList.remove('is-dark-mode');
      document.body.classList.add('is-light-mode');
    }
  };

  const changeMedia = (mediaQuerie) => {
    setChecked(mediaQuerie.matches);
  };

  useEffect(() => {
    const mediaQuerie = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuerie.addListener(changeMedia);
  }, []);

  return (
    <>
      <nav className='dark-mode'>
        <p className='dark-mode--title'>Dark Mode</p>
        <input
          onChange={handleChange}
          className='checkbox'
          type='checkbox'
          checked={checked}
          name=''
          id='checkbox'
          ref={ref}
        />
        <label className='switch' htmlFor='checkbox'></label>
      </nav>
    </>
  );
}
