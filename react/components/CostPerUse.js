import React, { Component } from 'react';

const CostPerUse = (props) => {
  return (
    <div>
      <p>Cost Per Use</p>
      <h2>${props.costPerUse.toFixed(2)}</h2>
    </div>
  )
}

export default CostPerUse;
