import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// IMPORT COMPONENTS
import ReturnHandle from "../boutons/Return.Handle";
import ReturnOne from "../boutons/Return.One";
import PresentBloc from "../Standard/Present.Bloc";
import TitleBloc from "../Standard/Title.Bloc";
import VignetteCard from "../Standard/Vignette.Card";
import Spinloader from "../Standard/Spinloader";

const MiniatureContainer = () => {
  const modelId = useParams();
  const [oneModel, setOneModel] = useState("");
  const [allPictures, setAllPictures] = useState([""]);
  const [validPictures, setValidPictures] = useState(false);

  const [loadingModel, setLoadingModel] = useState(false);
  const [loadingPicture, setLoadingPicture] = useState(false);

  // fetch recup model
  useEffect(() => {
    async function fetchModel() {
      const reponse = await fetch(
        `${process.env.REACT_APP_API_MODEL}diecast/${modelId.id}`,
        {
          method: "GET",
        }
      );
      const reponseJSON = await reponse.json();
      setOneModel(reponseJSON.reponse);
      setLoadingModel(true);
      console.log("REPONSE FETCH MODEL: ", oneModel);
    }
    if (!loadingModel) {fetchModel()};
  }, [setOneModel, oneModel]);

  useEffect(() => {
    async function fetchModelPicture() {
      const reponse = await fetch(
        `${process.env.REACT_APP_API_MODEL}diecast/addpict/${oneModel.model_id}`,
        {
          method: "GET",
        }
      );
      if (reponse.ok) {
        setValidPictures(true);
        const reponseJSON = await reponse.json();
        setAllPictures([reponseJSON.reponse]);
        setLoadingPicture(true);
        console.log('REPONSE FETCH PICTURES: ', allPictures)
      }
    }
    if (!loadingPicture) {fetchModelPicture();}
  }, [setAllPictures, allPictures, oneModel]);

  return (
    <>
      <div className="navbar">
        <ReturnHandle />
        <ReturnOne />
      </div>

      <TitleBloc
        titre={`${oneModel.teams} ${oneModel.model} : ${oneModel.year}`}
      />

      {oneModel.race ? (
        <>
          <PresentBloc title={"Grand Prix:"} data={oneModel.race} />
          <PresentBloc title={"Circuit:"} data={""} />
        </>
      ) : (
        ""
      )}

      <PresentBloc title={"Pilote:"} data={oneModel.driver} />

      <TitleBloc titre={"Données Techniques"} />
      <>
        <PresentBloc title={"Moteur:"} data={"Alfa Romeo 158"} />
        <PresentBloc
          title={""}
          data={"6 cylindres en ligne, 1500 cm3 à compresseur"}
        />
        <PresentBloc title={"Pneumatiques"} data={"Pirelli"} />
      </>

      {validPictures ? (
        <>
          <TitleBloc titre={"Gallerie photos"} />
          {allPictures ? (
            allPictures.map((pict) => (
              <VignetteCard pict={pict.pictureName} key={pict.id} />
            ))
          ) : (
            <Spinloader />
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MiniatureContainer;
