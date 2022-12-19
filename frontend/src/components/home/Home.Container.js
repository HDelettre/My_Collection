import React from 'react';

// IMPORT COMPONENTS
import LoginButton from '../boutons/Login.Button';
import HomeSections from './Home.Sections';

const HomeContainer = () => {
  return (
    <>
      <div className='navbar'>
        <LoginButton />
      </div>
      
      <HomeSections />

    </>
  );
}

export default HomeContainer;
