import React from 'react';

// IMPORT COMPONENTS
import TitleBloc from '../Standard/Title.Bloc';
import HomeCard from './Home.card';

// IMPORT DATA
import dataSection from '../../bdd/data.home';

const HomeSections = () => {
  return (
    <>
      <TitleBloc titre={"Les différentes sections:"} />
      <div className="navigation">
        {dataSection.map((data) => (
          <HomeCard data={data} key={data._id} />
        ))}
      </div>
    </>
  );
}

export default HomeSections;
