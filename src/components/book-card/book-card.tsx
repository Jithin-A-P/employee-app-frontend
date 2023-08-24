import { FC, useState } from 'react';
import './book-card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import BookQuckViewPopup from '../book-quick-view-popup/BookQuickViewPopup';
import getCurrentUser from '../../utils/get-current-user';

type BookcardPropTypes = {
  imgsrc?: string;
  title: string;
  author: string;
  isbn: string;
  id: string;
  count: number;
  publisher: string;
};

const BookCard: FC<BookcardPropTypes> = ({ id, isbn, count, title, imgsrc, publisher, author }) => {
  const navigate = useNavigate();

  const setQuickViewPopup = (isVisible) => {
    setPopupIsVisible(isVisible);
  };

  const onQuickView = (e) => {
    e.stopPropagation();
    setQuickViewPopup(true);
  };

  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const onClick = () => {
    navigate(`/library/books/${id}/edit`);
  };

  return (
    <>
      <div className='book-card-main' onClick={adminPrivileges ? onClick : () => {}}>
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
          <Button style='library' text='View' onClick={onQuickView} />
        </div>
      </div>
      <BookQuckViewPopup
        isVisible={popupIsVisible}
        setIsVisible={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
        handleNotify={() => {}}
        isAvailable={count == 0 ? false : true}
        title={title}
        author={author}
        publisher={publisher}
        count={count}
        isbn={isbn}
        imgsrc={imgsrc}
      />
    </>
  );
};

export default BookCard;
