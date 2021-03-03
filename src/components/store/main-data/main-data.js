import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOption, setOffers, updateOffers} from "../action-creators";

const initialState = {
  activeLocation: `Paris`,
  offers: [],
  option: `Popular`,
  isDataLoaded: false
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.activeLocation = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setOption, (state, action) => {
      state.option = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1)
      ];
    });
});

export {mainData};
