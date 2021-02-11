import React from "react";
import PropTypes from "prop-types";

const PlacesOptionsItems = (props) => {
  const {option, activeOption, onChangeOption} = props;

  return (
    <li className={`places__option ${option === activeOption && `places__option--active`}`}
      tabIndex="0"
      onClick={() => onChangeOption(option)}
    >
      {option}
    </li>
  );
};

PlacesOptionsItems.propTypes = {
  option: PropTypes.string,
  activeOption: PropTypes.string,
  onChangeOption: PropTypes.func
};

export default PlacesOptionsItems;
