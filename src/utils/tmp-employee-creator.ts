const createEmployeePayload = (employee) => ({
  ...employee,
  status: employee.status.toLowerCase(),
  role: employee.role.toLowerCase(),
  departmentId: employee.departmentId,
  experience: Number(employee.experience),
  address: {
    ...employee.address
  }
});

export default createEmployeePayload;
