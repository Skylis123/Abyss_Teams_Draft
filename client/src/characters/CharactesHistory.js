import React, { useState, useEffect } from 'react';

export default function CharactersHistory(props) {
  const [characterImages, setCharacterImages] = useState([]);

  useEffect(() => {
    const images = [];
    for (let i = 1; i <= 4; i++) {
      const imageSource = require(`/public/images/${props.element[`teama_${i}`]}.png`);
      images.push(
        <img
          key={`teama_${i}`}
          src={imageSource}
          className="characterImage"
          alt=""
          style={{ width: '50px', height: '50px' }}
        />
      );
    }
    for (let i = 1; i <= 4; i++) {
      const imageSource = require(`/public/images/${props.element[`teamb_${i}`]}.png`);
      images.push(
        <img
          key={`teamb_${i}`}
          src={imageSource}
          className="characterImage"
          alt=""
          style={{ width: '50px', height: '50px' }}
        />
      );
    }

    setCharacterImages(images);
  }, [props.element]);

  const firstFourImages = characterImages.slice(0, 4);
  const lastFourImages = characterImages.slice(4);

  return (
    <div style={{
        marginLeft: "70px",
      }}>
      {firstFourImages.map((element, key) => (
        <label key={key}>{element}</label>
      ))}
      <br />
      {lastFourImages.map((element, key) => (
        <label key={key}>{element}</label>
      ))}
    </div>
  );
}
