import React from "react";
import PropTypes from "prop-types";

const LocationItems = (props) => {
  const {city, activeLocation, onChangeLocation} = props;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === activeLocation && `tabs__item--active`}`}
        href="#"
        onClick={() => onChangeLocation(city)}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItems.propTypes = {
  city: PropTypes.string,
  activeLocation: PropTypes.string,
  onChangeLocation: PropTypes.func
};

export default LocationItems;
