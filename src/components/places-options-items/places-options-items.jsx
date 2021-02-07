import React from "react";
import PropTypes from "prop-types";

const PlacesOptionsItems = (props) => {
  const {option} = props;

  return (
    <li className={`places__option ${option.isCheck && `places__option--active`}`} tabIndex="0">{option.name}</li>
  );
};

PlacesOptionsItems.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string,
    isCheck: PropTypes.bool
  })
};

export default PlacesOptionsItems;
