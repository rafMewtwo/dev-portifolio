import React from 'react';
import projectFilters from '../data/projectFilters';
import Btn from './Button';

function Filters() {
  const filterList = projectFilters;
  const type = 'filter-btn';
  return (
    <div className="app-btn-filter">
      { filterList.map((flt) => <Btn btnName={ flt } btnType={ type } key={ flt } />) }
    </div>
  );
}

export default Filters;
