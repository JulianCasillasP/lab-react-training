import React from 'react';


const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
      <p>{type}</p>
      <p>**** **** **** {number.slice(-4)}</p>
      <p>Expires: {expirationMonth}/{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;