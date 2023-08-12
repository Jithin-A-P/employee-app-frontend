import HomeLayout from '../../layouts/home-layout/HomeLayout';
import SubHeader from '../../components/sub-header/SubHeader';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import Table from '../../components/table/Table';
import employees from '../../employee';
import { useNavigate } from 'react-router-dom';
import DeleteEmployeePopup from '../../components/delete-employee-popup/DeleteEmployeePopup';
import { useState } from 'react';
import './styles.css';

const Employee = () => {
  const navigate = useNavigate();
  const [popupIsVisible, setPopupIsVisible] = useState(false);

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
        setDeletePopup={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
      />
      <DeleteEmployeePopup
        isVisible={popupIsVisible}
        setIsVisible={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
      />
    </HomeLayout>
  );
};

export default Employee;
