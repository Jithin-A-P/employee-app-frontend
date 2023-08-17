import { FC } from 'react';
import TableHead from '../table-head/TableHead';
import TableRow from '../table-row/TableRow';
import './styles.css';

type TablePropsType = {
  tableHeadValues: any;
  employees: any;
  onRowClick: (id: number) => void;
  setDeletePopup?: (isVisible: boolean, id: number) => void;
};

const Table: FC<TablePropsType> = ({ tableHeadValues, employees, onRowClick, setDeletePopup }) => {
  return (
    <table className='table'>
      <TableHead tableHeadValues={tableHeadValues} />
      <tbody className='table-body'>
        {employees.map((employee) => (
          <TableRow
            onRowClick={onRowClick}
            key={employee.id}
            employee={employee}
            setDeletePopup={setDeletePopup}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
