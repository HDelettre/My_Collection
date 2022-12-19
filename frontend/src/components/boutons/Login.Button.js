import React from 'react';
import {useNavigate} from 'react-router-dom';

const LoginButton = () => {
  const navigate=useNavigate();

  const loginHandle= () => { navigate('/login')};
  return (
    <div className='bouton' onClick={loginHandle}>
      SE CONNECTER
    </div>
  );
}

export default LoginButton;
