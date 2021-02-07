import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {сards} from "./components/mocks/mocks";

const Settings = {
  RENT_PLACES_COUNT: 312,
  CITIES: [
    {
      name: `Paris`,
      isCheck: false
    },
    {
      name: `Cologne`,
      isCheck: false
    },
    {
      name: `Brussels`,
      isCheck: false
    },
    {
      name: `Amsterdam`,
      isCheck: true
    },
    {
      name: `Hamburg`,
      isCheck: false
    },
    {
      name: `Dusseldorf`,
      isCheck: false
    }
  ],
  PLACES_OPTIONS: [
    {
      name: `Popular`,
      isCheck: true
    },
    {
      name: `Price: low to high`,
      isCheck: false
    },
    {
      name: `Price: high to low`,
      isCheck: false
    },
    {
      name: `Top rated first`,
      isCheck: false
    }
  ]
};

ReactDOM.render(
    <App
      rentPlacesCount={Settings.RENT_PLACES_COUNT}
      cities={Settings.CITIES}
      options={Settings.PLACES_OPTIONS}
      cards={сards}/>,
    document.querySelector(`#root`)
);
