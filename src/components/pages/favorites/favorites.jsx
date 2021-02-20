import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OfferPropTypes} from "../../../props";
import FavoriteList from "../../favorite-list/favorite-list";

const Favorites = (props) => {
  const {offers} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{favoriteOffers.length && `Saved listing` || `Nothing yet saved`}</h1>
            <FavoriteList offers={favoriteOffers} type="FAVORITE"/>
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
  offers: PropTypes.arrayOf(OfferPropTypes),
};

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
  };
};

export {Favorites};
export default connect(mapStateToProps)(Favorites);
