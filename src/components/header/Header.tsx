import { FC, useState } from 'react';
import './styles.css';
import ProfilePopup from '../popup-profle/popup-profle';
import NotifPopup from '../popup-notif/popup-notif';
// import ProfilePopup from '../popup-profle/popup-profle';

const Header: FC = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const [isNotifDropdownOpen, setIsNotifDropdownOpen] = useState(false);
  const toggleNotifDropdown = () => {
    setIsNotifDropdownOpen(!isNotifDropdownOpen);
  };

  return (
    <div className='header'>
      <div className='header-logo-container'>
        <img className='header-logo' src='assets/img/kv-logo.png' alt='KeyValue Logo' />
      </div>
      <div className='profile-container'>
        <img className='profile-image' src='assets/img/bell.png' onClick={toggleNotifDropdown} />
        <img
          className='profile-image'
          src='assets/img/customer.png'
          onClick={toggleProfileDropdown}
        />
        {isProfileDropdownOpen && (
          <ProfilePopup
            isVisible={isProfileDropdownOpen}
            setIsVisible={(isVisible) => {
              setIsProfileDropdownOpen(isVisible);
            }}
          />
        )}
        {isNotifDropdownOpen && (
          <NotifPopup
            isVisible={isNotifDropdownOpen}
            setIsVisible={(isVisible) => {
              setIsNotifDropdownOpen(isVisible);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
