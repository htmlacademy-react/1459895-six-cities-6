import * as ActionCreator from "../store/action-creators";
import {AuthorizationStatus} from "../../const";
import {adaptToClient} from "../../common";


export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
   .then(({data}) => dispatch(ActionCreator.setOffers(data.map(adaptToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const fetchNearbyOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
   .then(({data}) => dispatch(ActionCreator.setNearbyOffers(data.map(adaptToClient))))
);
