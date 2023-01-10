import React from 'react';

const VignetteCard = ({pict}) => {
  return (
    <div className='gallerie'>
      <div className='gallerie_image' >

      <img src={`${process.env.REACT_APP_PICTURES}diecasts/${pict}`} alt='' />
      </div>
    </div>
  );
}

export default VignetteCard;
