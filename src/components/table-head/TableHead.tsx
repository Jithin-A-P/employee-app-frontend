import { FC } from 'react';
import './styles.css';

type TableHeadPropsType = {
  tableHeadValues: any;
};

const TableHead: FC<TableHeadPropsType> = ({ tableHeadValues }) => {
  return (
    <tr className='table-head'>
      {tableHeadValues.map((value) => (
        <th className='table-head-column' key={value}>
          {value}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
