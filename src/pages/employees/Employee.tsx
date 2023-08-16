import HomeLayout from '../../layouts/home-layout/HomeLayout';
import SubHeader from '../../components/sub-header/SubHeader';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import Table from '../../components/table/Table';
import DeleteEmployeePopup from '../../components/delete-employee-popup/DeleteEmployeePopup';
import {
  useDeleteAnEmployeeMutation,
  useGetEmployeeListQuery
} from '../../api-client/employee-api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';

const Employee = () => {
  const navigate = useNavigate();
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

  const { data: response } = useGetEmployeeListQuery('');
  const employees = response ? response.data : null;

  const [deleteEmployeeById] = useDeleteAnEmployeeMutation();

  const handleDelete = (id) => {
    deleteEmployeeById(id);

    setPopupIsVisible(false);
  };

  return (
    <HomeLayout>
      <SubHeader title={'Employee List'}>
        <MaterialIconButton
          icon='assets/icons/plus.svg'
          onClick={() => {
            navigate('/employees/create');
          }}
          text='Create employee'
        />
      </SubHeader>
      {employees ? (
        <Table
          tableHeadValues={[
            'Employee Name',
            'Employee Id',
            'Joining Date',
            'Role',
            'Status',
            'Experience',
            'Action'
          ]}
          employees={employees}
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
      <DeleteEmployeePopup
        isVisible={popupIsVisible}
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
