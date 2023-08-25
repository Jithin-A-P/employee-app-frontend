import { FC } from 'react';
import './styles.css';

const PaginationNav: FC<any> = ({ pageNumber, setPageNumber, total, rowsPerPage }) => {
  return (
    <div className='pagination-nav-container'>
      {pageNumber > 1 && (
        <div
          className='pagination-button'
          onClick={() => {
            setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
          }}
        >
          {'<'}
        </div>
      )}
      {pageNumber}
      {pageNumber * rowsPerPage < total && (
        <div
          className='pagination-button'
          onClick={() => {
            if (pageNumber * rowsPerPage < total) setPageNumber(pageNumber + 1);
          }}
        >
          {'>'}
        </div>
      )}
    </div>
  );
};

export default PaginationNav;
