import React, {useState} from "react";
import PropTypes from "prop-types";
import LocationList from "../../location-list/location-list";
import PlacesOptionsList from "../../places-options-list/places-options-list";
import CitiesPlacesList from "../../cities-places-list/cities-places-list";
import Map from "../../map/map";
import {OfferPropTypes} from "../../../props";

const MainPage = (props) => {
  const [activeLocation, setactiveLocation] = useState(`Amsterdam`);
  const [activeOption, setActiveOption] = useState(`Popular`);
  const [activeCard, setActiveCard] = useState(0);

  const {rentPlacesCount, offers, cities, options} = props;

  return (
    <>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList activeLocation={activeLocation} onChangeLocation={setactiveLocation} cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentPlacesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  {activeOption}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlink="true" href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <PlacesOptionsList activeOption={activeOption} onChangeOption={setActiveOption} options={options}/>
              </form>
              <CitiesPlacesList cardType="CITIES" offers={offers} activeLocation={activeLocation} onChangeActiveCard={setActiveCard}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} activeLocation={activeLocation} activeCard={activeCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

MainPage.propTypes = {
  rentPlacesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes),
  cities: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string)
};

export default MainPage;
