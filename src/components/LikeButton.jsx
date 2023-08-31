import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleLikeClick = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);

    const newColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(newColorIndex);
  };

  const buttonStyle = {
    backgroundColor: colors[currentColorIndex],
  };

  return (
    <button className="like-button" style={buttonStyle} onClick={handleLikeClick}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;