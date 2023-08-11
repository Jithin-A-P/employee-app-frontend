import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Status from '../../components/status/Status';
import { useParams } from 'react-router-dom';
import './styles.css';

const EmployeeDetails = () => {
  const { id } = useParams();

  console.log(id);

  const mockEmployee = {
    name: 'Name',
    id: 2,
    joiningDate: '2012-02-01',
    role: 'hr',
    status: 'active',
    experience: 3,
    address: 'address'
  };

  return (
    <HomeLayout>
      <SubHeader title='Employee Details'>
        <MaterialIconButton icon='assets/icons/edit.png' text='Edit' onClick={() => {}} />
      </SubHeader>
      <div className='employee-details-card'>
        <div className='row'>
          <div className='column'>
            <div className='label'>Employee Name</div>
            <div className='value'>{mockEmployee.name}</div>
          </div>
          <div className='column'>
            <div className='label'>Joining Date</div>
            <div className='value'>{mockEmployee.joiningDate}</div>
          </div>
          <div className='column'>
            <div className='label'>Experience</div>
            <div className='value'>{mockEmployee.experience}</div>
          </div>
          <div className='column'>
            <div className='label'>Role</div>
            <div className='value'>{mockEmployee.role}</div>
          </div>
          <div className='column'>
            <div className='label'>Status</div>
            <div className='value'>
              <Status status={mockEmployee.status} />
            </div>
          </div>
        </div>
        <div className='divider' />
        <div className='row'>
          <div className='column'>
            <div className='label'>Address</div>
            <div className='value'>{mockEmployee.address}</div>
          </div>
          <div className='column'>
            <div className='label'>Employee Id</div>
            <div className='value'>{mockEmployee.id}</div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default EmployeeDetails;
