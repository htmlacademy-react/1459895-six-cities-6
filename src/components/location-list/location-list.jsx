import React from "react";
import LocationItems from "../location-items/location-items";
import {CITIES} from "../../const";

const LocationList = () => {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city, i) => <LocationItems city={city} key={city + i}/>)
        }
      </ul>
    </section>
  );
};

export default LocationList;
