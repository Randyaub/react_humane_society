import React from "react";
import { Link } from "react-router-dom";

import "./NewsCard.css";

const NewsCard = (props) => {
  return (
    props.news &&
    props.news.map((news, index) => {
      return (
        <div className="c-NewsCard" key={index}>
          <div className="c-NewsCard__wrapper">
            <h2 className="c-NewsCard__title">{news.title}</h2>
            <img className="c-NewsCard__image" src={news.image} alt="news" />
          </div>
          <h3 className="c-NewsCard__subtitle">{news.subtitle}</h3>
          <p className="c-NewsCard__date">{news.date}</p>
          <p className="c-NewsCard__description">{news.description}</p>
          <Link to="#" className="c-NewsCard__link">
            Read More
          </Link>
          <button className="btn c-NewsCard__btn">{news.button} </button>
        </div>
      );
    })
  );
};

export default NewsCard;
