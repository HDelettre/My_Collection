import React, {useEffect, useState} from 'react';

// IMPORT COMPONENTS
import LoginButton from '../boutons/Login.Button';
import HomeLatest from './Home.Latest';
import HomeSections from './Home.Sections';
import TitleBloc from '../Standard/Title.Bloc';

const HomeContainer = () => {
  const[allModels, setAllModels] = useState('');

useEffect(() => {
  async function fetchModel() {
    const reponse = await fetch (`${process.env.REACT_APP_API_MODEL}diecast/`, {
      method: 'GET',    
    });
    const reponseJSON = await reponse.json();
    setAllModels(reponseJSON);
    console.log('REPONSE FETCH MODEL: ', allModels)
  };
  if (!allModels) {
    fetchModel()
  } else {
    const threeEnd = [allModels.slice(-3)]
  };
}, [setAllModels, allModels]);

  return (
    <>
      <div className='navbar'>
        <LoginButton />
      </div>
      
      <HomeSections />
      <TitleBloc titre="Les Derniers Modèles" />
      <div className='navigation'>
      { allModels ? (
        <>
        { allModels.slice(-3).map((data) => <HomeLatest data={data} key={data.model_id} />)}
        </>
      ) : (
        <div className="spinloader"></div>
      )}
      </div>
    </>
  );
}

export default HomeContainer;
