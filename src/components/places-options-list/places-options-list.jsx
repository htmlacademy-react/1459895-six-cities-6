import React from "react";
import PropTypes from "prop-types";
import PlacesOptionsItems from "../places-options-items/places-options-items";

const PlacesOptionsList = (props) => {
  const {options, activeOption, onChangeOption} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        options.map((option, i) => <PlacesOptionsItems activeOption={activeOption} onChangeOption={onChangeOption} option={option} key={option + i}/>)
      }
    </ul>
  );
};

PlacesOptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  activeOption: PropTypes.string,
  onChangeOption: PropTypes.func
};

export default PlacesOptionsList;
