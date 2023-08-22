import { FC } from 'react';
import './book-card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

type BookcardPropTypes = {
  imgsrc?: string;
  title?: string;
  author?: string;
  isbn?: string;
  onQuickView?: () => void;
  setQuickViewPopup?: (isVisible: boolean) => void;
};

const BookCard: FC<BookcardPropTypes> = ({ setQuickViewPopup, isbn }) => {
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
      <div className='details-div'>
        <div>
          <img className='book-img' src='assets/img/book1.png' />
        </div>
        <div className='book-title'>Book - Title</div>
      </div>
      <div className='button-div'>
        <Button style='library' text='Quick view' onClick={onQuickView} />
      </div>
    </div>
  );
};

export default BookCard;
