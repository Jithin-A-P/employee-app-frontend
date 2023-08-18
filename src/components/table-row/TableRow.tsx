import { FC, createElement } from 'react';
import { useNavigate } from 'react-router-dom';
import Status from '../status/Status';
import './styles.css';
import dateFormatter from '../../utils/date-formatter';
import getCurrentUser from '../../utils/get-current-user';

type TableRowPropsType = {
  employee: any;
  onRowClick: (id: number) => void;
  setDeletePopup?: (isVisible: boolean, id: number) => void;
};

const TableRow: FC<TableRowPropsType> = ({ employee, onRowClick, setDeletePopup }) => {
  const navigate = useNavigate();

  const employeeRender = {
    name: employee.name,
    id: employee.id,
    joiningDate: dateFormatter(employee.joiningDate),
    role: employee.role,
    status: createElement(Status, { status: employee.status }),
    experience: employee.experience + ' Years'
  };

  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  return (
    <tr onClick={() => onRowClick(employee.id)} className='table-row'>
      {Object.keys(employeeRender).map((key) => (
        <td
          className={`table-row-column admin-${adminPrivileges}`}
          key={`${employeeRender.id}-${key}`}
        >
          {employeeRender[key]}
        </td>
      ))}
      {adminPrivileges && (
        <td className='table-row-column'>
          <div className='table-row-action'>
            <img
              src='assets/icons/delete.svg'
              alt='Delete'
              onClick={(e) => {
                e.stopPropagation();
                setDeletePopup(true, employee.id);
              }}
            />
            <img
              src='assets/icons/edit.svg'
              alt='Edit'
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/employees/edit/${employee.id}`);
              }}
            />
          </div>
        </td>
      )}
    </tr>
  );
};

export default TableRow;
