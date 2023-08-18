import { useEffect, useState } from 'react';
import AnimatedInput from '../../components/animated-input/AnimatedInput';
import Button from '../../components/button/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../api-client/login-api';
import setCurrentUser from '../../actions/set-current-user';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [login, { data, isSuccess: isLoginSuccess }] = useLoginMutation();

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassowrdChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === '' || password === '') setShowError(true);
    else
      login({
        email: username,
        password: password
      });
  };

  useEffect(() => {
    if (isLoginSuccess) {
      localStorage.setItem('auth-token', data.data.token);
      dispatch(setCurrentUser(data.data.employee));
      navigate('/employees');
    }
  }, [isLoginSuccess]);

  return (
    <div className='login-page'>
      <div className='banner-container'>
        <img className='banner' src='assets/img/banner.png' alt='banner' />
      </div>
      <div className='login-container'>
        <div className='form-container'>
          <img className='login-form-logo' src='assets/img/kv-logo.png' alt='banner' />
          <br />
          <br />
          <br />
          <AnimatedInput
            value={username}
            type='text'
            onChange={handleUsernameChange}
            label='Username'
          />
          <br /> <br />
          <AnimatedInput
            value={password}
            type='password'
            onChange={handlePassowrdChange}
            label='Password'
          />
          <Button text='Login' style='primary' onClick={handleLogin} />
          {showError && (
            <div className='login-error-message'>Error, username or password is empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
