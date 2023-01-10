import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Spinloader from '../Standard/Spinloader';

// IMPORT BDD
import flagsCollection from '../../bdd/flagsCollection';
import driversCollection from '../../bdd/driversCollection';

const PresentBloc = ({ title, data }) => {
  const [flag, setFlag] = useState(false);
  const [editable, setEditable] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const [loading, setLoading] = useState(false);
  const [flagPicture, setFlagPicture] = useState('');

  useEffect(() => {
    console.log ('USE EFFECT: ',title, ' / ', data)
    setEditText(data);

    async function flagDefinition() {
      // if (title === "Grand Prix:") {
      //   const flagSearch = await flagsCollection.find(e => e.country === data);
      //   setFlagPicture(flagSearch.flagPicture);
      // } else if (title === "Pilote:") {
      //   console.log('DRIVER: ', data, ' / ', title)
      //   const driverSearch = await driversCollection.find(e => e.driver === data);
      //   console.log('DRIVER SEARCH: ', driverSearch);
      //   const flagSearch = flagsCollection.find(e => e.country === driverSearch);
      //   setFlagPicture(flagSearch.flagPicture);
      // };

      let countrySearch = data

      if (title === "Pilote:") {
        const driverSearch = driversCollection.find(e => e.driver === data);
        countrySearch = driverSearch.country;
      }

      const flagSearch = flagsCollection.find(e => e.country === countrySearch);
      setFlagPicture(flagSearch.flagPicture);
    }




    if (title === "Pilote:" || title === "Grand Prix:") {
      flagDefinition()
      setFlag(true);

      // Recherche Drapeau
      
    }

    if (title === 'Circuit:') {setEditable(false);}
    if (editText || data === '') {setLoading(true)}
  }, [data, editText]);
//editText,setEditText, data
  const editHandle = () => {
    setEdit(true);
  };

  const validHandle = () => {
    // UPDATE DATABASE
    setEdit(false);
  };

  const cancelHandle = () => {
    setEdit(false);
  };

  const editTextHandle = (e) => {
    setEditText(e.target.value);
  }

  console.log('FLAG PICTURE ', flagPicture)

  return loading ? (
    <div className="presentBloc">
      <div className="presentBloc_title">{`${title}`}</div>
      
      {edit ? (
        <div className="presentBloc_data">
          <textarea value={editText} rows="1" onChange={editTextHandle} />
        </div>
      ) : (
        <div className="presentBloc_data">
        {editText}
        {flag ? <img src={`${process.env.REACT_APP_PICTURES}flags/${flagPicture}`} alt="" /> : ""}
      </div>
      )}
      
      {editable ? (
        <div className="presentBloc_bar">
        {edit ? (
          <>
            <i className="fa-solid fa-check" onClick={validHandle}></i>
            <i className="fa-regular fa-rectangle-xmark" onClick={cancelHandle}></i>
          </>
        ) : (
          <i className="fa-solid fa-pen-to-square" onClick={editHandle}></i>
        )}
      </div>
      ):("")}
    </div>
  ) : (<Spinloader/>);
};

export default PresentBloc;
