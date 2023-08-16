import EmployeeDispatchAction from '../../enums/employee-dispatch-action';
import { createAction } from '@reduxjs/toolkit';

const addEmployee = createAction<any>(EmployeeDispatchAction.CREATE);

export default addEmployee;
