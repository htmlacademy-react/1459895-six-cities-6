import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import FavoriteList from "../../favorite-list/favorite-list";
import {fetchFavorites} from "../../store/api/api-actions";
import Header from "../../header/header";
import {AppRoute} from "../../../const";

const Favorites = () => {
  const dispatch = useDispatch();
  const {authInfo} = useSelector((state) => state.USER);

  useEffect(() => {
    if (authInfo) {
      dispatch(fetchFavorites());
    }
  }, [authInfo]);

  const {favorites} = useSelector((state) => state.FAVORITE);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{favorites.length && `Saved listing` || `Nothing yet saved`}</h1>
            <FavoriteList offers={favorites} type="FAVORITE"/>
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

export default Favorites;
