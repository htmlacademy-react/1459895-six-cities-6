import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OfferPropTypes} from "../../../props";
import FavoriteList from "../../favorite-list/favorite-list";
import {fetchFavorites} from "../../api/api-actions";
import Spinner from "../../spinner/spinner";

const Favorites = (props) => {
  const {offers, onLoadFavorites} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  useEffect(() => {
    onLoadFavorites();
  });

  if (!offers.length) {
    return (
      <Spinner/>
    );
  }

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
  onLoadFavorites: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    offers: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavorites());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
