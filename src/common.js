import {WIDTH_PER_STAR} from "./const";

const getRating = (item) => {
  const itemRating = Math.round(item);
  return {width: WIDTH_PER_STAR * itemRating + `%`};
};

export {
  getRating
};
