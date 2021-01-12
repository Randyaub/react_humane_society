import React, { useState } from "react";

import MobileSubTopics from "../MobileSubTopics";

import "./MobileTopic.css";

const MobileTopic = (props) => {
  const [linkClicked, setLinkClicked] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setLinkClicked(!linkClicked);
        }}
        className="c-MobileTopic"
      >
        <span>{props.MenuTopic.title}</span>
      </div>
      <MobileSubTopics
        clicked={linkClicked}
        subtopics={props.MenuTopic.submenus}
      />
    </>
  );
};

export default MobileTopic;
