import React from "react";
import PropTypes from "prop-types";

const LocationItems = (props) => {
  const {city} = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${city.isCheck && `tabs__item--active`}`} href="#">
        <span>{city.name}</span>
      </a>
    </li>
  );
};

LocationItems.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    isCheck: PropTypes.bool
  })
};

export default LocationItems;
