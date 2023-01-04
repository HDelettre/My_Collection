import React, {useEffect, useState} from "react";

import imageDefault from '../../assets/default_picture.jpg';

const HomeLatest = ({ data }) => {
  const [imageName, setImageName] = useState('');
  const [imageValid, setImageValid] = useState(false);
  
  useEffect(() => {
    async function fetchPictures() {
      const reponse = await fetch (`${process.env.REACT_APP_API_MODEL}diecast/addpict/${data.model_id}`, {
        method: 'GET',    
      });
      if (reponse.ok) {
        const reponseJSON = await reponse.json();
        setImageName(reponseJSON.reponse.pictureName);
        setImageValid(true);
      } else {
        setImageValid(false);
      }
    };
    if (!imageName) fetchPictures();
  }, [setImageName, imageName, setImageValid]);

  return  (
    <>
      <div className="navigation_card">
        <div className="navigation_card--image">
        {imageValid ? (
          <img src={`${process.env.REACT_APP_PICTURES}diecasts/${imageName}`} alt="" />
          ) : (
            <img src={imageDefault} />
        )} 
        </div>
        <h3>{`${data.teams} ${data.model} - ${data.year}`}</h3>
      </div>
    </>
  );
};

export default HomeLatest;
