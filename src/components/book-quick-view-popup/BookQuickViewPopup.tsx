import { FC, useState } from 'react';
import Popup from '../popup/Popup';
import './style.css';
import SelectForLibrary from '../select-for-library/SelectLibrary';
import Button from '../button/Button';
import { useLendBookMutation, useRequestBookMutation } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';

type BookQuckViewPopupPropsType = {
  isVisible: boolean;
  isAvailable: boolean;
  shelves: { id: string; name: string; availableCount: number }[];
  borrowedBy: { id: string; name: string }[];
  setIsVisible: (isVisible: boolean) => void;
  handleNotify: () => void;
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  availableCount: number;
  imgsrc?: string;
};

const BookQuckViewPopup: FC<BookQuckViewPopupPropsType> = ({
  isVisible,
  setIsVisible,
  handleNotify,
  id,
  title,
  author,
  isbn,
  publisher,
  availableCount,
  imgsrc,
  shelves,
  borrowedBy
}) => {
  const [lendBook, { isSuccess: isLendSuccess }] = useLendBookMutation();
  const [requestBook, { isSuccess: isRequestSuccess }] = useRequestBookMutation();
  const empId = getCurrentUser().id;

  console.log(isLendSuccess);
  console.log(isRequestSuccess);

  const [shelf, setShelf] = useState('');
  const [toEmployeeID, setToEmployeeID] = useState('');

  const handleLend = (employeeID, bookISBN) => {
    lendBook({
      isbn: bookISBN,
      body: {
        employeeId: employeeID,
        shelfCode: shelf
      }
    });
  };

  const handleRequest = (id, byEmployeeID, toEmployeeID, bookISBN) => {
    requestBook({
      id: id,
      body: {
        requestedBy: byEmployeeID,
        requestedTo: toEmployeeID,
        bookISBN: bookISBN,
        status: 'inactive'
      }
    });
  };

  return (
    <Popup
      isVisible={isVisible}
      setIsVisible={(isVisible) => {
        setIsVisible(isVisible);
      }}
      style='library'
    >
      <div className='bookData'>
        <div className='book-image'>
          <img src={imgsrc ? imgsrc : 'assets/img/book1.png'} alt='Book image' />
        </div>
        <div className='book-details'>
          <div>Title : {title}</div>
          <div>Author : {author}</div>
          <div>ISBN : {isbn}</div>
          <div>Publisher : {publisher}</div>
        </div>
      </div>
      <div className='popup-buttons'>
        {availableCount != 0 ? (
          <>
            <div className='book-count'>{`AVAILABLE: ${availableCount}`}</div>
            <div>
              <SelectForLibrary
                value={shelf}
                onChange={(e: any) => {
                  setShelf(e.target.value);
                }}
                label='LEND'
                options={shelves.filter((item) => item.availableCount > 0)}
              />
            </div>
            {shelf && (
              <div>
                <Button
                  text='LEND'
                  style='notify'
                  onClick={() => {
                    handleLend(empId, isbn);
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <>
            <Button text='NOTIFY ME' style='notify' onClick={handleNotify} />
            <div>
              <SelectForLibrary
                value={toEmployeeID}
                onChange={(e: any) => {
                  setToEmployeeID(e.target.value);
                }}
                label='REQUEST'
                options={borrowedBy}
              />
            </div>
            <div>
              <Button
                text='REQUEST'
                style='notify'
                onClick={() => {
                  handleRequest(id, empId, toEmployeeID, isbn);
                }}
              />
            </div>
          </>
        )}
      </div>
    </Popup>
  );
};

export default BookQuckViewPopup;
9;
