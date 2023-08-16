import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import Department from '../../enums/department';
import Status from '../../enums/status';
import Role from '../../enums/role';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';

const EditEmployee = () => {
  const [employee, setEmployee] = useState({
    name: 'Initial Name',
    joiningDate: '2023-02-23',
    role: 'Admin',
    status: 'Active',
    experience: 2,
    department: 'IT',
    address: {
      line1: 'smartcity',
      line2: 'kakkanad',
      city: 'kochi'
    }
  });

  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <HomeLayout>
      <SubHeader title='Edit Employee' />
      <div className='edit-employee-form'>
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
          <Select
            value={employee.department}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, department: e.target.value }));
            }}
            label='Department'
            options={Object.values(Department)}
          />
        </div>
        <div className='form-input'>
          <Select
            value={employee.role}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, role: e.target.value }));
            }}
            label='Role'
            options={Object.values(Role)}
          />
        </div>
        <div className='form-input'>
          <Select
            value={employee.status}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, status: e.target.value }));
            }}
            label='Status'
            options={Object.values(Status)}
          />
        </div>
        <div className='form-address-inputs'>
          <div>
            <div className='form-input'>
              <Input
                type='text'
                value={employee.address.line1}
                onChange={(e: any) => {
                  setEmployee((prevEmployee) => ({
                    ...prevEmployee,
                    address: { ...prevEmployee.address, line1: e.target.value }
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
                    address: { ...prevEmployee.address, line2: e.target.value }
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
                    address: { ...prevEmployee.address, city: e.target.value }
                  }));
                }}
                label=''
                placeholder='City'
              />
            </div>
            <div className='form-button'>
              <Button style='primary' onClick={() => {}} text='Save' />
              <Button
                style='secondary'
                onClick={() => {
                  navigate(-1);
                }}
                text='Cancel'
              />
            </div>
          </div>
          <div className='form-input id-field'>
            <Input
              type='text'
              value={id}
              onChange={() => {}}
              label='Employee ID'
              placeholder='Employee ID'
              inactive='inactive'
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default EditEmployee;
