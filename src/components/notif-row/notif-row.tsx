import { FC } from 'react';
import './styles.css';

type NotifRowPropsType = {
  type: string;
  content: string;
  createdAt: string;
  onClick?: () => void;
};

const NotifRow: FC<NotifRowPropsType> = ({ type, content, createdAt, onClick }) => {
  console.log('type', type);

  return (
    <div className='notif-row-container'>
      <div className='notif-row-icon-container'>
        {type === 'request' && (
          <img className='notif-row-icon' src='assets/img/request.png' alt='request-icon' />
        )}
        {type === 'notify_me' && (
          <img className='notif-row-icon' src='assets/img/notify.png' alt='book-icon' />
        )}
        {type === 'overdue' && (
          <img className='notif-row-icon' src='assets/img/overdue.png' alt='alert-icon' />
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
