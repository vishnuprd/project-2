import logo from './logo.svg';
import './App.css';
import AdminLogin from './components/adminlogin.jsx';
import Dashboard from './components/dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployeeDetails from './components/addemployeedetails.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-employee-details' element={<AddEmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
