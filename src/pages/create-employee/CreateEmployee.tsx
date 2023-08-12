import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Select from '../../components/select/Select';
import { useState } from 'react';
import Button from '../../components/button/Button';
import './styles.css';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    joiningDate: '',
    role: '',
    status: '',
    experience: null,
    department: 'Backend',
    address: {
      line1: '',
      line2: '',
      city: ''
    }
  });

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
          <Select
            value={employee.experience}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, department: e.target.value }));
            }}
            label='Department'
            options={['Select Department', 'Backend', 'Frontend', 'UI/UX']}
          />
        </div>
        <div className='form-input'>
          <Select
            value={employee.experience}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, role: e.target.value }));
            }}
            label='Role'
            options={['Select Role', 'HR', 'admin']}
          />
        </div>
        <div className='form-input'>
          <Select
            value={employee.experience}
            onChange={(e: any) => {
              setEmployee((prevEmployee) => ({ ...prevEmployee, status: e.target.value }));
            }}
            label='Status'
            options={['Status', 'Active', 'Inactive', 'Probation']}
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
            <Button type='primary' onClick={() => {}} text='Create' />
            <Button type='secondary' onClick={() => {}} text='Cancel' />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateEmployee;
