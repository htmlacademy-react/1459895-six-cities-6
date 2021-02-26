import * as ActionType from "./actions";

export const setCity = (city) => ({type: ActionType.SET_CITY, payload: city});
export const setOption = (option) => ({type: ActionType.SET_OPTION, payload: option});
export const setAuthorization = (data) => ({type: ActionType.SET_AUTHORIZATION, payload: data});
export const setOffers = (data) => ({type: ActionType.SET_OFFERS, payload: data});
export const setNearbyOffers = (data) => ({type: ActionType.SET_NEABY_OFFERS, payload: data});
export const setIsNearbyOffersLoaded = () => ({type: ActionType.SET_IS_NEARBY_OFFERS_LOADED});
export const setReviews = (data) => ({type: ActionType.SET_REVIEWS, payload: data});
export const setFavorite = (data) => ({type: ActionType.SET_FAVORITES, payload: data});
export const redirectToRoute = (url) => ({type: ActionType.REDIRECT_TO_ROUTE, payload: url});
