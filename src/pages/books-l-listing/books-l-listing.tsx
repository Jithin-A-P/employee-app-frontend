// import { useState } from 'react';
import BookCard from '../../components/book-card/book-card';
// import BookQuckViewPopup from '../../components/book-quick-view-popup/BookQuickViewPopup';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './books-l-listing.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar';
import { useGetCategoryListQuery, useLazyGetBookListQuery } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';
import { useEffect, useState } from 'react';

const BookListing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location', location);
  const pattern = /^\/library\/shelves\/[a-fA-F0-9-]+$/;
  const isMatch = pattern.test(location.pathname);

  const [fetchData, { data: responseBookList }] = useLazyGetBookListQuery();
  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  const [searchQuery, setSearchQuery] = useState();
  const [category, setCategory] = useState('category');
  // const [bookData, setBookData] = useState({ data: null });

  useEffect(() => {
    fetchData({});
  }, []);

  // const [search, { data: searchResult }] = useLazySearchQuery(searchQuery);

  const handler = (event) => {
    if (event.key === 'Enter') fetchData({ searchQuery: searchQuery });
  };

  const { data: categoryResponse } = useGetCategoryListQuery('');
  const categories = categoryResponse?.data.map((item) => ({ id: item, name: item }));

  console.log('categores...', categories);

  return (
    <HomeLayout>
      <SubHeader title='Books Listing'>
        {location.pathname === '/library/books' || isMatch ? (
          <SearchBar
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyPress={(e) => handler(e)}
            placeholder='Search here'
          />
        ) : (
          <div></div>
        )}
        <div>
          <label>Filter by</label>
          <div>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              value={category}
              className='filter'
            >
              <option selected hidden>
                Category
              </option>
              {categories?.map((item) => <option key={item.id}>{item.name}</option>)}
            </select>
            <select className='filter'>
              <option value={`Category`}>Category</option>
              <option value={`Availability`}>Availability</option>
            </select>
          </div>
        </div>
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

      {responseBookList?.data && (
        <div className='book-main'>
          {responseBookList?.data.map((item) => (
            <BookCard
              key={item.id}
              id={item.id}
              isbn={item.isbn}
              title={item.title}
              imgsrc={item.thumbnailUrl}
              author={item.author}
              availableCount={item.availableCount}
              publisher={item.publisher}
            />
          ))}
        </div>
      )}
    </HomeLayout>
  );
};

export default BookListing;
