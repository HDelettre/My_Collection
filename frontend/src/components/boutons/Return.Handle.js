import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnHandle = () => {
  const navigate = useNavigate();
  
  const returnHandle = () => {
    navigate("/");
  };

  return (
    <div className="bouton" onClick={returnHandle}>
      ACCUEIL
    </div>
  );
};

export default ReturnHandle;
