import { useParams } from 'react-router-dom';
import { useGetAnEmployeeQuery } from '../../api-client/employee-api';
import SubHeader from '../../components/sub-header/SubHeader';
import Table from '../../components/table/Table';
import HomeLayout from '../../layouts/home-layout/HomeLayout';

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

  const tableHeadValuesBorrowed = ['Book Title', 'Book ISBN', 'Author', 'Taken On', 'Return'];
  const tableHeadValuesReturned = ['Book Title', 'Book ISBN', 'Author', 'Taken On', 'Returned On'];

  return (
    <HomeLayout>
      <SubHeader title='Borrowed Books' />
      <Table tableHeadValues={tableHeadValuesBorrowed} booksBorrowed={borrowedBooks} />
      <SubHeader title='Returned Books' />
      <Table tableHeadValues={tableHeadValuesReturned} booksReturned={booksReturned} />
    </HomeLayout>
  );
};

export default BorrowedBooks;
