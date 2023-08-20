import { FC, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

type NavItemDDPropsType = {
  title: string;
  icon: string;
  onClick?: () => void;
};

const NavItemDropDown: FC<NavItemDDPropsType> = ({ icon, title }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className='nav-item-dd' onClick={toggleDropdown}>
        <div className='nav-item-icon-container-dd'>
          <img className='nav-item-icon-dd' src={icon} alt='Employees Icon' />
        </div>
        <div className='nav-item-text-dd'>{title}</div>
        <div className='down-arrow'>
          <img src='assets/img/down-arrow.png' />
        </div>
      </div>
      {isDropdownOpen && (
        <div className='dropdown-content'>
          <div className='space-above'></div>
          <div
            className='dd-options'
            onClick={() => {
              navigate('/booksarya');
            }}
          >
            Locate Books
          </div>
          <div className='divider-line'></div>
          <div className='dd-options'>Locate Shelves</div>
        </div>
      )}
    </>
  );
};

export default NavItemDropDown;
