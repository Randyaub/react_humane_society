import React from "react";

import "./NewAnimalsSection.css";
import AnimalCard from "./AnimalCard";

const NewAnimalsSection = () => {
  const animals = [
    {
      image: "animal-1.jpg",
      name: "Echo",
      breed: "Siberian Husky",
      gender: "Male",
      age: "3 years, 8 months",
      available: "08/02/2020",
    },
    {
      image: "animal-2.jpg",
      name: "Coleman",
      breed: "All American Mixed Breed",
      gender: "Male",
      age: "6 year, 11 months",
      available: "07/29/2020",
    },
    {
      image: "animal-3.jpg",
      name: "Dexter",
      breed: "Domestic Short Hair",
      gender: "Male",
      age: "1 year, 5 months",
      available: "08/19/2020",
    },
    {
      image: "animal-4.jpg",
      name: "Falco",
      breed: "Cinnamon",
      gender: "Male",
      age: "1 year, 2 months",
      available: "08/08/2020",
    },
  ];

  return (
    <section className="section2">
      <div className="c-NewAnimalSection">
        <div className="l-NewAnimalSection__title">
          <h2 className="c-NewAnimalSection__title">New Arrivals</h2>
        </div>
        <div className="l-NewAnimalSection">
          <AnimalCard animals={animals} />
        </div>
      </div>
    </section>
  );
};

export default NewAnimalsSection;
