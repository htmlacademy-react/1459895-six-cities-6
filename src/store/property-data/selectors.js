import {createSelector} from "reselect";
import {NameSpace} from '../reducer';

export const getReviews = (state) => state[NameSpace.PROPERTY].reviews;

export const getActiveReviews = createSelector(
    getReviews,
    (reviews) => {
      const activeReviews = reviews.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

      return activeReviews.length > 10 ? activeReviews.slice(0, 10) : activeReviews;
    }
);
