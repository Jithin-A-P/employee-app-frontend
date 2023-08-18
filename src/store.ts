import { configureStore } from '@reduxjs/toolkit';
import employeeApi from './api-client/employee-api';
import currentUserReducer from './reducers/current-user-reducer';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    [employeeApi.reducerPath]: employeeApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), employeeApi.middleware]
});

export default store;
