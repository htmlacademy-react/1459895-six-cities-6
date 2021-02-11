import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import FavoriteItems from "../../favorite-items/favorite-items";
import {OfferPropTypes} from "../../../props";

const Favorites = (props) => {
  const {offers, cities, onChangeSelectedOffer} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {
                cities.map((city, i) => {
                  const filteredOffers = favoriteOffers.filter((offer) => offer.city.name === city);
                  return filteredOffers.length < 1 ? `` : <FavoriteItems cardType="FAVORITE" onChangeSelectedOffer={onChangeSelectedOffer} offers={filteredOffers} city={city} key={i}/>;
                })
              }

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
};

Favorites.propTypes = {
  cities: PropTypes.array,
  offers: PropTypes.arrayOf(OfferPropTypes),
  onChangeSelectedOffer: PropTypes.func
};

export default Favorites;
