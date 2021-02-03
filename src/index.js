import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {сards} from "./components/mocks/mocks";

const Settings = {
  RENT_PLACES_COUNT: 312,
};

ReactDOM.render(
    <App
      rentPlacesCount={Settings.RENT_PLACES_COUNT}
      cards={сards}/>,
    document.querySelector(`#root`)
);
