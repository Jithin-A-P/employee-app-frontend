import { useState } from 'react';
import BookCard from '../../components/book-card/book-card';
import BookQuckViewPopup from '../../components/book-quick-view-popup/BookQuickViewPopup';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './books-l-listing.css';

const BookListing = () => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const handleDelete = () => {};

  return (
    <HomeLayout>
      <SubHeader title='Books Listing'>
        <MaterialIconButton icon='assets/icons/plus.svg' text='Add Book' onClick={() => {}} />
      </SubHeader>
      <div className='main'>
        <BookCard
          setQuickViewPopup={(isVisible) => {
            setPopupIsVisible(isVisible);
          }}
        />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <BookQuckViewPopup
        isVisible={popupIsVisible}
        setIsVisible={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
        handleNotify={() => {
          handleDelete();
        }}
        isAvailable={false}
      />
    </HomeLayout>
  );
};

export default BookListing;
