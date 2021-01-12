import React from "react";
import { Link } from "react-router-dom";

import "./NavBarDropDown.css";

const NavBarDropDown = (props) => {
  return (
    <>
      {/*Display the subtopics on the dropdownmenu*/}
      <div className="c-NavBarDropDown__col">
        <h3 className="c-NavBarDropDown__category">{props.title}</h3>
        <ul>
          {props.topics &&
            props.topics.map((topic, index) => {
              return (
                <li key={index}>
                  <Link to="#">{topic}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default NavBarDropDown;
