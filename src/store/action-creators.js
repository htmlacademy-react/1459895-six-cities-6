import * as ActionType from "./actions";
import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction(ActionType.SET_CITY, (city) => {
  return {
    payload: city
  };
});
export const setOption = createAction(ActionType.SET_OPTION, (option) => {
  return {
    payload: option
  };
});
export const setAuthorization = createAction(ActionType.SET_AUTHORIZATION, (data) => {
  return {
    payload: data
  };
});
export const setOffers = createAction(ActionType.SET_OFFERS, (data) => {
  return {
    payload: data
  };
});
export const setNearbyOffers = createAction(ActionType.SET_NEABY_OFFERS, (data) => {
  return {
    payload: data
  };
});
export const setReviews = createAction(ActionType.SET_REVIEWS, (data) => {
  return {
    payload: data
  };
});
export const setFavorite = createAction(ActionType.SET_FAVORITES, (data) => {
  return {
    payload: data
  };
});
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});
export const setOffer = createAction(ActionType.SET_OFFER, (data) => {
  return {
    payload: data
  };
});
export const setIsLoaded = createAction(ActionType.SET_IS_LOADED, (isLoaded) => {
  return {
    payload: isLoaded
  };
});
export const setDisabled = createAction(ActionType.SET_DISABLED, (isDisabled) => {
  return {
    payload: isDisabled
  };
});
export const setIsError = createAction(ActionType.SET_IS_ERROR, (isError) => {
  return {
    payload: isError
  };
});

export const updateOffers = createAction(ActionType.UPDATE_OFFERS, (data) => {
  return {
    payload: data
  };
});

export const updateFavorites = createAction(ActionType.UPDATE_FAVORITES, (data) => {
  return {
    payload: data
  };
});

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (data) => {
  return {
    payload: data
  };
});

export const updateNearbyOffers = createAction(ActionType.UPDATE_NEARBY_OFFERS, (data) => {
  return {
    payload: data
  };
});

export const setIsDataLoaded = createAction(ActionType.SET_IS_DATA_LOADED, (isLoad) => {
  return {
    payload: isLoad
  };
});
