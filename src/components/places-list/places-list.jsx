import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {Type} from "../../const";
import {OfferPropTypes} from "../../props";

const PlacesList = (props) => {
  const {offers, type, onChangeActiveCard, onScrollToTop} = props;

  const listSettings = Type[type];

  return (
    <div className={`${listSettings.divClass} places__list ${type === `CITIES` ? `tabs__content` : ``}`}>

      {
        offers.length > 0 ? offers.map((item) => <Card cardType={type} offer={item} key={item.id} onChangeActiveCard={onChangeActiveCard} onScrollToTop={onScrollToTop}/>) : <p>No places to stay available</p>
      }

    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  type: PropTypes.string,
  onChangeActiveCard: PropTypes.func,
  onScrollToTop: PropTypes.func
};

export default PlacesList;
