import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const uniqueCountries = [...new Set(profiles.map(profile => profile.country))];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebook">
      <div className="country-buttons">
        {uniqueCountries.map((country, index) => (
          <button
            key={index}
            onClick={() => handleCountryClick(country)}
            className={selectedCountry === country ? 'active' : ''}
          >
            {country}
          </button>
        ))}
      </div>
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`profile ${profile.country === selectedCountry ? 'selected' : ''}`}
        >
          <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
          <div className="profile-info">
            <p><strong>First Name:</strong> {profile.firstName}</p>
            <p><strong>Last Name:</strong> {profile.lastName}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;