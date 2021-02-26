import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";
import {createAPI} from "./components/api/api";
import {reducer} from "./components/store/reducer";
import {fetchOffersList} from "./components/api/api-actions";
import {checkAuth} from "./components/api/api-actions";
import {redirect} from "../src/components/store/middlewares/redirect";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);
store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
