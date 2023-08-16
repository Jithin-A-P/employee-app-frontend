import HomeLayout from '../../layouts/home-layout/HomeLayout';
import SubHeader from '../../components/sub-header/SubHeader';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import Table from '../../components/table/Table';
import DeleteEmployeePopup from '../../components/delete-employee-popup/DeleteEmployeePopup';
import EmployeeDispatchAction from '../../enums/employee-dispatch-action';
import { useGetEmployeesQuery } from '../../services/employee-service';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { /*useSelector,*/ useDispatch } from 'react-redux';
import './styles.css';

const Employee = () => {
  const navigate = useNavigate();
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

  // const employees = useSelector((state: any) => {
  //   return state.employees;
  // });

  const { data: employees /*, isLoading, isSuccess, isError, error*/ } = useGetEmployeesQuery('');

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({
      type: EmployeeDispatchAction.DELETE,
      payload: id
    });
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
