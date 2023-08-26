import React from 'react';

const Rating = (props) => {
  const { children } = props;
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  return (
    <div className="rating">
      {'★'.repeat(filledStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

export default Rating;