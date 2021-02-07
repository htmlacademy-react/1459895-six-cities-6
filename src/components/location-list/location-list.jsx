import React from "react";
import PropTypes from "prop-types";
import LocationItems from "../location-items/location-items";

const LocationList = (props) => {
  const {cities} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city, i) => <LocationItems city={city} key={city + i}/>)
        }
      </ul>
    </section>
  );
};

LocationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object)
};

export default LocationList;
