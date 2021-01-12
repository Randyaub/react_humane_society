import React from "react";
import { Link } from "react-router-dom";

import "./AnimalCard.css";

const AnimalCard = (props) => {
  return (
    props.animal &&
    props.animal.map((animal, index) => {
      return (
        <div className="c-AnimalCard" key={index}>
          <Link to="#">
            <img className="c-AnimalCard__image" src={animal.image} alt="" />
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
              <span className="c-AnimalCard-bold">Date Available: </span>{" "}
              {animal.available}
            </h5>
          </div>
        </div>
      );
    })
  );
};

export default AnimalCard;
