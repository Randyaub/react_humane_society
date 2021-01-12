import React from "react";

import "./MobileNavigation.css";
import MobileTopic from "./MobileTopic";

const MobileNavigation = (props) => {
  return (
    <div
      className={
        props.clicked
          ? "c-MobileNavigation__container c-MobileNavigation-active"
          : "c-MobileNavigation__container c-MobileNavigation-unactive"
      }
    >
      <div className="c-MobileNavigation flex">
        {" "}
        {props.MenuTopics &&
          props.MenuTopics.map((MenuTopic, index) => {
            return <MobileTopic key={index} MenuTopic={MenuTopic} />;
          })}
      </div>
    </div>
  );
};

export default MobileNavigation;
