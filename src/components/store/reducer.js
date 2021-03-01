import * as ActionType from "./actions";

const initialState = {
  city: `Paris`,
  offers: [],
  option: `Popular`,
  authInfo: null,
  offer: {},
  isDataLoaded: false,
  isLoaded: false,
  nearbyOffers: [],
  reviews: [],
  favorites: [],
  isDisabled: false,
  isError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.SET_OPTION:
      return {
        ...state,
        option: action.payload
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.SET_AUTHORIZATION:
      return {
        ...state,
        authInfo: action.payload
      };
    case ActionType.SET_NEABY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    case ActionType.SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ActionType.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    case ActionType.SET_OFFER:
      return {
        ...state,
        offer: action.payload,
        isDataLoaded: true
      };
    case ActionType.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      };
    case ActionType.SET_DISABLED:
      return {
        ...state,
        isDisabled: action.payload
      };
    case ActionType.SET_IS_ERROR:
      return {
        ...state,
        isError: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
