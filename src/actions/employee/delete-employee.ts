import EmployeeDispatchAction from '../../enums/employee-dispatch-action';
import { createAction } from '@reduxjs/toolkit';

const deleteEmployee = createAction<number>(EmployeeDispatchAction.DELETE);

export default deleteEmployee;
