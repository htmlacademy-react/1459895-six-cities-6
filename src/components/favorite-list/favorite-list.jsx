import React from "react";
import PropTypes from "prop-types";
import FavoriteItems from "../favorite-items/favorite-items";
import {OfferPropTypes} from "../../props";
import {CITIES} from "../../const";

const FavoriteList = (props) => {
  const {offers, type} = props;

  return (
    <ul className="favorites__list">

      {
        CITIES.map((city, i) => {
          const filteredOffers = offers.filter((offer) => offer.city.name === city);
          return filteredOffers.length < 1 ? `` : <FavoriteItems type={type} offers={filteredOffers} city={city} key={i}/>;
        })
      }

    </ul>
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  type: PropTypes.string
};

export default FavoriteList;
