import React from "react";
import PropTypes from "prop-types";

const PropertyGallery = (props) => {
  const {image} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  );
};

PropertyGallery.propTypes = {
  image: PropTypes.string
};

export default PropertyGallery;
