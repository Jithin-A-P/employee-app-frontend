// import HomeLayout from '../../layouts/home-layout/HomeLayout';

import { useNavigate } from 'react-router-dom';
import './styles.css';
const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const auth = localStorage.getItem('auth-token');

    if (auth === null) navigate('/login');
    else navigate('/employees');
  };

  return (
    <div className='not-found'>
      <img src='/assets/icons/404-error-animate.svg' className='error-image'></img>
      <button className='back-button' onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
