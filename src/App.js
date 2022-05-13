import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/shared/Navbar/Navbar';
import Home from './pages/shared/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
