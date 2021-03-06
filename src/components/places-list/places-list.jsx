import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {Type} from "../../const";
import {OfferPropTypes} from "../../props";

const PlacesList = (props) => {
  const {offers, type, onChangeActiveCard, onScrollToTop, onFavoriteClick} = props;

  const listSettings = Type[type];

  return (
    <div className={`${listSettings.divClass} places__list ${type === `CITIES` ? `tabs__content` : ``}`}>
      {
        offers.map((item) =>
          <Card
            cardType={type}
            offer={item}
            key={item.id}
            onChangeActiveCard={onChangeActiveCard}
            onScrollToTop={onScrollToTop}
            onFavoriteClick={onFavoriteClick}
          />)
      }
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  type: PropTypes.string,
  onChangeActiveCard: PropTypes.func,
  onScrollToTop: PropTypes.func,
  onFavoriteClick: PropTypes.func
};

export default PlacesList;
