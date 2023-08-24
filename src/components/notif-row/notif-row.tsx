import { FC } from 'react';
import './styles.css';

type NotifRowPropsType = {
  type: string;
  content: string;
  createdAt: string;
  onClick?: () => void;
};

const NotifRow: FC<NotifRowPropsType> = ({ type, content, createdAt, onClick }) => {
  return (
    <div className='notif-row-container'>
      <div className='notif-row-icon-container'>
        {type === 'request' && (
          <img className='notif-row-icon' src='assets/icons/refresh.svg' alt='request-icon' />
        )}
        {type === 'notifyme' && (
          <img className='notif-row-icon' src='assets/icons/refresh.svg' alt='book-icon' />
        )}
        {type === 'overdue' && (
          <img className='notif-row-icon' src='assets/icons/refresh.svg' alt='alert-icon' />
        )}
      </div>
      <div className='notif-row-content'>{content}</div>
      <div className='notif-row-created-at'>{createdAt}</div>
      <div onClick={onClick} className='notif-row-mark-read-container'>
        X
      </div>
    </div>
  );
};

export default NotifRow;
