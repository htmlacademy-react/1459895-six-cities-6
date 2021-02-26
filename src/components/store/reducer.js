import * as ActionType from "./actions";

const initialState = {
  city: `Paris`,
  offers: [],
  option: `Popular`,
  authInfo: null,
  isDataLoaded: false,
  isNeabyOffersLoaded: false,
  nearbyOffers: [],
  reviews: [],
  favorites: [],
  isFavoritesLoaded: false,
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
        isNeabyOffersLoaded: true
      };
    case ActionType.SET_IS_NEARBY_OFFERS_LOADED:
      return {
        ...state,
        isNeabyOffersLoaded: false
      };
    case ActionType.SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ActionType.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        isFavoritesLoaded: true
      };
    default:
      return state;
  }
};

export {reducer};
