import * as ActionType from "./actions";

export const setCity = (city) => ({type: ActionType.SET_CITY, payload: city});
export const setOption = (option) => ({type: ActionType.SET_OPTION, payload: option});
export const requireAuthorization = (status) => ({type: ActionType.REQUIRED_AUTHORIZATION, payload: status});
export const setOffers = (data) => ({type: ActionType.SET_OFFERS, payload: data});
export const setNearbyOffers = (data) => ({type: ActionType.SET_NEABY_OFFERS, payload: data});
