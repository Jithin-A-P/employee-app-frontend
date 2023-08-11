import { FC } from 'react';
import './styles.css';

type StatusPropsType = {
  status: string;
};

const statuses = {
  active: { label: 'Active', color: '#D3F4BE' },
  inactive: { label: 'Inactive', color: '#FFBFBF' },
  probation: { label: 'Probation', color: '#F5ECB8' }
};

const Status: FC<StatusPropsType> = ({ status }) => {
  return (
    <div className='status' style={{ backgroundColor: statuses[status].color }}>
      {statuses[status].label}
    </div>
  );
};

export default Status;
