import Role from '../enums/role';
import Status from '../enums/status';
import Department from '../enums/department';

type Employee = {
  id?: string;
  name: string;
  joiningDate: string;
  role: Role;
  status: Status;
  experience: number;
  department: Department;
  address: {
    line1: string;
    line2: string;
    city: string;
  };
};

export default Employee;
