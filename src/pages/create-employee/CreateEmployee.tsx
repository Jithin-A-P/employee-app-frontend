import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import Status from '../../enums/status';
import Role from '../../enums/role';
import Department from '../../enums/department';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Employee from '../../types/employee';
import { useAddAnEmployeeMutation } from '../../api-client/employee-api';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    joiningDate: '',
    role: '',
    status: '',
    experience: undefined,
    department: '',
    address: {
      line1: '',
      line2: '',
      city: ''
    }
  });

  const navigate = useNavigate();
  const [login, { data, isSuccess: isEmployeeCreated, isError, error }] =
    useAddAnEmployeeMutation();

  const handleCreate = () => {
    login(employee as Employee);
    if (isError) console.log(error);
    if (isEmployeeCreated) {
      console.log(data);
      navigate('/employees');
    }
  };

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
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                experience: Number(e.target.value)
              }));
            }}
            label='Experience'
            placeholder='Experience'
          />
        </div>
        <div className='form-input'>
          <Select
            value={employee.department}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, department: e.target.value }));
            }}
            label='Department'
            options={['Select Department', ...Object.values(Department)]}
          />
        </div>
        <div className='form-input'>
          <Select
            value={employee.role}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, role: e.target.value }));
            }}
            label='Role'
            options={['Select Role', ...Object.values(Role)]}
          />
        </div>
        <div className='form-input'>
          <Select
            value={employee.status}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, status: e.target.value }));
            }}
            label='Status'
            options={['Status', ...Object.values(Status)]}
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
            <Button style='primary' onClick={handleCreate} text='Create' />
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
