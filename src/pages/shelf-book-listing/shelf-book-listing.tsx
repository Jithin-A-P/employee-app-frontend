import BookCard from '../../components/book-card/book-card';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './styles.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar';
import { useGetCategoryListQuery } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';
import { useEffect, useState } from 'react';
import { useLazyGetShelfQuery } from '../../api-client/shelf-api';

const ShelfBookListing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { shelfId } = useParams();

  console.log('location', location);
  const pattern = /^\/library\/shelves\/[a-fA-F0-9-]+$/;
  const isMatch = pattern.test(location.pathname);

  const [fetchData, { data: responseBookList }] = useLazyGetShelfQuery();
  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin' || currenUserRole === 'hr';

  const [searchQuery, setSearchQuery] = useState();
  const [category, setCategory] = useState('category');

  useEffect(() => {
    fetchData({ id: shelfId });
  }, []);

  const handler = (event) => {
    if (event.key === 'Enter') fetchData({ searchQuery: searchQuery });
  };

  const { data: categoryResponse } = useGetCategoryListQuery('');
  const categories = categoryResponse?.data.map((item) => ({ id: item, name: item }));

  console.log('categores...', categories);

  return (
    <HomeLayout>
      <SubHeader title='Shelf'>
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
          {responseBookList?.data?.books.map((item) => (
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

export default ShelfBookListing;
