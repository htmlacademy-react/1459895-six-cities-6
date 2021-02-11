import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getRating} from "../../common";
import {OfferPropTypes} from "../../props";
import {CardType} from "../../const";

const Card = (props) => {

  const {offer, onChangeActiveCard, onChangeSelectedOffer, cardType} = props;
  const {isPremium, previewImage, price, title, type, rating, isFavorite, id} = offer;

  const cardSettings = CardType[cardType];

  return (
    <article className={`${cardSettings.article} place-card`} onMouseOver={onChangeActiveCard} onClick={() => onChangeSelectedOffer(id - 1)}>
      {
        isPremium && <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${cardSettings.img.class}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={`${cardSettings.img.width}`} height={`${cardSettings.img.height}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${cardSettings.info} place-card__info`}>
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: OfferPropTypes,
  onChangeActiveCard: PropTypes.func,
  onChangeSelectedOffer: PropTypes.func,
  cardType: PropTypes.string
};

export default Card;
