import { FC } from 'react';
import Popup from '../popup/Popup';
import './style.css';
import SelectForLibrary from '../select-for-library/SelectLibrary';
import Button from '../button/Button';

type BookQuckViewPopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  handleNotify: () => void;
  //   title: string;
  //   author: string;
  //   isbn: string;
  //   publisher: string;
  isAvailable: boolean;
  //   bookCount?: number;
};

const BookQuckViewPopup: FC<BookQuckViewPopupPropsType> = ({
  isAvailable,
  isVisible,
  setIsVisible,
  handleNotify
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
          <img src='' alt='Book Image' />
        </div>
        <div className='book-details'>
          <div>Title</div>
          <div>Author</div>
          <div>ISBN</div>
          <div>Publisher</div>
        </div>
      </div>
      {isAvailable ? (
        <>
          <div className='book-count'>{`AVAILABLE:03`}</div>
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
    </Popup>
  );
};

export default BookQuckViewPopup;
