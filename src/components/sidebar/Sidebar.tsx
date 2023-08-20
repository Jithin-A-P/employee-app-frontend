import { FC } from 'react';
import NavItem from '../navitem/Navitem';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import NavItemDropDown from '../navitem-dropdown/navitem-dropdown';

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
      <NavItemDropDown icon='assets/img/book.png' title='KV Library' />
    </div>
  );
};

export default Sidebar;
