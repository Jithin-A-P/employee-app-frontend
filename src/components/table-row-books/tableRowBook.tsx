import { FC } from 'react';
import './styles.css';
import Button from '../button/Button';
import dateFormatter from '../../utils/date-formatter';

type TableRowBookType = {
  bookReturn?: any;
  bookBorrow?: any;
  //   onRowClick: (id: number) => void;
};

const TableBookRow: FC<TableRowBookType> = ({ bookReturn, bookBorrow }) => {
  let bookRender = {};

  if (bookReturn)
    bookRender = {
      title: bookReturn.title,
      isbn: bookReturn.isbn,
      author: bookReturn.author,
      takenOn: dateFormatter(
        bookReturn.borrowedAt.substring(0, bookReturn.borrowedAt.indexOf('T'))
      ),
      returnedOn: dateFormatter(
        bookReturn.returnedAt.substring(0, bookReturn.returnedAt.indexOf('T'))
      )
    };

  if (bookBorrow)
    bookRender = {
      title: bookBorrow.title,
      isbn: bookBorrow.isbn,
      author: bookBorrow.author,
      takenOn: dateFormatter(bookBorrow.borrowedAt.substring(0, bookBorrow.borrowedAt.indexOf('T')))
    };

  return (
    <tr className='table-book-row'>
      {Object.keys(bookRender).map((key) => (
        <td className='table-row-column' key={key}>
          {bookRender[key]}
        </td>
      ))}
      {bookBorrow ? (
        <td>
          <Button text='Return' style='borrowed' />
        </td>
      ) : (
        <div></div>
      )}
    </tr>
  );
};

export default TableBookRow;
