import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OfferPropTypes} from "../../../props";
import FavoriteList from "../../favorite-list/favorite-list";
import {fetchFavorites} from "../../api/api-actions";
import Header from "../../header/header";
import {AppRoute} from "../../../const";
import {UserInfoPropTypes} from "../../../props";

const Favorites = (props) => {
  const {offers, onLoadFavorites, userInfo} = props;

  useEffect(() => {
    if (userInfo) {
      onLoadFavorites();
    }
  }, [userInfo]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{offers.length && `Saved listing` || `Nothing yet saved`}</h1>
            <FavoriteList offers={offers} type="FAVORITE"/>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link to={`${AppRoute.MAIN}`} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  onLoadFavorites: PropTypes.func,
  userInfo: UserInfoPropTypes
};

const mapStateToProps = (state) => {
  return {
    offers: state.favorites,
    userInfo: state.authInfo
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavorites());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
