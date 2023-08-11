import { FC } from 'react';
import './styles.css';

type NavItemPropsType = {
  title: string;
  icon: string;
};

const NavItem: FC<NavItemPropsType> = ({ icon, title }) => {
  return (
    <div className='nav-item'>
      <div className='nav-item-icon-container'>
        <img className='nav-item-icon' src={icon} alt='Employees Icon' />
      </div>
      <div className='nav-item-text'>{title}</div>
    </div>
  );
};

export default NavItem;
