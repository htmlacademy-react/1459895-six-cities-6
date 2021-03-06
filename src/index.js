import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {createAPI} from "./store/api/api";
import reducer from "./store/reducer";
import {fetchOffersList} from "./store/api/api-actions";
import {checkAuth} from "./store/api/api-actions";
import {redirect} from "./store/middlewares/redirect";
import * as ActionCreator from "./store/action-creators";
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI(() => store.dispatch(ActionCreator.setAuthorization(null)));

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: api
      }
    })
    .concat(redirect)
});
store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
