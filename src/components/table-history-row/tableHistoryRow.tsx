import { FC } from 'react';

type TableHistoryRowType = {
  bookHistory: any;
};

const TableHistoryRow: FC<TableHistoryRowType> = ({ bookHistory }) => {
  return (
    <tr className='table-history-row'>
      {Object.keys(bookHistory).map((key) => (
        <td className='table-history-row-column' key={key}>
          {bookHistory[key]}
        </td>
      ))}
    </tr>
  );
};

export default TableHistoryRow;
