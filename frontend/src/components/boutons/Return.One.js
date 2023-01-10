import React from 'react';
import {useNavigate} from 'react-router-dom';

const ReturnOne = () => {
  const navigate = useNavigate();

  const retourHandle = () => {
    navigate(-1);
  }

  return (
    <div className='bouton_retour fa-solid fa-rotate-left' onClick={retourHandle}>
    </div>
  );
}

export default ReturnOne;
