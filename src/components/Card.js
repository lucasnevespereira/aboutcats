import React from "react";

const Card = ({ breed, size, hair, img, wiki }) => {
  return (
    <div className="tc grow br1 pa3 ma2 dib bw2 shadow-5 img-wrapper">
      <a href={`${wiki}`} target="_blank" rel="noopener noreferrer">
        <img alt="cats" src={`${img}`} />
        <div>
          <h2>{breed}</h2>
          <p>Size: {size}</p>
          <p>Hair: {hair}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
