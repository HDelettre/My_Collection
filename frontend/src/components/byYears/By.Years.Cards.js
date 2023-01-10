import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import imageDefault from '../../assets/default_picture.jpg';

const ByYearsCards = ({data}) => {

  const [imageName, setImageName] = useState('');
  const [imageValid, setImageValid] = useState(false);
  const [modelSelect, setModelSelect] = useState('');

  const navigate = useNavigate();
  
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

  const selectHandle = (e) => {
    setModelSelect(e.target.id);
    navigate(`/model/${e.target.id}`)
  }  
  
  return (
    <div className='vignette'>
      <div className="vignette_picture" onClick={selectHandle}>
        {imageValid ? (
          <img src={`${process.env.REACT_APP_PICTURES}diecasts/${imageName}`} alt=""  id={data.model_id}/>
          ) : (
            <img src={imageDefault} id={data.model_id}/>
        )} 
        </div>

      {`${data.teams} ${data.model}`}
      <br/>
      {`${data.driver}`}
      
    </div>
  );
}

export default ByYearsCards;
