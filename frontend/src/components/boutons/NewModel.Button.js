import React from "react";

const NewModelButton = ({ setAdminOption }) => {
  const inputHandle = (e) => {
    setAdminOption(e.target.id);
  };

  return (
    <div className="bouton" onClick={inputHandle} id="newModel">
      NEW MODEL
    </div>
  );
};

export default NewModelButton;
