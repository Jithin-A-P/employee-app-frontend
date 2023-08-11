import { FC } from 'react';
import './styles.css';

type SubHeaderPropsType = {
  title: string;
};

const SubHeader: FC<SubHeaderPropsType> = ({ title, children }) => {
  return (
    <div className='sub-header'>
      <div className='sub-header-title'>{title}</div>
      {children}
    </div>
  );
};

export default SubHeader;
