import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import NavBarTopic from "./NavBarTopic";
import MenuTopics from "./MenuTopics";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav>
      <div className="c-NavBar">
        <div className="l-NavBar flex">
          {/*Logo*/}
          <Link to="#">
            {" "}
            <img
              className="c-NavBar__logo"
              src="logo.png"
              alt="Humane Society"
            ></img>
          </Link>
          {/*Nav Topics*/}
          <ul className="c-NavBar__menu flex">
            {MenuTopics &&
              MenuTopics.map((MenuTopic, index) => {
                return <NavBarTopic key={index} topic={MenuTopic} />;
              })}
          </ul>
          {/*Donate Button*/}
          <li className="c-NavBarTopic ">
            {" "}
            <Link to="#" className="btn c-NavBarTopic__btn">
              Donate
            </Link>{" "}
          </li>
          <div
            onClick={() => {
              setClicked(!clicked);
            }}
            className="c-NavBar__dropdown"
          >
            {clicked ? (
              <i class="fas fa-times c-NavBar__x"></i>
            ) : (
              <i className="fas fa-bars c-NavBar__bars"></i>
            )}
          </div>
        </div>
      </div>
      <MobileNavigation clicked={clicked} MenuTopics={MenuTopics} />
    </nav>
  );
};

export default NavBar;
