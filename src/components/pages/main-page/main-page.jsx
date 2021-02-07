import React from "react";
import PropTypes from "prop-types";
import Card from "../../card/card";
import LocationList from "../../location-list/location-list";
import PlacesOptionsList from "../../places-options-list/places-options-list";

const MainPage = (props) => {
  const {rentPlacesCount, cards, cities, options} = props;

  return (
    <>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentPlacesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlink="true" href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <PlacesOptionsList options={options}/>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {
                  cards.map((card) => <Card card={card} key={card.id}/>)
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

MainPage.propTypes = {
  rentPlacesCount: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  cities: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.object)
};

export default MainPage;
