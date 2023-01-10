import React, { useState } from "react";

// IMPORT COMPONENTS
import TitleBloc from "../Standard/Title.Bloc";
import ByYearsButton from "./By.Years.Button";
import ReturnHandle from "../boutons/Return.Handle";
import ByYearsDetail from "./By.Years.Detail";
import ReturnOne from "../boutons/Return.One";

const ByYearsContainer = () => {
  const [yearSelect, setYearSelect] = useState("0");

  return (
    <>
      <div className="navbar">
        <ReturnHandle />
        <ReturnOne />
      </div>
      {yearSelect === "0" ? (
        <>
          <TitleBloc titre="Sélectionnez l'année:" />
          <ByYearsButton setYearSelect={setYearSelect} />
        </>
      ) : (
        <>
          <TitleBloc titre={`Les modèles de l'année ${yearSelect}`} />
          <ByYearsDetail yearSelect={yearSelect} />
        </>
      )}
    </>
  );
};

export default ByYearsContainer;
