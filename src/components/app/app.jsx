import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import MainPage from "../pages/main-page/main-page";
import Favorites from "../pages/favorites/favorites";
import Login from "../pages/login/login";
import Property from "../pages/property/property";
import NotFound from "../pages/not-found/not-found";
import {OfferPropTypes, ReviewsPropTypes, NearbyOffersPropTypes} from "../../props";

const App = (props) => {
  const [activeLocation, setactiveLocation] = useState(`Amsterdam`);

  const {rentPlacesCount, offers, cities, options, reviews, nearbyOffers} = props;

  return (
    <BrowserRouter>
      <div className="page page--gray page--main">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <MainPage
              rentPlacesCount={rentPlacesCount}
              offers={offers}
              cities={cities}
              options={options}
              activeLocation={activeLocation}
              onChangeLocation={setactiveLocation}
            />
          </Route>
          <Route path="/favorites" exact>
            <Favorites
              offers={offers}
              cities={cities}
            />
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/offer/:id" exact>
            <Property
              offers={offers}
              reviews={reviews}
              nearbyOffers={nearbyOffers}
              activeLocation={activeLocation}
            />
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
  cities: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(OfferPropTypes),
  reviews: PropTypes.arrayOf(ReviewsPropTypes),
  nearbyOffers: PropTypes.arrayOf(NearbyOffersPropTypes)
};

export default App;
