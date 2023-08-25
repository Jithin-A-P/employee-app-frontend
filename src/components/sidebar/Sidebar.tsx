import { FC } from 'react';
import NavItem from '../navitem/Navitem';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import NavItemDropDown from '../navitem-dropdown/navitem-dropdown';
import getCurrentUser from '../../utils/get-current-user';

const Sidebar: FC = () => {
  const navigate = useNavigate();

  const user = getCurrentUser().role;

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
      {user === 'admin' && (
        <NavItem
          icon='assets/icons/employees.svg'
          title='Admin Dashboard'
          onClick={() => {
            navigate('/library/admin/dashboard');
          }}
        />
      )}
    </div>
  );
};

export default Sidebar;
