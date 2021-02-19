import React from "react";
import PropTypes from "prop-types";
import FavoriteItems from "../favorite-items/favorite-items";
import {OfferPropTypes} from "../../props";

const FavoriteList = (props) => {
  const {cities, offers, type} = props;

  return (
    <ul className="favorites__list">

      {
        cities.map((city, i) => {
          const filteredOffers = offers.filter((offer) => offer.city.name === city);
          return filteredOffers.length < 1 ? `` : <FavoriteItems type={type} offers={filteredOffers} city={city} key={i}/>;
        })
      }

    </ul>
  );
};

FavoriteList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(OfferPropTypes),
  type: PropTypes.string
};

export default FavoriteList;
