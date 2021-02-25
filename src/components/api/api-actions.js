import * as ActionCreator from "../store/action-creators";
import {AuthorizationStatus} from "../../const";
import {adaptToClient, adaptReviewsToClient} from "../../common";


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

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
   .then(({data}) => dispatch(ActionCreator.setReviews(data.map(adaptReviewsToClient))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
   .then(({data}) => dispatch(ActionCreator.setFavorite(data.map(adaptToClient))))
);
