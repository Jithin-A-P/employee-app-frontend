import { FC } from 'react';
import './styles.css';

const PaginationNav: FC<any> = ({ pageNumber, setPageNumber }) => {
  return (
    <div className='pagination-nav-container'>
      <div
        className='pagination-button'
        onClick={() => {
          setPageNumber(pageNumber - 1);
        }}
      >
        {'<'}
      </div>
      {pageNumber}
      <div
        className='pagination-button'
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        {'>'}
      </div>
    </div>
  );
};

export default PaginationNav;
