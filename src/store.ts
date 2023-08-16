import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employee-reducer';
import employeeService from './services/employee-service';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [employeeService.reducerPath]: employeeService.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), employeeService.middleware]
});

export default store;
