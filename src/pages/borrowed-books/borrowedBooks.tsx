import { useParams } from 'react-router-dom';
import { useGetAnEmployeeQuery } from '../../api-client/employee-api';
import SubHeader from '../../components/sub-header/SubHeader';
import Table from '../../components/table/Table';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './styles.css';

const BorrowedBooks = () => {
  const { id } = useParams();

  console.log('emp id', id);

  const { data: response } = useGetAnEmployeeQuery(id);
  const employee = response?.data;

  console.log('history page ', employee?.borrowedBooks);

  let borrowedBooks = [];
  let booksReturned = [];

  if (employee)
    if (employee?.borrowedBooks)
      employee?.borrowedBooks.map((item) => {
        console.log(item);
        if (item.returnedAt) booksReturned.push(item);
        else borrowedBooks.push(item);
      });

  const tableHeadValuesBorrowed = [
    'Book Title',
    'Book ISBN',
    'Author',
    'Taken On',
    'Choose Shelf',
    'Return'
  ];
  const tableHeadValuesReturned = ['Book Title', 'Book ISBN', 'Author', 'Taken On', 'Returned On'];

  return (
    <HomeLayout>
      {borrowedBooks.length > 0 && (
        <>
          <SubHeader title='Borrowed Books' />
          <Table tableHeadValues={tableHeadValuesBorrowed} booksBorrowed={borrowedBooks} />
        </>
      )}
      {booksReturned.length > 0 && (
        <>
          <SubHeader title='Returned Books' />
          <Table tableHeadValues={tableHeadValuesReturned} booksReturned={booksReturned} />
        </>
      )}
      {borrowedBooks.length == 0 && booksReturned.length == 0 && (
        <div className='history'>Ooops ! You have no book history</div>
      )}
    </HomeLayout>
  );
};

export default BorrowedBooks;
