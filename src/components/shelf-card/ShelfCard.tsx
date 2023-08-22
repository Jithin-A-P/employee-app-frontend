import { FC } from 'react';
import './style.css';
import Button from '../button/Button';

export type ShelfCardPropTypes = {
  id?: string;
  location: string;
  onClick?: (id: string) => void;
  onViewBooks?: (id: string, e?) => void;
};

const ShelfCard: FC<ShelfCardPropTypes> = ({ location, onClick, onViewBooks, id }) => {
  return (
    <div className='shelf-card' onClick={() => onClick(id)}>
      <div className='shelf-icon'>
        <img src='../../../assets/img/bookshelf.png' alt='shelf icon' />
      </div>
      <div className='location-button'>
        <div className='location'>{location}</div>
        <div className='button-lib'>
          <Button style='library' text='View Books' onClick={(e) => onViewBooks(id, e)} />
        </div>
      </div>
    </div>
  );
};

export default ShelfCard;
