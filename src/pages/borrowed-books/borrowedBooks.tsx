// import { useParams } from 'react-router-dom';
import SubHeader from '../../components/sub-header/SubHeader';
import Table from '../../components/table/Table';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import { borrowedBooks, ReturnedBooks } from '../../utils/tmp-borrowed-books';

const BorrowedBooks = () => {
  //to be used to fetch details from emp-book-junction
  //const { empid } = useParams();
  const booksBorrowed = borrowedBooks;
  const booksReturned = ReturnedBooks;

  const tableHeadValuesBorrowed = ['Book Title', 'Book ISBN', 'Author', 'Taken On', 'Return'];
  const tableHeadValuesReturned = ['Book Title', 'Book ISBN', 'Author', 'Taken On', 'Returned On'];

  return (
    <HomeLayout>
      <SubHeader title='Borrowed Books' />
      <Table tableHeadValues={tableHeadValuesBorrowed} booksBorrowed={booksBorrowed} />
      <SubHeader title='Returned Books' />
      <Table tableHeadValues={tableHeadValuesReturned} booksReturned={booksReturned} />
    </HomeLayout>
  );
};

// this page should use table , input data to be taken from employee junction table.

export default BorrowedBooks;
