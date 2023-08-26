import React from 'react';

const Greetings = (props) => {
  const { lang, children } = props;

  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="greetings">
      <p>{greetings[lang]} {children}</p>
    </div>
  );
};

export default Greetings;