import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Status from '../../components/status/Status';
import addressFormatter from '../../utils/address-formatter';
import dateFormatter from '../../utils/date-formatter';
import { useGetAnEmployeeQuery } from '../../api-client/employee-api';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';
import getCurrentUser from '../../utils/get-current-user';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: response } = useGetAnEmployeeQuery(id);
  const employee = response?.data;

  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  return (
    <HomeLayout>
      <SubHeader title='Employee Details'>
        {adminPrivileges && (
          <MaterialIconButton
            icon='assets/icons/edit-white.svg'
            text='Edit'
            onClick={() => {
              navigate(`/employees/edit/${id}`);
            }}
          />
        )}
      </SubHeader>
      {employee && (
        <div className='employee-details-card'>
          <div className='row'>
            <div className='column'>
              <div className='label'>Employee Name</div>
              <div className='value'>{employee.name}</div>
            </div>
            <div className='column'>
              <div className='label'>Joining Date</div>
              <div className='value'>{dateFormatter(employee.joiningDate)}</div>
            </div>
            <div className='column'>
              <div className='label'>Experience</div>
              <div className='value'>{employee.experience}</div>
            </div>
            <div className='column'>
              <div className='label'>Role</div>
              <div className='value'>{employee.role}</div>
            </div>
            <div className='column'>
              <div className='label'>Status</div>
              <div className='value'>
                <Status status={employee.status} />
              </div>
            </div>
          </div>
          <div className='divider' />
          <div className='row'>
            <div className='column'>
              <div className='label'>Address</div>
              <div className='value'>{addressFormatter(employee)}</div>
            </div>
            <div className='column'>
              <div className='label'>Employee Id</div>
              <div className='value'>{employee.id}</div>
            </div>
          </div>
        </div>
      )}
    </HomeLayout>
  );
};

export default EmployeeDetails;
