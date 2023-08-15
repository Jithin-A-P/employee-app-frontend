import { FC } from 'react';
import StatusEnum from '../../enums/status';
import './styles.css';

type StatusPropsType = {
  status: StatusEnum;
};

const statuses = {
  [StatusEnum.ACTIVE]: { label: StatusEnum.ACTIVE, color: '#D3F4BE' },
  [StatusEnum.INACTIVE]: { label: StatusEnum.INACTIVE, color: '#FFBFBF' },
  [StatusEnum.PROBATION]: { label: StatusEnum.PROBATION, color: '#F5ECB8' }
};

const Status: FC<StatusPropsType> = ({ status }) => {
  return (
    <div className='status' style={{ backgroundColor: statuses[status].color }}>
      {statuses[status].label}
    </div>
  );
};

export default Status;
