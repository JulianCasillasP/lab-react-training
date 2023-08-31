import React, { useState } from 'react';

const Dice = () => {
  const diceSides = 6; 
  const emptyDiceImage = '../assets/images/dice-empty.png';
  const diceImages = Array.from({ length: diceSides }, (_, index) => `../assets/images/dice${index + 1}.png`);
  
  const [currentImage, setCurrentImage] = useState(emptyDiceImage);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;

    setRolling(true);

    
    setCurrentImage(emptyDiceImage);

    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceSides);
      setCurrentImage(diceImages[randomIndex]);
      setRolling(false);
    }, 1000);
  };

  return (
    <img
      src={currentImage}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Dice;