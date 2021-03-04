import {createReducer} from '@reduxjs/toolkit';
import {setAuthorization} from "../action-creators";

const initialState = {
  authInfo: null
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(setAuthorization, (state, action) => {
    state.authInfo = action.payload;
  });
});

export {user};
