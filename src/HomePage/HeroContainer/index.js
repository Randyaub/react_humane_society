import React from "react";

import "./HeroContainer.css";

const HeroContainer = () => {
  return (
    <section className="section1">
      <div className="c-HeroContainer">
        <div className="l-HeroContainer">
          <div className="c-HeroContainer__left flex">
            <h1 className="c-HeroContainer__title">Save Lives Today</h1>
            <p className="c-HeroContainer__message">
              You can change a homeless animals world
            </p>
            <div className="c-HeroContainer__buttons">
              <button className="btn c-HeroContainer__btn">ADOPT</button>
              <button className="btn c-HeroContainer__btn">DONATE</button>
            </div>
          </div>
          <div className="c-HeroContainer__right">
            <img
              id="c-HeroContainer__image"
              src="hero-container-image.jpg"
              alt="Poor Sad Puggy"
            />
          </div>
          <div className="c-HeroContainer__bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
