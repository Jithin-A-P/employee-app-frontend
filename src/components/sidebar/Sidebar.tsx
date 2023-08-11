import { FC } from 'react';
import NavItem from '../navitem/Navitem';
import './styles.css';

const Sidebar: FC = () => {
  return (
    <div className='sidebar'>
      <NavItem icon='assets/icons/employees.svg' title='Employee List' />
    </div>
  );
};

export default Sidebar;
