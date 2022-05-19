import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Navbar from './pages/shared/Home/Navbar/Navbar';
import Home from './pages/shared/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Signup from './pages/Login/Signup';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
function App() {
  return (
    <div className='mx-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="appointment" element={<Appointment/>} />

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>}>
          <Route index element={<MyAppointment/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
        </Route>

        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
