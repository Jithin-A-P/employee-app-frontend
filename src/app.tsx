import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Employee from './pages/employees/Employee';
import EmployeeDetails from './pages/employee-details/EmployeeDetails';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
          <Route path='/test' element={<div style={{ width: '100%' }}></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
