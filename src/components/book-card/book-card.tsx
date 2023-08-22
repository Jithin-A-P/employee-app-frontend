import { FC } from 'react';
import './book-card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

type BookcardPropTypes = {
  imgsrc?: string;
  title: string;
  author: string;
  isbn: string;
  count: number;
  onQuickView?: () => void;
  setQuickViewPopup?: (isVisible: boolean) => void;
};

const BookCard: FC<BookcardPropTypes> = ({ setQuickViewPopup, isbn, count, title, imgsrc }) => {
  const navigate = useNavigate();
  const onQuickView = (e) => {
    e.stopPropagation();
    setQuickViewPopup(true);
  };

  const onClick = () => {
    navigate(`/library/books/${isbn}`);
  };

  return (
    <div className='book-card-main' onClick={onClick}>
      <div className='book-card'>
        {count !== 0 ? (
          <div className='not-available-icon'></div>
        ) : (
          <div className='not-available-icon'>
            <img src='../../../assets/img/icons8-not-available-48.png' alt='Not Available!' />
          </div>
        )}
        <div className='book-img'>
          <img src={imgsrc ? imgsrc : 'assets/img/book1.png'} />
        </div>
        <div className='book-title'>{title}</div>
      </div>
      <div className='button-div'>
        <Button style='library' text='Quick view' onClick={onQuickView} />
      </div>
    </div>
  );
};

export default BookCard;
