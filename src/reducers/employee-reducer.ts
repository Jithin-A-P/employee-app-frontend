const initialState = [
  {
    name: 'Name',
    id: 1,
    joiningDate: '2012-02-01',
    role: 'HR',
    status: 'active',
    experience: 3,
    address: {
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    name: 'Vishnav',
    id: 2,
    joiningDate: '2012-02-01',
    role: 'Developer',
    status: 'active',
    experience: 3
  },
  {
    name: 'Sruthy',
    id: 3,
    joiningDate: '2012-02-01',
    role: 'QA',
    status: 'inactive',
    experience: 3
  },
  {
    name: 'Jithin',
    id: 4,
    joiningDate: '2012-02-01',
    role: 'DevOps Engineer',
    status: 'probation',
    experience: 3
  }
];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE':
      return [...state, action.payload];
    case 'EMPLOYEE:DELETE':
      return [...state.filter((emp) => emp.id != action.payload)];
    default:
      return state;
  }
};

export default employeeReducer;
