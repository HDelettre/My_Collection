import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = ({data}) => {
  const navigate = useNavigate();
  
  const navigationHandle = (e) => {
    navigate(`/${e.target.id}`);
  };

  return (
    <div className="navigation_card">
      <div className='navigation_card--image'>
        <img
        src={`${process.env.REACT_APP_PICTURES}assets/${data.imageUrl}`}
        alt=""
        onClick={navigationHandle}
        id={data.section}
      />
      </div>
      
      <h3>{data.title}</h3>
    </div>
  );
}

export default HomeCard;
