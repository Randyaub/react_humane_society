import React from "react";

import "./NewsSection.css";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const news = [
    {
      image: "new-contest-winner-1.jpg",
      title: "News and Events",
      subtitle: "Monthly Pet Photo Contest Winner Announced!",
      date: "August 15, 2020",
      description: `Thank you to all the participants this month in the Monthly Pet Photo Contest.
        We are excited to annouce the winner as BunBun. Congratulations!`,
      button: "All News and Events",
    },
    {
      image: "success-story-1.jpg",
      title: "Success Stories",
      subtitle: "Stromboli",
      date: "August 02, 2020",
      description: `Stromboli was very timid when we first got him. But after a week with him he is the
        most lively cat ever!! He always follows me when I walk around the house. I
        always need to look down to make sure I dont step on him...`,
      button: "More Success Stories",
    },
    {
      image: "announcements-1.jpg",
      title: "Announcements",
      subtitle: "Covid-19 Update",
      date: "July 12, 2020",
      description: `With no forseeable end to covid-19, we will no longer allow walk-ins into the building.
        However we now only allow booking times to meet with animals and adopt. Thank you for 
        understanding.`,
      button: "Previous Announcements",
    },
  ];

  return (
    <section className="section2">
      <div className="l-NewsSection">
        <NewsCard news={news} />
      </div>
    </section>
  );
};

export default NewsSection;
