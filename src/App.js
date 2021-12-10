import logo from './logo.svg';
import './App.css';
import { Login } from './Login/Login';
import { Registro } from './Registro/Registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Registro" element={<Registro />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

