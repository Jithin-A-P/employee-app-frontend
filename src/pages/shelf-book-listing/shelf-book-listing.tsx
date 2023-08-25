import BookCard from '../../components/book-card/book-card';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './styles.css';
import getCurrentUser from '../../utils/get-current-user';
import { useNavigate, useParams } from 'react-router-dom';
import { useLazyGetShelfQuery } from '../../api-client/shelf-api';
import { useEffect } from 'react';

const ShelfBookListing = () => {
  const navigate = useNavigate();

  const currenUserRole = getCurrentUser().role;
  const adminPrivileges = currenUserRole === 'admin';

  const { id: shelfId } = useParams();

  console.log('id', shelfId);
  const [getShelfBooks, { data: shelfResponse }] = useLazyGetShelfQuery();

  useEffect(() => {
    getShelfBooks(shelfId);
  }, [shelfId]);

  return (
    <HomeLayout>
      <SubHeader title={`${shelfResponse?.data?.shelfCode} - ${shelfResponse?.data?.location}`}>
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
      {shelfResponse?.data?.books && (
        <div className='book-main'>
          {shelfResponse?.data?.books.map((item) => (
            <BookCard
              key={item.id}
              id={item.id}
              isbn={item.isbn}
              title={item.title}
              imgsrc={item.thumbnailUrl}
              author={item.author}
              availableCount={item.availableCount}
              publisher={item.publisher}
              description={item.description}
            />
          ))}
        </div>
      )}
    </HomeLayout>
  );
};

export default ShelfBookListing;
