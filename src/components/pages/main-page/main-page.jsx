import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getActiveOffers} from "../../store/main-data/selectors";
import LocationList from "../../location-list/location-list";
import Map from "../../map/map";
import PlacesList from "../../places-list/places-list";
import PlacesSortingForm from "../../places-sorting-form/places-sorting-form";
import Spinner from "../../spinner/spinner";
import Header from "../../header/header";
import {updateOffers} from "../../store/api/api-actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState();

  const {activeLocation, isDataLoaded} = useSelector((state) => state.MAIN);
  const offers = useSelector(getActiveOffers);
  const activeOffer = offers.find((offer) => offer.city.name === activeLocation);

  const handleFavorite = (id, status) => {
    dispatch(updateOffers(id, status));
  };

  if (!isDataLoaded) {
    return (
      <Spinner/>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeLocation}</b>
              <PlacesSortingForm/>
              <PlacesList type="CITIES" offers={offers} onChangeActiveCard={setActiveCard} onFavoriteClick={handleFavorite}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {
                  offers.length && <Map offers={offers} activeLocation={activeOffer} activeCard={activeCard} mapStyle="MAIN"/>
                }
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
