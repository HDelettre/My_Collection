import React from 'react';

// IMPORT COMPONENTS
import ReturnHandle from '../boutons/Return.Handle';
import LoginForm from './Login.Form';

const LoginContainer = () => {
  return (
    <>
    <div className="navbar">
        <ReturnHandle />
      </div>

      
        <LoginForm />
      
    
    </>
  );
}

export default LoginContainer;
