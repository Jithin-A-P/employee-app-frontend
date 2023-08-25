import { FC, useEffect, useState } from 'react';
import './styles.css';
import Button from '../button/Button';
import dateFormatter from '../../utils/date-formatter';
import { useGetShelflistQuery } from '../../api-client/shelf-api';
import Select from '../select/Select';
import { useReturnBookMutation } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';
import { toast } from 'react-toastify';

type TableRowBookType = {
  bookReturn?: any;
  bookBorrow?: any;
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

  const { data: response, isSuccess } = useGetShelflistQuery('');

  let results;
  let [shelves, setShelves] = useState([]);

  const [returnBook, { isError: returnError, isSuccess: ReturnSuccess }] = useReturnBookMutation();

  useEffect(() => {
    if (isSuccess) {
      results = response?.data.map((item) => ({ id: item.shelfCode, name: item.shelfCode }));
      setShelves(results);
    }
    if (returnError)
      setTimeout(() => {
        notifyError("Couldn't Return :(");
      }, 100);
    else if (ReturnSuccess)
      setTimeout(() => {
        notifySuccess('Returned Book');
      }, 100);
  }, [isSuccess, returnError, ReturnSuccess]);

  const handleShelfSelect = (e) => {
    setChoosenShelf(e.target.value);
  };

  const handleReturn = (e, isbn) => {
    returnBook({
      id: isbn,
      body: { employeeId: getCurrentUser().id, shelfCode: choosenShelf }
    });
  };

  const [choosenShelf, setChoosenShelf] = useState();

  const notifySuccess = (action: string) => toast.success(`Successfully ${action} !`);
  const notifyError = (error: string) => toast.error(error);

  return (
    <tr className='table-book-row'>
      {Object.keys(bookRender).map((key) => (
        <td className='table-row-column' key={key}>
          {bookRender[key]}
        </td>
      ))}
      {bookBorrow ? (
        <>
          <td className='table-row-column'>
            <Select
              onChange={handleShelfSelect}
              value={choosenShelf}
              options={shelves}
              borrowed='borrow'
            />
          </td>
          {choosenShelf && (
            <td className='table-row-column'>
              <Button
                text='Return'
                style='borrowed'
                onClick={(e) => handleReturn(e, bookBorrow.isbn)}
              />
            </td>
          )}
          {!choosenShelf && <td className='table-row-column'></td>}
        </>
      ) : (
        <div></div>
      )}
    </tr>
  );
};

export default TableBookRow;
