import { FC } from 'react';
import './style.css';
import Button from '../button/Button';

export type ShelfCardPropTypes = {
  location: string;
  onClick?: () => void;
  setDeletePopup?: (isVisible: boolean) => void;
};

const ShelfCard: FC<ShelfCardPropTypes> = ({ location, setDeletePopup }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setDeletePopup(true);
  };

  return (
    <div className='shelf-card'>
      <div className='shelf-icon'>
        <img src='../../../assets/img/bookshelf.png' alt='shelf icon' />
      </div>
      <div className='location-button'>
        <div className='location'>{location}</div>
        <div className='button-lib'>
          <Button style='library' text='View Books' onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ShelfCard;