import React from "react";
import { Link } from "react-router-dom";

import "./AnimalCard.css";

const AnimalCard = ({ animals }) => {
  return (
    animals &&
    animals.map((animal) => {
      return (
        <div className="c-AnimalCard" key={animal.image}>
          <Link>
            <img
              className="c-AnimalCard__image"
              src={animal.image}
              alt={`${animal.name}`}
            />
          </Link>
          <h3 className="c-AnimalCard__title">{animal.name}</h3>
          <div>
            <h5 className="c-AnimalCard__text">
              <span className="c-AnimalCard-bold">Breed:</span> {animal.breed}
            </h5>
            <h5 className="c-AnimalCard__text">
              <span className="c-AnimalCard-bold">Gender:</span> {animal.gender}
            </h5>
            <h5 className="c-AnimalCard__text">
              <span className="c-AnimalCard-bold">Age: </span> {animal.age}
            </h5>
            <h5 className="c-AnimalCard__text">
              <span className="c-AnimalCard-bold">Date Available: </span>
              {animal.available}
            </h5>
          </div>
        </div>
      );
    })
  );
};

export default AnimalCard;
