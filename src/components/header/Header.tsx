import { FC } from 'react';
import './styles.css';

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='header-logo-container'>
        <img className='header-logo' src='assets/img/kv-logo.png' alt='KeyValue Logo' />
      </div>
    </div>
  );
};

export default Header;
