// import { useParams } from 'react-router-dom';
import SubHeader from '../../components/sub-header/SubHeader';
import Table from '../../components/table/Table';
import HomeLayout from '../../layouts/home-layout/HomeLayout';

const BorrowedBooks = () => {
  //to be used to fetch details from emp-book-junction
  //const { empid } = useParams();

  const tableHeadValues = ['Book Title', 'Book ISBN', 'Author', 'Taken On', 'Return Due'];

  return (
    <HomeLayout>
      <SubHeader title='Borrowed Books' />
      <Table tableHeadValues={tableHeadValues} />
      <SubHeader title='Retured Books' />
    </HomeLayout>
  );
};

export default BorrowedBooks;
