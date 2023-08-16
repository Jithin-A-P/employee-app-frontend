import Employee from '../types/employee';

const addressFormatter = (employee: Employee): string => {
  const address = employee.address;

  return `${address.line1}, ${address.line2}, ${address.city}`;
};

export default addressFormatter;
