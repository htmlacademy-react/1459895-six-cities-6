import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import LocationList from "../../location-list/location-list";
import PlacesOptionsList from "../../places-options-list/places-options-list";
import Map from "../../map/map";
import PlacesList from "../../places-list/places-list";
import {OfferPropTypes} from "../../../props";

const MainPage = (props) => {
  const [activeOption, setActiveOption] = useState(`Popular`);
  const [activeCard, setActiveCard] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const {offers, cities, options, activeLocation, onChangeLocation} = props;

  const activeOffers = offers.filter((offer) => offer.city.name === activeLocation);

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList activeLocation={activeLocation} onChangeLocation={onChangeLocation} cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeOffers.length} places to stay in {activeLocation}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0" onClick={handleOptions}>
                  {activeOption}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlink="true" href="#icon-arrow-select"></use>
                  </svg>
                </span>
                {
                  isOpen && <PlacesOptionsList activeOption={activeOption} onChangeOption={setActiveOption} options={options}/>
                }
              </form>
              <PlacesList type="CITIES" offers={activeOffers} onChangeActiveCard={setActiveCard}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {
                  activeOffers.length && <Map offers={activeOffers} activeLocation={activeLocation} activeCard={activeCard} mapStyle="MAIN"/>
                }
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  cities: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string),
  activeLocation: PropTypes.string,
  onChangeLocation: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    activeLocation: state.city,
    offers: state.offers
  };
};

const mapDispatchToProps = {
  onChangeLocation: ActionCreator.setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
