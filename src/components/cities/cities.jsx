import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getActiveOffers} from "../../store/main-data/selectors";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import PlacesSortingForm from "../places-sorting-form/places-sorting-form";
import {updateOffers} from "../../store/api/api-actions";

const Cities = () => {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState();

  const {activeLocation} = useSelector((state) => state.MAIN);
  const offers = useSelector(getActiveOffers);
  const activeOffer = offers.find((offer) => offer.city.name === activeLocation);

  const handleFavorite = (id, status) => {
    dispatch(updateOffers(id, status));
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeLocation}</b>
          <PlacesSortingForm/>
          <PlacesList
            type="CITIES"
            offers={offers}
            onChangeActiveCard={setActiveCard}
            onFavoriteClick={handleFavorite}
          />
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
  );
};

export default Cities;
