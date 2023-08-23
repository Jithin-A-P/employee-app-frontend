import HomeLayout from '../../layouts/home-layout/HomeLayout';
import SubHeader from '../../components/sub-header/SubHeader';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import Table from '../../components/table/Table';
import DeleteEntityPopup from '../../components/delete-employee-popup/DeleteEmployeePopup';
import {
  useDeleteAnEmployeeMutation,
  useGetEmployeeListQuery
} from '../../api-client/employee-api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';
import getCurrentUser from '../../utils/get-current-user';

const Employee = () => {
  const navigate = useNavigate();
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

  const { data: response } = useGetEmployeeListQuery('');

  const [deleteEmployeeById, { isSuccess: employeeDeleted }] = useDeleteAnEmployeeMutation();

  const handleDelete = (id) => {
    deleteEmployeeById(id);
  };

  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  const tableHeadValues = [
    'Employee Name',
    'Employee Id',
    'Joining Date',
    'Role',
    'Status',
    'Experience'
  ];

  if (adminPrivileges) tableHeadValues.push('Action');

  // const currentUser = useSelector((state: any) => state.currentUser);

  // console.log(getCurrentUser());

  useEffect(() => {
    setPopupIsVisible(false);
  }, [employeeDeleted]);

  return (
    <HomeLayout>
      <SubHeader title={'Employee List'}>
        {adminPrivileges && (
          <MaterialIconButton
            icon='assets/icons/plus.svg'
            onClick={() => {
              navigate('/employees/create');
            }}
            text='Create employee'
          />
        )}
      </SubHeader>
      {response ? (
        <Table
          tableHeadValues={tableHeadValues}
          employees={response?.data}
          onRowClick={(id: number) => {
            navigate(`/employees/${id}`);
          }}
          setDeletePopup={(isVisible, id) => {
            setPopupIsVisible(isVisible);
            setCurrentEmployeeId(id);
          }}
        />
      ) : (
        <></>
      )}
      <DeleteEntityPopup
        isVisible={popupIsVisible}
        entity='employee'
        setIsVisible={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
        handleDelete={() => {
          handleDelete(currentEmployeeId);
        }}
      />
    </HomeLayout>
  );
};

export default Employee;
