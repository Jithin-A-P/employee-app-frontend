import Employee from '../../types/employee';
import EmployeeDispatchAction from '../../enums/employee-dispatch-action';
import { createAction } from '@reduxjs/toolkit';

const editEmployee = createAction<Employee>(EmployeeDispatchAction.EDIT);

export default editEmployee;
