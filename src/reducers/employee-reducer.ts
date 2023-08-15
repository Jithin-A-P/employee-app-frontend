import Role from '../enums/role';
import Status from '../enums/status';
import EmployeeReducerAction from '../enums/employee-reducer-action';

const initialState = [
  {
    name: 'Name',
    id: 1,
    joiningDate: '2012-02-01',
    role: Role.ADMIN,
    status: Status.ACTIVE,
    experience: 3,
    address: 'Address'
  },
  {
    name: 'Vishnav',
    id: 2,
    joiningDate: '2012-02-01',
    role: Role.BACKEND_ENGINEER,
    status: Status.ACTIVE,
    experience: 3
  },
  {
    name: 'Sruthy',
    id: 3,
    joiningDate: '2012-02-01',
    role: Role.FRONTEND_ENGINEER,
    status: Status.INACTIVE,
    experience: 3
  },
  {
    name: 'Jithin',
    id: 4,
    joiningDate: '2012-02-01',
    role: Role.UI_UX_DESIGNER,
    status: Status.PROBATION,
    experience: 3
  }
];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EmployeeReducerAction.CREATE:
      return [...state, action.payload];
    case EmployeeReducerAction.DELETE:
      return [...state.filter((emp) => emp.id != action.payload)];
    default:
      return state;
  }
};

export default employeeReducer;
