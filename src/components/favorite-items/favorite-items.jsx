import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import {OfferPropTypes} from "../../props";
import {useDispatch} from "react-redux";
import {updateFavorites} from "../store/api/api-actions";

const FavoriteItems = (props) => {
  const dispatch = useDispatch();
  const {city, offers, type} = props;

  const handleFavorite = (id, status) => {
    dispatch(updateFavorites(id, status));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <PlacesList offers={offers} type={type} onFavoriteClick={handleFavorite}/>
    </li>
  );
};

FavoriteItems.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.arrayOf(OfferPropTypes),
  type: PropTypes.string
};

export default FavoriteItems;
