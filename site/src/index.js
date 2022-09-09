import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import LoginAdm from './pages/login adm';
import CadastroUsuario from './pages/cadastro usuario';
import LoginUsuario from './pages/login usuario'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/LoginAdm' element={<LoginAdm/>}/>
      <Route path='/CadastroUsuario' element={<CadastroUsuario/>}/>
      <Route path='/LoginUsuario' element={<LoginUsuario/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


