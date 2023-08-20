import { FC } from 'react';
import './styles.css';

export type SearchPropTypes = {
  value?: string;
  placeholder: string;
  //   type: 'text';
  onKeyPress?: (e) => void;
};

const SearchBar: FC<SearchPropTypes> = ({ placeholder }) => {
  return (
    <div className='searchbar-blue-container'>
      <img className='lens-img' src='assets/img/icons8-search.svg' />
      <input className='search-input' placeholder={placeholder}></input>
    </div>
  );
};

export default SearchBar;
