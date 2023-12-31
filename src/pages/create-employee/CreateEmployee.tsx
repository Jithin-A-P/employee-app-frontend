import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useAddAnEmployeeMutation } from '../../api-client/employee-api';
import createEmployeePayload from '../../utils/tmp-employee-creator';
import { useGetDepartmentsQuery } from '../../api-client/department-api';
import { useGetRolesQuery } from '../../api-client/role-api';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    joiningDate: '',
    role: '',
    status: '',
    experience: undefined,
    departmentId: '',
    address: {
      line1: '',
      line2: '',
      city: ''
    }
  });

  const navigate = useNavigate();

  const [createEmployee, { isSuccess, isError, error }] = useAddAnEmployeeMutation();
  const { data: departments } = useGetDepartmentsQuery('');
  const { data: roles } = useGetRolesQuery('');

  let departmentOptions = departments?.data.map((department) => ({
    id: department.id,
    name: department.name
  }));

  let roleOptions = roles?.data.map((role) => ({ id: role, name: role }));

  let statusOptions = [
    { id: 'active', name: 'Active' },
    { id: 'inactive', name: 'Inactive' },
    { id: 'probation', name: 'Probation' }
  ];

  const handleCreateEmployee = () => {
    createEmployee(createEmployeePayload(employee));
  };

  useEffect(() => {
    if (isSuccess) navigate(-1);
    if (isError) console.log(error);
  }, [isSuccess, isError]);

  return (
    <HomeLayout>
      <SubHeader title='Create Employee' />
      <div className='create-employee-form'>
        <div className='form-input'>
          <Input
            type='text'
            value={employee.name}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, name: e.target.value }));
            }}
            label='Employee Name'
            placeholder='Employee Name'
          />
        </div>
        <div className='form-input'>
          <Input
            type='date'
            value={employee.joiningDate}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, joiningDate: e.target.value }));
            }}
            label='Joining Date'
            placeholder='Joining Date'
          />
        </div>
        <div className='form-input'>
          <Input
            type='number'
            value={employee.experience}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, experience: e.target.value }));
            }}
            label='Experience'
            placeholder='Experience'
          />
        </div>
        <div className='form-input'>
          {departmentOptions && (
            <Select
              value={employee.departmentId}
              onChange={(e: any) => {
                setEmployee((prevEmployee) => ({ ...prevEmployee, departmentId: e.target.value }));
              }}
              label='Department'
              options={departmentOptions}
            />
          )}
        </div>
        <div className='form-input'>
          {roleOptions && (
            <Select
              value={employee.role}
              onChange={(e: any) => {
                setEmployee((prevEmployee) => ({ ...prevEmployee, role: e.target.value }));
              }}
              label='Role'
              options={roleOptions}
            />
          )}
        </div>
        <div className='form-input'>
          <Select
            value={employee.status}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, status: e.target.value }));
            }}
            label='Status'
            options={statusOptions}
          />
        </div>
        <div className='form-address-inputs'>
          <div className='form-input'>
            <Input
              type='text'
              value={employee.address.line1}
              onChange={(e: any) => {
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  address: { ...employee.address, line1: e.target.value }
                }));
              }}
              label='Address'
              placeholder='Address Line 1'
            />
          </div>
          <div className='form-input'>
            <Input
              type='text'
              value={employee.address.line2}
              onChange={(e: any) => {
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  address: { ...employee.address, line2: e.target.value }
                }));
              }}
              label=''
              placeholder='Address Line 2'
            />
          </div>
          <div className='form-input'>
            <Input
              type='text'
              value={employee.address.city}
              onChange={(e: any) => {
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  address: { ...employee.address, city: e.target.value }
                }));
              }}
              label=''
              placeholder='City'
            />
          </div>
          <div className='form-button'>
            <Button style='primary' onClick={handleCreateEmployee} text='Create' />
            <Button
              style='secondary'
              onClick={() => {
                navigate(-1);
              }}
              text='Cancel'
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateEmployee;
