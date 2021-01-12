import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import FooterAccent from "./FooterAccent";
import FooterColumn from "./FooterColumn";
import FooterTopics from "./FooterTopics";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="c-Footer">
          <div className="l-Footer">
            {/*Small About section */}
            <div id="c-Footer__about">
              <Link to="#">
                <img id="c-Footer__logo" src="logo.png" alt="logo" />
              </Link>
              <p id="c-Footer__description">
                The Humane Society takes in all domesticated animals. We strive
                to get all animals off the street and into a loving home.
              </p>
            </div>
            {/*Footer columns*/}
            {FooterTopics &&
              FooterTopics.map((FooterTopic, index) => {
                return <FooterColumn key={index} topics={FooterTopic} />;
              })}
          </div>
        </div>
      </footer>
      <FooterAccent />
    </>
  );
};

export default Footer;
