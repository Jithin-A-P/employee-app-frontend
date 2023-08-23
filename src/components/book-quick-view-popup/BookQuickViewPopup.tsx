import { FC } from 'react';
import Popup from '../popup/Popup';
import './style.css';
import SelectForLibrary from '../select-for-library/SelectLibrary';
import Button from '../button/Button';

type BookQuckViewPopupPropsType = {
  isVisible: boolean;
  isAvailable: boolean;
  setIsVisible: (isVisible: boolean) => void;
  handleNotify: () => void;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  count?: number;
  imgsrc?: string;
};

const BookQuckViewPopup: FC<BookQuckViewPopupPropsType> = ({
  isVisible,
  setIsVisible,
  handleNotify,
  title,
  author,
  isbn,
  publisher,
  count,
  imgsrc
}) => {
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
          <div
            style={{
              width: '200px',
              height: '300px',
              backgroundPosition: 'center',
              background: `url(${imgsrc ? imgsrc : 'assets/img/book1.png'}) no-repeat`,
              backgroundSize: 'contain'
            }}
          ></div>
        </div>
        <div className='book-details'>
          <div>Title : {title}</div>
          <div>Author : {author}</div>
          <div>ISBN : {isbn}</div>
          <div>Publisher : {publisher}</div>
        </div>
      </div>
      <div className='popup-buttons'>
        {count ? (
          <>
            <div className='book-count'>{`AVAILABLE:${count}`}</div>
            <div>
              <SelectForLibrary
                value='lend'
                onChange={() => {}}
                label='LEND'
                options={['opt1', 'opt2']}
              />
            </div>
          </>
        ) : (
          <>
            <Button text='NOTIFY ME' style='notify' onClick={handleNotify} />
            <div>
              <SelectForLibrary
                value='request'
                onChange={() => {}}
                label='REQUEST'
                options={['opt1', 'opt2']}
              />
            </div>
          </>
        )}
      </div>
    </Popup>
  );
};

export default BookQuckViewPopup;
