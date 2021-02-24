import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";
import {createAPI} from "./components/api/api";
import {reviews} from "./mocks/reviews";
import {nearbyOffers} from "./mocks/nearby-offers";
import {reducer} from "./components/store/reducer";
import {fetchOffersList} from "./components/api/api-actions";
// import * as ActionCreator from "../src/components/store/action-creators";
// import {AuthorizationStatus} from "./const";
// import {checkAuth} from "./components/api/api-actions";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument(
                api)
        )
    )
);

store.dispatch(fetchOffersList());

// store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
        nearbyOffers={nearbyOffers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
