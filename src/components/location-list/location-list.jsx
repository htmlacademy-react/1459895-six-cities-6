import React from "react";
import PropTypes from "prop-types";
import LocationItems from "../location-items/location-items";

const LocationList = (props) => {
  const {cities, activeLocation, onChangeLocation} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city, i) => <LocationItems activeLocation={activeLocation} onChangeLocation={onChangeLocation} city={city} key={i}/>)
        }
      </ul>
    </section>
  );
};

LocationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  activeLocation: PropTypes.string,
  onChangeLocation: PropTypes.func
};

export default LocationList;
