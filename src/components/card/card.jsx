import React from "react";
import PropTypes from "prop-types";

const WIDTH_PER_STAR = 20;

const Card = (props) => {
  const {card} = props;
  const {isPremium, previewImage, price, title, type, rating, isFavorite} = card;

  const getRating = (item) => {
    const itemRating = Math.round(item);
    return {width: WIDTH_PER_STAR * itemRating + `%`};
  };

  return (
    <article className="cities__place-card place-card">
      {
        isPremium && <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlink="true" href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRating(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    isPremium: PropTypes.bool,
    previewImage: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number,
    isFavorite: PropTypes.bool
  })
};

export default Card;
