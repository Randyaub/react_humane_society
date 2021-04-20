import React from "react";
import { Link } from "react-router-dom";

import "./NewsCard.css";

const NewsCard = ({ news }) => {
  return (
    news &&
    news.map((news) => {
      return (
        <div className="c-NewsCard" key={news.image}>
          <div>
            <h2 className="c-NewsCard__title">{news.title}</h2>
            <img className="c-NewsCard__image" src={news.image} alt="news" />
          </div>
          <h3 className="c-NewsCard__subtitle">{news.subtitle}</h3>
          <p>{news.description}</p>
          <p className="c-NewsCard__date">Posted: {news.date}</p>
          <Link className="c-NewsCard__link">Read More</Link>
          <button className="btn c-NewsCard__btn">{news.button}</button>
        </div>
      );
    })
  );
};

export default NewsCard;
