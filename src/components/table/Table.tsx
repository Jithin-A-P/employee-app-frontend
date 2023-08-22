import { FC } from 'react';
import TableHead from '../table-head/TableHead';
import TableRow from '../table-row/TableRow';
import './styles.css';
import TableBookRow from '../table-row-books/tableRowBook';

type TablePropsType = {
  tableHeadValues: any;
  employees?: any;
  booksReturned?: any;
  booksBorrowed?: any;
  onRowClick?: (id: number) => void;
  setDeletePopup?: (isVisible: boolean, id: number) => void;
};

const Table: FC<TablePropsType> = ({
  booksReturned,
  booksBorrowed,
  tableHeadValues,
  employees,
  onRowClick,
  setDeletePopup
}) => {
  return (
    <table className='table'>
      <TableHead tableHeadValues={tableHeadValues} />
      <tbody className='table-body'>
        {employees &&
          employees.map((employee) => (
            <TableRow
              onRowClick={onRowClick}
              key={employee.id}
              employee={employee}
              setDeletePopup={setDeletePopup}
            />
          ))}
        {booksReturned &&
          booksReturned.map((book) => <TableBookRow key={book.isbn} bookReturn={book} />)}
        {booksBorrowed &&
          booksBorrowed.map((book) => <TableBookRow key={book.isbn} bookBorrow={book} />)}
      </tbody>
    </table>
  );
};

export default Table;
