import React from 'react';

const HomeCard = ({data}) => {

  const navigationHandle = (e) => {
    // navigate(`/${e.target.id}`);
  };

  return (
    <div className="navigation_card">
      <img
        src={`${process.env.REACT_APP_PICTURES}assets/${data.imageUrl}`}
        alt=""
        onClick={navigationHandle}
        id={data.section}
      />

      <p>{data.title}</p>
    </div>
  );
}

export default HomeCard;
