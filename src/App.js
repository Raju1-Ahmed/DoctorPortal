import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Navbar from './pages/shared/Home/Navbar/Navbar';
import Home from './pages/shared/Home/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
