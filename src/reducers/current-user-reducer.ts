import { createReducer } from '@reduxjs/toolkit';
import setCurrentUser from '../actions/set-current-user';

const currentUserReducer = createReducer({ currentUser: {} }, (builder) => {
  builder.addCase(setCurrentUser, (state, action) => action.payload);
});

export default currentUserReducer;
