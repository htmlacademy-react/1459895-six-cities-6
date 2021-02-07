import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import MainPage from "../pages/main-page/main-page";
import Favorites from "../pages/favorites/favorites";
import Login from "../pages/login/login";
import Property from "../pages/property/property";
import NotFound from "../pages/not-found/not-found";

const App = (props) => {
  const {rentPlacesCount, cards, cities, options} = props;

  return (
    <BrowserRouter>
      <div className="page page--gray page--main">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <MainPage
              rentPlacesCount={rentPlacesCount}
              cards={cards}
              cities={cities}
              options={options}
            />
          </Route>
          <Route path="/favorites" exact>
            <Favorites/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/offer/:id" exact>
            <Property/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentPlacesCount: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  cities: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.object)
};

export default App;
