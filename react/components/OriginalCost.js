import React, { Component } from 'react';

const OriginalCost = (props) => {
  return(
    <div>
      <p>Cost</p>
      <h3>${props.originalCost.toFixed(2)}</h3>
    </div>
  );
};

export default OriginalCost;
