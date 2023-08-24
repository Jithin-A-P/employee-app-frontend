const createEmployeePayload = (employee) => ({
  ...employee,
  email: 'default@mail.com',
  password: 'password',
  status: employee.status.toLowerCase(),
  role: employee.role.toLowerCase(),
  departmentId: employee.departmentId,
  experience: Number(employee.experience),
  address: {
    ...employee.address,
    state: 'Kerala',
    country: 'India',
    pincode: '682024'
  }
});

export default createEmployeePayload;
