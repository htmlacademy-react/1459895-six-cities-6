import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {offers} from "./mocks/offers";
import {reviews} from "./mocks/reviews";
import {nearbyOffers} from "./mocks/nearby-offers";
import {Settings} from "./const";


ReactDOM.render(
    <App
      rentPlacesCount={Settings.RENT_PLACES_COUNT}
      cities={Settings.CITIES}
      options={Settings.PLACES_OPTIONS}
      offers={offers}
      reviews={reviews}
      nearbyOffers={nearbyOffers}/>,
    document.querySelector(`#root`)
);
