// import HomeLayout from '../../layouts/home-layout/HomeLayout';

import { useNavigate } from 'react-router-dom';
import './styles.css';
const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const auth = localStorage.getItem('auth-token');

    if (auth === null) navigate('/login');
    else navigate(-1);
  };

  return (
    <div className='not-found'>
      <div className='msg1'>404</div>
      <div className='msg2'>You might be lost</div>
      <button className='back-button' onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
