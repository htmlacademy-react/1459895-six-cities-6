import React from "react";
import PropTypes from "prop-types";
import PlacesOptionsItems from "../places-options-items/places-options-items";

const PlacesOptionsList = (props) => {
  const {options} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        options.map((option, i) => <PlacesOptionsItems option={option} key={option + i}/>)
      }
    </ul>
  );
};

PlacesOptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};

export default PlacesOptionsList;
