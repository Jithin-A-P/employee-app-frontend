import { FC } from 'react';
import './styles.css';
import getCurrentUser from '../../utils/get-current-user';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

type ProfilePopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  children?: any;
};

const ProfilePopup: FC<ProfilePopupPropsType> = ({ isVisible, setIsVisible }) => {
  const close = () => {
    setIsVisible(false);
  };

  const currenUserName = getCurrentUser().name;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/login');
  };

  const empid = getCurrentUser().id;

  return isVisible ? (
    <div onClick={close} className='popup-profile'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='popup-container-profile'
      >
        <button className='close-button' onClick={close}>
          X
        </button>
        <div className='delete-poup-title'>Hi, {currenUserName}</div>
        <Button
          style='book-history'
          onClick={() => {
            navigate(`/employees/${empid}/books`);
          }}
          text='My Book History'
        />
        <Button style='logout' onClick={handleLogout} text='Logout' />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProfilePopup;
