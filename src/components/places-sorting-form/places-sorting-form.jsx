import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setOption} from "../store/action-creators";
import PlacesOptionsList from "../places-options-list/places-options-list";
import {PLACES_OPTIONS} from "../../const";

const PlacesSortingForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {option} = useSelector((state) => state.MAIN);
  const dispatch = useDispatch();

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeOption = (item) => {
    dispatch(setOption(item));
    handleOptions();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleOptions}>
        {option}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlink="true" href="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpen && <PlacesOptionsList activeOption={option} onChangeOption={handleChangeOption} options={PLACES_OPTIONS}/>
      }
    </form>
  );
};

export default PlacesSortingForm;
