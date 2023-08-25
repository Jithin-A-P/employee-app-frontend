import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';
import { useEditAnEmployeeMutation, useGetAnEmployeeQuery } from '../../api-client/employee-api';
import createEmployeePayload from '../../utils/tmp-employee-creator';
import { useGetDepartmentsQuery } from '../../api-client/department-api';
import { useGetRolesQuery } from '../../api-client/role-api';
import { toast } from 'react-toastify';

const EditEmployee = () => {
  const [employee, setEmployee] = useState(undefined);

  const { id } = useParams();

  const { data: response } = useGetAnEmployeeQuery(id);
  const [editEmployee, { isSuccess, isError, error }] = useEditAnEmployeeMutation();
  const { data: departments } = useGetDepartmentsQuery('');
  const { data: roles } = useGetRolesQuery('');

  const departmentOptions = departments?.data.map((department) => ({
    id: department.id,
    name: department.name
  }));

  let roleOptions = roles?.data.map((role) => ({ id: role, name: role }));

  const statusOptions = [
    { id: 'active', name: 'Active' },
    { id: 'inactive', name: 'Inactive' },
    { id: 'probation', name: 'Probation' }
  ];

  const navigate = useNavigate();

  const handleEditEmployee = () => {
    editEmployee({ id: id, body: createEmployeePayload(employee) });
  };

  const notifySuccess = (action: string) => toast.success(`Successfully ${action} Employee`);
  const notifyError = (error: string) => toast.error(error);

  useEffect(() => {
    setEmployee(response?.data);
  }, [response]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        notifyError('Edit Employee Failed!');
      }, 100);
      console.log(error);
    }
    if (isSuccess) {
      setTimeout(() => {
        notifySuccess('edited');
      }, 100);
      navigate(-1);
    }
  }, [isSuccess, isError]);

  return (
    <HomeLayout>
      <SubHeader title='Edit Employee' />
      {employee && (
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
              type='text'
              value={employee.email}
              onChange={(e: any) => {
                setEmployee((prevEmployee) => ({ ...prevEmployee, email: e.target.value }));
              }}
              label='Email'
              placeholder='Email'
            />
          </div>
          <div className='form-input'>
            <Input
              type='text'
              value={employee.password}
              onChange={(e: any) => {
                setEmployee((prevEmployee) => ({ ...prevEmployee, password: e.target.value }));
              }}
              label='Password'
              placeholder='Password'
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
                  setEmployee((prevEmployee) => ({
                    ...prevEmployee,
                    departmentId: e.target.value
                  }));
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
              <div className='form-input'>
                <Input
                  type='text'
                  value={employee.address.state}
                  onChange={(e: any) => {
                    setEmployee((prevEmployee) => ({
                      ...prevEmployee,
                      address: { ...employee.address, state: e.target.value }
                    }));
                  }}
                  label=''
                  placeholder='State'
                />
              </div>
              <div className='form-input'>
                <Input
                  type='text'
                  value={employee.address.country}
                  onChange={(e: any) => {
                    setEmployee((prevEmployee) => ({
                      ...prevEmployee,
                      address: { ...employee.address, country: e.target.value }
                    }));
                  }}
                  label=''
                  placeholder='Country'
                />
              </div>
              <div className='form-input'>
                <Input
                  type='text'
                  value={employee.address.pincode}
                  onChange={(e: any) => {
                    setEmployee((prevEmployee) => ({
                      ...prevEmployee,
                      address: { ...employee.address, pincode: e.target.value }
                    }));
                  }}
                  label=''
                  placeholder='Pincode'
                />
              </div>
              <div className='form-button'>
                <Button style='primary' onClick={handleEditEmployee} text='Save' />
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
        </div>
      )}
    </HomeLayout>
  );
};

export default EditEmployee;
