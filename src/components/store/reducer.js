import * as ActionType from "./actions";
import {offers} from "../../mocks/offers";

const initialState = {
  city: `Paris`,
  offers: [...offers],
  option: `Popular`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.SET_OPTION:
      return {
        ...state,
        option: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
