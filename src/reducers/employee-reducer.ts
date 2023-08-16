import Role from '../enums/role';
import Status from '../enums/status';
import addEmployee from '../actions/employee/add-employee';
import deleteEmployee from '../actions/employee/delete-employee';
import editEmployee from '../actions/employee/edit-employee';
import { createReducer } from '@reduxjs/toolkit';
import Employee from '../types/employee';
import Department from '../enums/department';

const initialState: Array<Employee> = [
  {
    name: 'Name',
    id: 1,
    joiningDate: '2012-02-01',
    role: Role.ADMIN,
    status: Status.ACTIVE,
    experience: 3,
    department: Department.ADMINISTRATION,
    address: {
      line1: '3rd street',
      line2: 'Downtown',
      city: 'Los Angeles'
    }
  },
  {
    name: 'Vishnav',
    id: 2,
    joiningDate: '2012-02-01',
    role: Role.BACKEND_ENGINEER,
    status: Status.ACTIVE,
    experience: 3,
    department: Department.ADMINISTRATION,
    address: {
      line1: '3rd street',
      line2: 'Downtown',
      city: 'Los Angeles'
    }
  },
  {
    name: 'Sruthy',
    id: 3,
    joiningDate: '2012-02-01',
    role: Role.FRONTEND_ENGINEER,
    status: Status.INACTIVE,
    experience: 3,
    department: Department.ADMINISTRATION,
    address: {
      line1: '3rd street',
      line2: 'Downtown',
      city: 'Los Angeles'
    }
  },
  {
    name: 'Jithin',
    id: 4,
    joiningDate: '2012-02-01',
    role: Role.UI_UX_DESIGNER,
    status: Status.PROBATION,
    experience: 3,
    department: Department.ADMINISTRATION,
    address: {
      line1: '3rd street',
      line2: 'Downtown',
      city: 'Los Angeles'
    }
  }
];

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    return [...state, action.payload];
  });
  builder.addCase(deleteEmployee, (state, action) => {
    return [...state.filter((emp) => emp.id != action.payload)];
  });
  builder.addCase(editEmployee, (state, action) => {
    return [...state.filter((emp) => emp.id != action.payload.id), action.payload as any];
  });
});

export default employeeReducer;
