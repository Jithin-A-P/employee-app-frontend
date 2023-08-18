import { FC } from 'react';
import './styles.css';
import getCurrentUser from '../../utils/get-current-user';

type TableHeadPropsType = {
  tableHeadValues: any;
};

const TableHead: FC<TableHeadPropsType> = ({ tableHeadValues }) => {
  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  return (
    <thead>
      <tr className='table-head'>
        {tableHeadValues.map((value) => (
          <th className={`table-row-column admin-${adminPrivileges}`} key={value}>
            {value}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
