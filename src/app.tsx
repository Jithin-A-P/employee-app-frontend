import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Employee from './pages/employees/Employee';
import EmployeeDetails from './pages/employee-details/EmployeeDetails';
import CreateEmployee from './pages/create-employee/CreateEmployee';
import EditEmployee from './pages/edit-employee/EditEmployee';
import BookListing from './pages/books-l-listing/books-l-listing';
import CreateShelf from './pages/create-shelf/createShelf';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
          <Route path='/employees/create' element={<CreateEmployee />} />
          <Route path='/employees/edit/:id' element={<EditEmployee />} />
          <Route path='/library/books' element={<BookListing />} />
          <Route path='/library/shelf/create' element={<CreateShelf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
