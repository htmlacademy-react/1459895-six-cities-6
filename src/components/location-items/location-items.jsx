import React from "react";
import PropTypes from "prop-types";
import {setCity} from "../store/action-creators";
import {useDispatch, useSelector} from "react-redux";

const LocationItems = ({city}) => {
  const dispatch = useDispatch();
  const {activeLocation} = useSelector((state) => state.MAIN);

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === activeLocation && `tabs__item--active`}`}
        href="#"
        onClick={() => dispatch(setCity(city))}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItems.propTypes = {
  city: PropTypes.string
};

export default LocationItems;
