import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setOption} from "../store/action-creators";
import PlacesOptionsList from "../places-options-list/places-options-list";
import {PLACES_OPTIONS} from "../../const";

const PlacesSortingForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {activeOption, onChangeOption} = props;

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeOption = (item) => {
    onChangeOption(item);
    handleOptions();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleOptions}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlink="true" href="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpen && <PlacesOptionsList activeOption={activeOption} onChangeOption={handleChangeOption} options={PLACES_OPTIONS}/>
      }
    </form>
  );
};

PlacesSortingForm.propTypes = {
  activeOption: PropTypes.string,
  onChangeOption: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    activeOption: state.option,
  };
};

const mapDispatchToProps = {
  onChangeOption: setOption,
};

export {PlacesSortingForm};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSortingForm);
