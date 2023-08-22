import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Employee from './pages/employees/Employee';
import EmployeeDetails from './pages/employee-details/EmployeeDetails';
import CreateEmployee from './pages/create-employee/CreateEmployee';
import EditEmployee from './pages/edit-employee/EditEmployee';
import CreateUpdateBook from './pages/create-book/create-update-book';
import BookListing from './pages/books-l-listing/books-l-listing';
import ShelfGrid from './pages/shelf-grid/ShelfGrid';
import CreateShelf from './pages/create-edit-shelf/createEditShelf';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/library/books/create' element={<CreateUpdateBook />} />
          <Route path='/library/books/:isbn/edit' element={<CreateUpdateBook />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
          <Route path='/employees/create' element={<CreateEmployee />} />
          <Route path='/employees/edit/:id' element={<EditEmployee />} />
          <Route path='/library/books' element={<BookListing />} />
          <Route path='/library/shelves' element={<ShelfGrid />} />
          <Route path='/library/shelves/create' element={<CreateShelf />} />
          <Route path='/library/shelf/edit/:id' element={<CreateShelf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
