import * as ActionCreator from "../store/action-creators";
import {adaptToClient, adaptReviewsToClient, adaptAuthInfoToClient} from "../../common";
import {APIRoute, AppRoute} from "../../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}`)
   .then(({data}) => dispatch(ActionCreator.setOffers(data.map(adaptToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.LOGIN}`)
    .then((data) => dispatch(ActionCreator.setAuthorization(adaptAuthInfoToClient(data))))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.LOGIN}`, {email, password})
    .then((data) => dispatch(ActionCreator.setAuthorization(adaptAuthInfoToClient(data))))
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`)))
);

export const fetchNearbyOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
   .then(({data}) => dispatch(ActionCreator.setNearbyOffers(data.map(adaptToClient))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
   .then(({data}) => dispatch(ActionCreator.setReviews(data.map(adaptReviewsToClient))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE}`)
   .then(({data}) => dispatch(ActionCreator.setFavorite(data.map(adaptToClient))))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.LOGOUT}`)
    .then(() => dispatch(ActionCreator.setAuthorization(null)))
);
