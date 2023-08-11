import { useState } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassowrdChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === '' || password === '') setShowError(true);
    else navigate('/employees');
  };

  return (
    <div className='login-page'>
      <div className='banner-container'>
        <img className='banner' src='assets/img/banner.png' alt='banner' />
      </div>
      <div className='login-container'>
        <div className='form-container'>
          <img className='login-form-logo' src='assets/img/kv-logo.png' alt='banner' />
          <Input
            value={username}
            type='text'
            onChange={handleUsernameChange}
            label='Username'
            placeholder='Username'
          />
          <Input
            value={password}
            type='password'
            onChange={handlePassowrdChange}
            label='Password'
            placeholder='Password'
          />
          <Button text='Login' type='primary' onClick={handleLogin} />
          {showError && (
            <div className='login-error-message'>Error, username or password is empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
