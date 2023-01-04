import React from 'react';

const ByYearsCards = ({setYearSelect}) => {

  const yearHandle = (e) => {
    setYearSelect(e.target.id)
  };

  let yearList = [];
  for (let i = 1950; i < 2022; i++) {
    yearList.push(<div className="bouton_year" key={i} id={i} onClick={yearHandle}>{i}</div>);
  };

  return (
    <div className='year_menu'>
      {yearList}
    </div>
  );
}

export default ByYearsCards;
