import { FC } from 'react';
import NavItem from '../navitem/Navitem';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Sidebar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='sidebar'>
      <NavItem
        icon='assets/icons/employees.svg'
        title='Employee List'
        onClick={() => {
          navigate('/employees');
        }}
      />
    </div>
  );
};

export default Sidebar;
