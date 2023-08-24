import { FC, useState } from 'react';
import './styles.css';
import ProfilePopup from '../popup-profle/popup-profle';
import NotifPopup from '../popup-notif/popup-notif';
// import getCurrentUser from '../../utils/get-current-user';
import {
  useGetNotificationsQuery /*, useReadNotificationMutation*/
} from '../../api-client/notif-api';
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

  const { data: notifData } = useGetNotificationsQuery('');
  let unreadNotifCount = 0;

  if (notifData?.data) unreadNotifCount = notifData?.data.length;

  {
    notifData && console.log('notifications', notifData);
  }
  // const [readNotification] = useReadNotificationMutation();

  return (
    <div className='header'>
      <div className='header-logo-container'>
        <img className='header-logo' src='assets/img/kv-logo.png' alt='KeyValue Logo' />
      </div>
      <div className='profile-container'>
        <div className='bell-icon-container'>
          <img className='profile-image' src='assets/img/bell.png' onClick={toggleNotifDropdown} />
          {unreadNotifCount !== 0 && (
            <div className='unread-notif-count-display'>
              {unreadNotifCount !== 0 ? unreadNotifCount : ''}
            </div>
          )}
        </div>
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
            unreadNotifications={notifData?.data}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
