/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import './styles.css';
import {
  useLazyGetNotificationsQuery,
  useReadNotificationMutation
} from '../../api-client/notif-api';
import NotifRow from '../notif-row/notif-row';
import dateFormatter from '../../utils/date-formatter';

type NotifPopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  unreadNotifications?: any;
  children?: any;
};

const NotifPopup: FC<NotifPopupPropsType> = ({ isVisible, setIsVisible, unreadNotifications }) => {
  const close = () => {
    setIsVisible(false);
  };
  const [refreshNotifications, { data: refreshedNotifications }] = useLazyGetNotificationsQuery();
  let refreshButtonClicked = 0;

  const handleRefresh = () => {
    refreshNotifications({});
    console.log('refresh', refreshedNotifications?.data);
    refreshButtonClicked += 1;
  };

  const [readNotification] = useReadNotificationMutation();

  const handleClick = (id) => {
    readNotification(id);
  };

  return isVisible ? (
    <div onClick={close} className='popup-notif'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='popup-container-notif'
      >
        <div className='notif-container-action-buttons'>
          <div onClick={handleRefresh} className='refresh-button'>
            <img className='refresh-icon' src='assets/icons/refresh.svg' alt='refresh-icon' />
          </div>
          <button className='close-button' onClick={close}>
            X
          </button>
        </div>
        <div className='notification-content-container'>
          {unreadNotifications === undefined ? (
            <div>NO NEW NOTIFICATIONS</div>
          ) : refreshButtonClicked !== 0 ? (
            refreshedNotifications?.data?.map((notif) => {
              return (
                <NotifRow
                  key={notif.id}
                  type={notif.type}
                  content={notif.content}
                  createdAt={notif.createdAt}
                  onClick={() => handleClick(notif.id)}
                />
              );
            })
          ) : (
            unreadNotifications?.map((notif) => {
              return (
                <NotifRow
                  key={notif.id}
                  type={notif.type}
                  content={notif.content}
                  createdAt={dateFormatter(
                    notif.createdAt.substring(0, notif.createdAt.indexOf('T'))
                  )}
                  onClick={() => handleClick(notif.id)}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NotifPopup;
