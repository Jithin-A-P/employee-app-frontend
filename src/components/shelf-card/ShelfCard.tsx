import { FC } from 'react';
import './style.css';
import Button from '../button/Button';
import getCurrentUser from '../../utils/get-current-user';

export type ShelfCardPropTypes = {
  id?: string;
  location: string;
  shelfCode: string;
  onClick?: (id: string) => void;
  onViewBooks?: (id: string, e?) => void;
};

const ShelfCard: FC<ShelfCardPropTypes> = ({ location, onClick, onViewBooks, id, shelfCode }) => {
  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  return (
    <div className='shelf-card' onClick={adminPrivileges ? () => onClick(id) : () => {}}>
      <div className='shelf-icon'>
        <img src='../../../assets/img/bookshelf.png' alt='shelf icon' />
      </div>
      <div className='location-button'>
        <div className='code'>{shelfCode}</div>
        <div className='location'>{location}</div>
        <div className='button-lib'>
          <Button style='library' text='View Books' onClick={(e) => onViewBooks(id, e)} />
        </div>
      </div>
    </div>
  );
};

export default ShelfCard;
