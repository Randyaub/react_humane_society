import React from "react";
import { Link } from "react-router-dom";

import "./FooterColumn.css";

const FooterColumn = (props) => {
  return (
    <div className="c-FooterColumn">
      <h4 className="c-FooterColumn__title">{props.topics.name}</h4>
      {/*List the column subtopics*/}
      <ul>
        {props.topics.list &&
          props.topics.list.map((item, index) => {
            return (
              <li key={index}>
                <Link to="#">{item}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FooterColumn;
