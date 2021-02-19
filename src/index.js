import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";
import {reviews} from "./mocks/reviews";
import {nearbyOffers} from "./mocks/nearby-offers";
import {Settings} from "./const";
import {reducer} from "./components/store/reducer";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={Settings.CITIES}
        options={Settings.PLACES_OPTIONS}
        reviews={reviews}
        nearbyOffers={nearbyOffers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
