import React, { useState } from "react";

// IMPORT COMPONENTS
import ByYearsCards from "./By.Years.Cards";
import TitleBloc from "../Standard/Title.Bloc";
import ReturnHandle from "../boutons/Return.Handle";

const ByYearsContainer = () => {
  const [yearSelect, setYearSelect] = useState("0");

  return (
    <>
      <div className="navbar">
        <ReturnHandle />
      </div>
      {yearSelect === "0" ? (
        <>
          <TitleBloc titre="Sélectionnez l'année:" />
          <ByYearsCards setYearSelect={setYearSelect} />
        </>
      ) : (
        <>
          <TitleBloc titre={`Les modèles de l'année ${yearSelect}`} />
        </>
      )}
    </>
  );
};

export default ByYearsContainer;
