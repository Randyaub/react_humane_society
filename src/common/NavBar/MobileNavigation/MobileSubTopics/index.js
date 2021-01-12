import React from "react";

import { Link } from "react-router-dom";

import "./MobileSubTopics.css";

const MobileSubTopics = (props) => {
  return (
    <>
      <div
        className={
          props.clicked
            ? "c-MobileSubTopics c-MobileSubTopics-active"
            : "c-MobileSubTopics c-MobileSubTopics-unactive"
        }
      >
        {props.subtopics &&
          props.subtopics.map((subtopic, index) => {
            return (
              <div className="c-MobileSubTopics__item" key={index}>
                <Link to="">{subtopic.title}</Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MobileSubTopics;
