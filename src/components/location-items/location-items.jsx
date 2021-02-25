import React from "react";
import PropTypes from "prop-types";
import * as ActionCreator from "../store/action-creators";
import {connect} from "react-redux";

const LocationItems = (props) => {
  const {city, activeLocation, onChangeLocation} = props;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === activeLocation && `tabs__item--active`}`}
        href="#"
        onClick={() => onChangeLocation(city)}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItems.propTypes = {
  city: PropTypes.string,
  activeLocation: PropTypes.string,
  onChangeLocation: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    activeLocation: state.city,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeLocation(city) {
    dispatch(ActionCreator.setCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationItems);
