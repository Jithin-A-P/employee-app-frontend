import { FC } from 'react';
import './styles.css';
import Button from '../button/Button';

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
      takenOn: bookReturn.takenOn,
      returnedOn: bookReturn.returnedOn
    };

  if (bookBorrow)
    bookRender = {
      title: bookBorrow.title,
      isbn: bookBorrow.isbn,
      author: bookBorrow.author,
      takenOn: bookBorrow.takenOn
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
          <Button text='Return' style='library' />
        </td>
      ) : (
        <div></div>
      )}
    </tr>
  );
};

export default TableBookRow;
