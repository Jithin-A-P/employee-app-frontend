import BookCard from '../../components/book-card/book-card';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './books-l-listing.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar';
import { useLazyGetBookListQuery } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';
import { useEffect, useState } from 'react';

const BookListing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pattern = /^\/library\/shelves\/[a-fA-F0-9-]+$/;
  const isMatch = pattern.test(location.pathname);

  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  const [queryParams, setQueryParams] = useState({
    pageNumber: 1,
    rowsPerPage: 12,
    searchQuery: null,
    category: null,
    availability: null
  });

  const handler = (event) => {
    if (event.key === 'Enter') fetchData(queryParams);
  };

  const [fetchData, { data: responseBookList }] = useLazyGetBookListQuery();

  useEffect(() => {
    fetchData(queryParams);
  }, [queryParams]);

  return (
    <HomeLayout>
      <SubHeader title='Books Listing'>
        {(location.pathname === '/library/books' || isMatch) && (
          <SearchBar
            value={queryParams.searchQuery}
            onChange={(e) => {
              setQueryParams((prevQueryParams) => ({
                ...prevQueryParams,
                searchQuery: e.target.value
              }));
            }}
            onKeyPress={(e) => handler(e)}
            placeholder='Search here'
          />
        )}
        <div>
          <label>Filter by</label>
          <select className='filter'>
            <option value={`Category`}>Category</option>
            <option value={`Availability`}>Availability</option>
          </select>
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
