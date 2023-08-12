import { FC } from 'react';
import './styles.css';
import Status from '../status/Status';

type TableRowPropsType = {
  employee: any;
  onRowClick: (id: number) => void;
};

const TableRow: FC<TableRowPropsType> = ({ employee, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick(employee.id)} className='table-row'>
      {Object.keys(employee).map((key) => (
        <td className='table-row-column' key={`${employee.id}-${key}`}>
          {(key === 'status' && <Status status={employee[key]} />) || ('status' && employee[key])}
        </td>
      ))}
      <td className='table-row-column'>
        <div className='table-row-action'>
          <img style={{ color: '#fA4242' }} src='assets/icons/delete.svg' alt='Delete' />
          <img style={{ color: '#10AAC0' }} src='assets/icons/edit.svg' alt='Edit' />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
