import BookCard from '../../components/book-card/book-card';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './books-l-listing.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar';
import { useGetCategoryListQuery, useLazyGetBookListQuery } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';
import { useEffect, useState } from 'react';
import PaginationNav from '../../components/pagination-nav/pagination-nav';

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

  console.log('Query', queryParams);

  const { data: responseCategoriesList } = useGetCategoryListQuery('');
  const categories = responseCategoriesList?.data.map((item) => ({ id: item, name: item }));

  const [fetchData, { data: responseBookList }] = useLazyGetBookListQuery();
  const books = responseBookList?.data;

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
            // onKeyPress={(e) => handler(e)}
            placeholder='Search here'
          />
        )}
        <div>
          <label>Filter by</label>
          <div>
            <select
              onChange={(e) => {
                setQueryParams((prevQueryParams) => ({
                  ...prevQueryParams,
                  category: e.target.value
                }));
              }}
              value={queryParams.category}
              className='filter'
            >
              <option selected hidden>
                Category
              </option>
              {categories?.map((item) => <option key={item.id}>{item.name}</option>)}
            </select>
            <select
              className='filter'
              onChange={(e) => {
                setQueryParams((prevQueryParams) => ({
                  ...prevQueryParams,
                  availability: e.target.value
                }));
              }}
            >
              <option value={'false'}>All</option>
              <option value={'true'}>Available</option>
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
      {books && (
        <div className='book-main'>
          {books.map((item) => (
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
      <PaginationNav
        pageNumber={queryParams.pageNumber}
        setPageNumber={(pageNumber) => {
          setQueryParams((prevQueryParams) => ({
            ...prevQueryParams,
            pageNumber: pageNumber
          }));
        }}
      />
    </HomeLayout>
  );
};

export default BookListing;
