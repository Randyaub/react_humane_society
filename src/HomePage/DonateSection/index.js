import React from "react";

import "./DonateSection.css";

const DonateSection = () => {
  return (
    <section className="section1">
      <div className="c-DonateSection">
        <img
          className="c-DonateSection__image"
          src="hero-image-1.jpg"
          alt="Two dogs sniffing the ground"
        />
        <div className="l-DonateSection">
          <div className="c-DonateSection__info">
            <h2>Donate Today!</h2>
            <button className="btn c-DonateSection__btn">
              Make A Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
