import React from "react";
import { Link } from "react-router-dom";

import "./NavBarTopic.css";
import NavBarDropDown from "./NavBarDropDown";

const NavBarTopic = (props) => {
  return (
    <li className="c-NavBarTopic">
      {" "}
      {/*Title of topic and link to*/}
      <Link to="#" className="c-NavBarTopic__link">
        {props.topic.title}
        <i className="fas fa-caret-down arrow-down"></i>{" "}
      </Link>
      {/*Pass the main topics subtopics to dropdown component*/}
      <div className="c-NavBarTopic__subtopics">
        {props.topic.submenus &&
          props.topic.submenus.map((submenu, index) => {
            return (
              <NavBarDropDown
                key={index}
                title={submenu.title}
                topics={submenu.topics}
              />
            );
          })}{" "}
      </div>
    </li>
  );
};

export default NavBarTopic;
