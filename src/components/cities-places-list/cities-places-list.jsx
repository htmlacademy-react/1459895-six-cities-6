import React, {useState} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {OfferPropTypes} from "../../props";


const CitiesPlacesList = (props) => {
  const [activeCard, setActiveCard] = useState(0);

  const {offers, activeLocation, onChangeSelectedOffer, cardType} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => {
          return offer.city.name === activeLocation ? <Card cardType={cardType} onChangeActiveCard={() => setActiveCard(offer.id)} onChangeSelectedOffer={onChangeSelectedOffer} offer={offer} key={offer.id}/> : ``;
        })
      }
    </div>
  );
};

CitiesPlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  activeLocation: PropTypes.string,
  onChangeSelectedOffer: PropTypes.func,
  cardType: PropTypes.string
};

export default CitiesPlacesList;
