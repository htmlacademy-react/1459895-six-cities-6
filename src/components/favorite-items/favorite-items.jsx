import React from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../props";
import Card from "../card/card";

const FavoriteItems = (props) => {
  const {city, offers, cardType} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <Card cardType={cardType} offer={offer} key={offer.id}/>)
        }
      </div>
    </li>
  );
};

FavoriteItems.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.arrayOf(OfferPropTypes),
  cardType: PropTypes.string
};

export default FavoriteItems;
