import {createSelector} from "reselect";

const getCity = (state) => state.city;
const getOffers = (state) => state.offers;
const getOption = (state) => state.option;

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
