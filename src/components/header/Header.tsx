import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import SearchBar from '../search-bar/search-bar';

const Header: FC = () => {
  const location = useLocation();

  // console.log(location.pathname);

  return (
    <div className='header'>
      <div className='header-logo-container'>
        <img className='header-logo' src='assets/img/kv-logo.png' alt='KeyValue Logo' />
      </div>
      {location.pathname === '/booksarya' ? <SearchBar placeholder='Search here' /> : <div></div>}
      <div className='profile-container'>
        <img className='profile-image' src='assets/img/bell.png' />
        <img className='profile-image' src='assets/img/customer.png' />
      </div>
    </div>
  );
};

export default Header;
