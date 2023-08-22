import { useState } from 'react';
import BookCard from '../../components/book-card/book-card';
import BookQuckViewPopup from '../../components/book-quick-view-popup/BookQuickViewPopup';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './books-l-listing.css';
import { useNavigate } from 'react-router-dom';

const BookListing = () => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const handleDelete = () => {};
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <SubHeader title='Books Listing'>
        <MaterialIconButton
          icon='assets/icons/plus.svg'
          text='Add Book'
          onClick={() => {
            navigate('/library/books/create');
          }}
        />
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
        title='Harry Potter'
        author='J K Rowling'
        publisher='Bookphiles'
        bookCount={5}
        isbn='123456'
      />
    </HomeLayout>
  );
};

export default BookListing;
