import React from 'react';

const NewUserButton = ({ setAdminOption }) => {

  const inputHandle = (e) => {
    setAdminOption(e.target.id);
  };

  return (
    <div className="bouton" onClick={inputHandle} id="newUser">
      NEW USER
    </div>
  );
}

export default NewUserButton;
