import React from 'react';

// IMPORT COMPONENTS
import ReturnHandle from '../boutons/Return.Handle';
import ReturnOne from '../boutons/Return.One';
import LoginForm from './Login.Form';

const LoginContainer = () => {
  return (
    <>
    <div className="navbar">
        <ReturnHandle />
        <ReturnOne />
      </div>

      
        <LoginForm />
      
    
    </>
  );
}

export default LoginContainer;
