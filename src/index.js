import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Panelusuarios from './Componentes/Panel/Panelu';
import Panelpredios from './Componentes/Panel2/Panelp';
import Panelcultivos from './Componentes/Panel3/Panelc';
import Infousuario from './Componentes/Infousuario';
import Infocultivos from './Componentes/Infocultivo';
import Crearusuarios from './Componentes/Crearusuarios';
import Crearpredios from './Componentes/Crearpredios';
import Crearcultivos from './Componentes/Crearcultivo';


ReactDOM.render( 
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Registro" element={<Registro />}/>
      <Route path="/Panelusuarios" element={<Panelusuarios/>}/>
      <Route path="/Panelpredios" element={<Panelpredios/>}/>
      <Route path="/Panelcultivos" element={<Panelcultivos/>}/>
      <Route path="/Crearusuarios" element={<Crearusuarios/>}/>
      <Route path="/Infousuario" element={<Infousuario/>}/>
      <Route path="/Crearpredios" element={<Crearpredios/>}/>
      <Route path="/Crearcultivos" element={<Crearcultivos/>}/>
      <Route path="/Infocultivos" element={<Infocultivos/>}/>
    </Routes>
  </BrowserRouter>
  
</>,
document.getElementById('root')
);

function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Registro" element={<Registro />}/>
          <Route path="/Panelusuarios" element={<Panelusuarios/>}/>
          <Route path="/Panelpredios" element={<Panelpredios/>}/>
          <Route path="/Panelcultivos" element={<Panelcultivos/>}/>
          <Route path="/Crearusuarios" element={<Crearusuarios/>}/>
          <Route path="/Infousuario" element={<Infousuario/>}/>
          <Route path="/Crearpredios" element={<Crearpredios/>}/>
          <Route path="/Crearcultivos" element={<Crearcultivos/>}/>
          <Route path="/Infocultivos" element={<Infocultivos/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default Index;



