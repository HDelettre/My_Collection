import React from 'react';

const UpdateModels = ({setAdminOption}) => {

  const inputHandle = (e) => {
    setAdminOption(e.target.id);
  };

  return (
    <div className="bouton" onClick={inputHandle} id="updateModel">
      UPDATE MODEL
    </div>
  );
}

export default UpdateModels;
