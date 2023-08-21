import { FC } from 'react';
import './styles.css';

type NavItemPropsType = {
  title: string;
  icon: string;
  onClick?: () => void;
};

const NavItem: FC<NavItemPropsType> = ({ icon, title, onClick }) => {
  return (
    <div className='nav-item' onClick={onClick}>
      <div className='nav-item-icon-container'>
        <img className='nav-item-icon' src={icon} alt='Employees Icon' />
      </div>
      <div className='nav-item-text'>{title}</div>
    </div>
  );
};

export default NavItem;
