import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import HomeLayout from './pages/HomeLayout/HomeLayout';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<HomeLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
