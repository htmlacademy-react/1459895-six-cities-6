import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setCity} from "../../store/action-creators";
import {getActiveOffers} from "../../store/selectors";
import LocationList from "../../location-list/location-list";
import Map from "../../map/map";
import PlacesList from "../../places-list/places-list";
import {OfferPropTypes} from "../../../props";
import PlacesSortingForm from "../../places-sorting-form/places-sorting-form";

const MainPage = (props) => {
  const [activeCard, setActiveCard] = useState(0);

  const {activeOffers, activeLocation, onChangeLocation} = props;

  return (
    <>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList activeLocation={activeLocation} onChangeLocation={onChangeLocation}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeOffers.length} places to stay in {activeLocation}</b>
              <PlacesSortingForm/>
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
  activeOffers: PropTypes.arrayOf(OfferPropTypes),
  activeLocation: PropTypes.string,
  onChangeLocation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    activeLocation: state.city,
    activeOffers: getActiveOffers(state),
  };
};

const mapDispatchToProps = {
  onChangeLocation: setCity,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
