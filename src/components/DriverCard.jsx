import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-details">
        <h2>{name}</h2>
        <div className="driver-rating">
          {getStars(rating)}
        </div>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

const getStars = (rating) => {
  const filledStars = Math.floor(rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < filledStars ? 'star filled' : 'star'}>
        ★
      </span>
    );
  }

  return stars;
};

export default DriverCard;