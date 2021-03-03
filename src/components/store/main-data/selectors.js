import {createSelector} from "reselect";
import {NameSpace} from '../reducer';

export const getCity = (state) => state[NameSpace.MAIN].activeLocation;
export const getOffers = (state) => state[NameSpace.MAIN].offers;
export const getOption = (state) => state[NameSpace.MAIN].option;

export const getActiveOffers = createSelector(
    [getCity, getOffers, getOption],
    (city, offers, option) => {
      const activeOffers = offers.filter((offer) => offer.city.name === city);

      switch (option) {
        case `Price: low to high`:
          return activeOffers.sort((a, b) => a.price - b.price);
        case `Price: high to low`:
          return activeOffers.sort((a, b) => b.price - a.price);
        case `Top rated first`:
          return activeOffers.sort((a, b) => b.rating - a.rating);
        default:
          return activeOffers;
      }
    }
);
