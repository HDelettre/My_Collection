import React, { useState } from "react";

// IMPORT COMPONENTS
import TitleBloc from "../Standard/Title.Bloc";

// IMPORT FUNCTION
import { fetchCreateModel } from "../../utils/fetch.createModel";

const NewmodelForm = () => {
  const [status, setStatus] = useState("commande");
  const [errorMessage, setErrorMessage] = useState("");

  const [teams, setTeams] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [driver, setDriver] = useState("");
  const [race, setRace] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [reference, setReference] = useState("");

  const [picture, setPicture] = useState("");
  const [file, setFile] = useState();

  const inputHandle = () => {
    const modelData = {
      teams: teams,
      model: model,
      year: year,
      driver: driver,
      race: race,
      manufacturer: manufacturer,
      ref: reference,
      status: status,
    };
//     ( async () => {
// try {
//   console.log('CLIC FROM FETCH: ', modelData);
//   const reponse = await fetch (`${process.env.REACT_APP_API_MODEL}diecast`, {
//     method: 'POST',
//     body: JSON.stringify(modelData),
//     headers: {"Content-Type": "application/json"}
//   });
//   console.log('REPONSE FROM FETCH: ', reponse);
// } catch (error) {}

      
    // })();
    // fetch (`${process.env.REACT_APP_API_MODEL}diecast`, {
    //       method: 'POST',
    //       body: JSON.stringify(modelData),
    //       headers: {"Content-Type": "application/json"}
    //     })
    //     .then((reponse) => console.log(reponse))
    //     .catch((error) => console.log(error));

    const reponse = fetchCreateModel(modelData);
    console.log(reponse)
  };

  const optionSelect = (e) => {
    setStatus(e.target.id);
  };

  const insertPictures = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  function resetData() {}

  return (
    <>
      <TitleBloc titre={"Nouveau modèle:"} />

      <div className="admin">
        <form
          action=""
          name="inputModel"
          className="admin_form"
          onSubmit={inputHandle}
        >
          <input
            type="text"
            name="teams"
            placeholder="Constructeur:"
            value={teams}
            onChange={(e) => setTeams(e.target.value)}
            className="admin_form--input"
            required
          />

          <input
            type="text"
            name="model"
            placeholder="Modèle:"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="admin_form--input"
            required
          />

          <input
            type="text"
            name="year"
            placeholder="Année:"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="admin_form--input"
            required
          />

          <input
            type="text"
            name="driver"
            placeholder="Pilote:"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
            className="admin_form--input"
            required
          />

          <input
            type="text"
            name="race"
            placeholder="Grand Prix:"
            value={race}
            onChange={(e) => setRace(e.target.value)}
            className="admin_form--input"
          />

          <input
            type="text"
            name="manufacturer"
            placeholder="Fabricant:"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            className="admin_form--input"
            required
          />

          <input
            type="text"
            name="reference"
            placeholder="Référence:"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="admin_form--input"
          />
          <div className="admin_form--icons">
            {picture ? (
              <i
                className="fa-regular fa-rectangle-xmark icons"
                title="Annuler la modification"
                onClick={() => setPicture("")}
              ></i>
            ) : (
              <>
                <i className="fa-regular fa-images icons"></i>
                <input
                  type="file"
                  name="model_picture"
                  accept=".jpg, .jpeg, .png"
                  onChange={insertPictures}
                  className="admin_form--insert"
                />
              </>
            )}
          </div>
        </form>

        <div className="admin_status">
          <div className="admin_status--picture">
            <img src={picture} alt="" />
          </div>
          <div className="admin_status--right">
            <div
              className={status === "recu" ? "bouton bouton_select" : "bouton"}
              id="recu"
              onClick={optionSelect}
            >
              Reçu
            </div>
            <div
              className={
                status === "commande" ? "bouton bouton_select" : "bouton"
              }
              id="commande"
              onClick={optionSelect}
            >
              En Commande
            </div>
            <div
              className={
                status === "monter" ? "bouton bouton_select" : "bouton"
              }
              id="monter"
              onClick={optionSelect}
            >
              A Monter
            </div>
          </div>
        </div>
      </div>

      <div className="centerbar">
        <div className="bouton" onClick={inputHandle}>
          VALIDER
        </div>
      </div>

      {errorMessage ? (
        <div className="error_message">
          <i className="fa-solid fa-triangle-exclamation icons"></i>
          {errorMessage}
          <i className="fa-solid fa-triangle-exclamation icons"></i>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NewmodelForm;
