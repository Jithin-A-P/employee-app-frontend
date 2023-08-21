import BookCard from '../../components/book-card/book-card';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './books-l-listing.css';

const BookListing = () => {
  return (
    <HomeLayout>
      <SubHeader title='Books Listing'>
        <MaterialIconButton icon='assets/icons/plus.svg' text='Add Book' onClick={() => {}} />
      </SubHeader>
      <div className='main'>
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
    </HomeLayout>
  );
};

export default BookListing;
