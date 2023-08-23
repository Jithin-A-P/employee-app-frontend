// import { useState } from 'react';
import BookCard from '../../components/book-card/book-card';
// import BookQuckViewPopup from '../../components/book-quick-view-popup/BookQuickViewPopup';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './books-l-listing.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar';
import { useGetBookListQuery } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';

const BookListing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data: responseBookList } = useGetBookListQuery('');
  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  return (
    <HomeLayout>
      <SubHeader title='Books Listing'>
        {location.pathname === '/library/books' ? (
          <SearchBar placeholder='Search here' />
        ) : (
          <div></div>
        )}
        {adminPrivileges && (
          <MaterialIconButton
            icon='assets/icons/plus.svg'
            text='Add Book'
            onClick={() => {
              navigate('/library/books/create');
            }}
          />
        )}
      </SubHeader>

      <div className='book-main'>
        {responseBookList?.data.map((item) => (
          <BookCard
            key={item.id}
            id={item.id}
            isbn={item.isbn}
            title={item.title}
            imgsrc={item.thumbnailUrl}
            author={item.author}
            count={item.count}
            publisher={item.publisher}
          />
        ))}
      </div>
    </HomeLayout>
  );
};

export default BookListing;
