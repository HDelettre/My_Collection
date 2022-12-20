import React from "react";

import image from "../../assets/testimage.jpg";

const HomeLatest = ({ data }) => {
  return (
    <>
      <div className="navigation_card">
        <img src={image} alt="" />
        {`${data.teams} ${data.model} - ${data.year}`}
      </div>
    </>
  );
};

export default HomeLatest;
