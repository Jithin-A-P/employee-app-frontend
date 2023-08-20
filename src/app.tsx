import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Employee from './pages/employees/Employee';
import EmployeeDetails from './pages/employee-details/EmployeeDetails';
import CreateEmployee from './pages/create-employee/CreateEmployee';
import EditEmployee from './pages/edit-employee/EditEmployee';
import BooksArya from './pages/books-arya/BooksArya';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/booksarya' element={<BooksArya />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
          <Route path='/employees/create' element={<CreateEmployee />} />
          <Route path='/employees/edit/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
