import { FC, useEffect, useState } from 'react';
import './book-card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import BookQuckViewPopup from '../book-quick-view-popup/BookQuickViewPopup';
import getCurrentUser from '../../utils/get-current-user';
import { useLazyGetBookQuery, useNotifyMeMutation } from '../../api-client/book-api';

type BookcardPropTypes = {
  imgsrc?: string;
  title: string;
  author: string;
  isbn: string;
  id: string;
  availableCount: number;
  totalCount?: number;
  publisher: string;
};

const BookCard: FC<BookcardPropTypes> = ({
  id,
  isbn,
  availableCount,
  title,
  imgsrc,
  publisher,
  author
}) => {
  const navigate = useNavigate();
  const empId = getCurrentUser().id;

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

  const [notifyMe] = useNotifyMeMutation();

  const handleNotify = (empId, isbn) => {
    notifyMe({
      id: id,
      body: {
        requestedBy: empId,
        bookISBN: isbn,
        status: 'active'
      }
    });
  };

  const [getBookDetails, { data: bookDetails }] = useLazyGetBookQuery();

  const shelfDetails = bookDetails?.data?.shelves.map((item) => ({
    id: item.shelfCode,
    name: item.shelfCode,
    availableCount: item.availableBookCount
  }));

  const borrowedByList = bookDetails?.data?.borrowedBy.map((item) => ({
    id: item.id,
    name: item.name
  }));

  useEffect(() => {
    if (popupIsVisible) getBookDetails(id);
  }, [popupIsVisible]);

  return (
    <>
      <div className='book-card-main' onClick={onQuickView}>
        <div className='book-card'>
          <div className='book-card-top'>
            {availableCount !== 0 ? (
              <div className='not-available-icon'></div>
            ) : (
              <div className='not-available-icon'>
                <img src='../../../assets/img/icons8-not-available-48.png' alt='Not Available!' />
              </div>
            )}
            <div
              className='book-edit-icon-container'
              onClick={adminPrivileges ? onClick : () => {}}
            >
              <img
                className='book-edit-icon'
                src='../../../assets/icons/edit.svg'
                alt='Edit book'
              />
            </div>
          </div>
          <div className='book-img'>
            <img src={imgsrc ? imgsrc : 'assets/img/book1.png'} />
          </div>
          <div className='book-title'>{title}</div>
        </div>
        <div className='button-div'>
          <Button style='library' text='View' onClick={onQuickView} />
        </div>
      </div>
      {shelfDetails && (
        <BookQuckViewPopup
          isVisible={popupIsVisible}
          setIsVisible={(isVisible) => {
            setPopupIsVisible(isVisible);
          }}
          handleNotify={() => {
            handleNotify(empId, isbn);
          }}
          shelves={shelfDetails}
          borrowedBy={borrowedByList}
          isAvailable={availableCount == 0 ? false : true}
          id={id}
          title={title}
          author={author}
          publisher={publisher}
          availableCount={availableCount}
          isbn={isbn}
          imgsrc={imgsrc}
        />
      )}
    </>
  );
};

export default BookCard;
