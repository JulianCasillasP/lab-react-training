import React from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
  const { limit } = props;

  const numberList = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbers-table">
      {numberList.map((number) => (
        <div
          key={number}
          className={`number ${number % 2 === 0 ? 'even' : ''}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;