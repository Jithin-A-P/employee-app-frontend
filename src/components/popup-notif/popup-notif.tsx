import { FC } from 'react';
import './styles.css';
import getCurrentUser from '../../utils/get-current-user';

type NotifPopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  children?: any;
};

const NotifPopup: FC<NotifPopupPropsType> = ({ isVisible, setIsVisible }) => {
  const close = () => {
    setIsVisible(false);
  };

  const currenUserName = getCurrentUser().name;

  return isVisible ? (
    <div onClick={close} className='popup-notif'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='popup-container-notif'
      >
        <button className='close-button' onClick={close}>
          X
        </button>
        <div className='delete-poup-title'>Hi, {currenUserName}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NotifPopup;
