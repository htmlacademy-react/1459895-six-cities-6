import React from "react";
import PropTypes from "prop-types";
import LocationItems from "../location-items/location-items";
import {CITIES} from "../../const";

const LocationList = (props) => {
  const {activeLocation, onChangeLocation} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city, i) => <LocationItems activeLocation={activeLocation} onChangeLocation={onChangeLocation} city={city} key={i}/>)
        }
      </ul>
    </section>
  );
};

LocationList.propTypes = {
  activeLocation: PropTypes.string,
  onChangeLocation: PropTypes.func
};

export default LocationList;
