import * as ActionCreator from "./action-creators";
import * as ActionType from "./actions";
import {TEST_DATA} from "../const";


describe(`Action creators work correctly`, () => {
  it(`setCity action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: TEST_DATA
    };

    expect(ActionCreator.setCity(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setOption action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OPTION,
      payload: TEST_DATA
    };

    expect(ActionCreator.setOption(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setAuthorization action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION,
      payload: TEST_DATA
    };

    expect(ActionCreator.setAuthorization(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFERS,
      payload: TEST_DATA
    };

    expect(ActionCreator.setOffers(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setNearbyOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_NEABY_OFFERS,
      payload: TEST_DATA
    };

    expect(ActionCreator.setNearbyOffers(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setReviews action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_REVIEWS,
      payload: TEST_DATA
    };

    expect(ActionCreator.setReviews(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setFavorite action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITES,
      payload: TEST_DATA
    };

    expect(ActionCreator.setFavorite(TEST_DATA)).toEqual(expectedAction);
  });
  it(`redirectToRoute action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: TEST_DATA
    };

    expect(ActionCreator.redirectToRoute(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFER,
      payload: TEST_DATA
    };

    expect(ActionCreator.setOffer(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setIsLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_LOADED,
      payload: TEST_DATA
    };

    expect(ActionCreator.setIsLoaded(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setDisabled action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_DISABLED,
      payload: TEST_DATA
    };

    expect(ActionCreator.setDisabled(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setIsError action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_ERROR,
      payload: TEST_DATA
    };

    expect(ActionCreator.setIsError(TEST_DATA)).toEqual(expectedAction);
  });
  it(`updateOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: TEST_DATA
    };

    expect(ActionCreator.updateOffers(TEST_DATA)).toEqual(expectedAction);
  });
  it(`updateOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: TEST_DATA
    };

    expect(ActionCreator.updateOffer(TEST_DATA)).toEqual(expectedAction);
  });
  it(`updateFavorites action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITES,
      payload: TEST_DATA
    };

    expect(ActionCreator.updateFavorites(TEST_DATA)).toEqual(expectedAction);
  });
  it(`updateNearbyOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_NEARBY_OFFERS,
      payload: TEST_DATA
    };

    expect(ActionCreator.updateNearbyOffers(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setIsDataLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_DATA_LOADED,
      payload: TEST_DATA
    };

    expect(ActionCreator.setIsDataLoaded(TEST_DATA)).toEqual(expectedAction);
  });
});
