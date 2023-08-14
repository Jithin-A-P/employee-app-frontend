import { combineReducers } from 'redux';
import employeeReducer from './employee-reducer';

const rootReducer = combineReducers({
  employees: employeeReducer
});

export default rootReducer;
