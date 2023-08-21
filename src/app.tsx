import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Employee from './pages/employees/Employee';
import EmployeeDetails from './pages/employee-details/EmployeeDetails';
import CreateEmployee from './pages/create-employee/CreateEmployee';
import EditEmployee from './pages/edit-employee/EditEmployee';
import CreateUpdateBook from './pages/create-book/create-update-book';
const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/library/books/create' element={<CreateUpdateBook />} />
          <Route path='/library/books/:isbn' element={<CreateUpdateBook />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
          <Route path='/employees/create' element={<CreateEmployee />} />
          <Route path='/employees/edit/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
