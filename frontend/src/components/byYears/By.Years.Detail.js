import React, {useEffect, useState} from 'react';

// IMPORT COMPONENTS
import ByYearsCards from './By.Years.Cards';
import Spinloader from '../Standard/Spinloader';

const ByYearsDetail = ({yearSelect}) => {
  const [modelOfYear, setModelOfYear] = useState('');

  useEffect(() => {
    ( async () => {
      try {
        const reponse = await fetch (`${process.env.REACT_APP_API_MODEL}diecast/year/${yearSelect}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (reponse.ok) {
          const reponseJSON = await reponse.json();
          setModelOfYear(reponseJSON);
          
        } else {
          console.log('ERROR FETCH BY YEAR');
        }

      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  return modelOfYear ? (
    <div className='fullContainer'>
      {modelOfYear.map((data) => <ByYearsCards data={data} key={data.model_id} /> )}
    </div>
  ) : (<Spinloader />);
} 

export default ByYearsDetail;
