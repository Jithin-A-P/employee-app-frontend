import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CreateEmployee from './pages/create-employee/CreateEmployee';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<CreateEmployee />} />
          <Route path='/test' element={<div style={{ width: '100%' }}></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
