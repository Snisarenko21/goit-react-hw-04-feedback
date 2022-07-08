import React from 'react';
import './Statistics.css';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <div className="Statistics__feedback">
      {Object.keys(options).map(key => (
        <p key={key}>
          {key} : {options[key]}
        </p>
      ))}
      <p>
        total: <span className="Statistics__value">{total}</span>
      </p>
      <p>
        positive feedback :
        <span className="Statistics__value"> {positivePercentage} % </span>
      </p>
    </div>
  );
};

export default Statistics;
