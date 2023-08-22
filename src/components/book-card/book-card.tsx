import { FC } from 'react';
import './book-card.css';
import Button from '../button/Button';

type BookcardPropTypes = {
  imgsrc?: string;
  title?: string;
  author?: string;
  onQuickView?: () => void;
  setQuickViewPopup?: (isVisible: boolean) => void;
};

const BookCard: FC<BookcardPropTypes> = ({ setQuickViewPopup }) => {
  const onQuickView = (e) => {
    // console.log('dqifdgu');
    e.stopPropagation();
    setQuickViewPopup(true);
  };

  return (
    <div className='book-card-main'>
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
