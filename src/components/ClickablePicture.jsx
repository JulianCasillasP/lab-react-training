import React, { useState } from 'react';

const ClickablePicture = (props) => {
  const { img, imgClicked } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? imgClicked : img}
      alt="Clickable"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ClickablePicture;