import * as ActionCreator from "../store/action-creators";
import {adaptToClient, adaptReviewsToClient, adaptAuthInfoToClient} from "../../common";
import {APIRoute, AppRoute} from "../../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}`)
   .then(({data}) => dispatch(ActionCreator.setOffers(data.map(adaptToClient))))
   .catch(() => {})
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

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE}`)
   .then(({data}) => dispatch(ActionCreator.setFavorite(data.map(adaptToClient))))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.LOGOUT}`)
    .then(() => dispatch(ActionCreator.setAuthorization(null)))
);

export const fetchPropertyData = (id) => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`${APIRoute.OFFERS}/${id}`),
    api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`),
    api.get(`${APIRoute.COMMENTS}/${id}`)
  ])
    .then(([offer, nearby, reviews]) => {
      dispatch(ActionCreator.setOffer(adaptToClient(offer.data)));
      dispatch(ActionCreator.setNearbyOffers(nearby.data.map(adaptToClient)));
      dispatch(ActionCreator.setReviews(reviews.data.map(adaptReviewsToClient)));
    })
    .then(() => dispatch(ActionCreator.setIsLoaded(true)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.NOT_FOUND}`)));
};

export const updateComments = (comment, id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setDisabled(true));
  api.post(`${APIRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => dispatch(ActionCreator.setReviews(data.map(adaptReviewsToClient))))
    .catch(() => dispatch(ActionCreator.setIsError(true)))
    .finally(() => dispatch(ActionCreator.setDisabled(false)));
};
