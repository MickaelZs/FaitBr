import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import LoginAdm from './pages/login adm';
import CadastroUsuario from './pages/cadastro usuario';
import LoginUsuario from './pages/login usuario'
import Confirmacao from './pages/confirmacao'
import Rec from './pages/recuperacao';
import PlayMusic from './pages/play music';
import Cadastromsc from './pages/cadastrarmsc';
import Cadartista from './pages/cadastrarArtista';
import MusicaCadastradas from './pages/musica cadastrada';
import ArtistaCadastrados from './pages/artista cadastrado';
import HomeLoginFeito from './pages/home login feito';
import Genero from './pages/pagina generos';
import Consulta from './pages/consultar';
import Reproduzir from './pages/ReproduzirMusica';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/LoginAdm' element={<LoginAdm/>}/>
      <Route path='/CadastroUsuario' element={<CadastroUsuario/>}/>
      <Route path='/LoginUsuario' element={<LoginUsuario/>}/>
      <Route path='/Confirmacao' element={<Confirmacao/>}/>
      <Route path='/Rec' element={<Rec/>}/>
      <Route path='/PlayMusic' element={<PlayMusic/>}/>
      <Route path='/Cadastromusica' element={<Cadastromsc/>}/>
      <Route path='/Cadastrarartista' element={<Cadartista/>}/>
      <Route path='/MusicaCadastradas' element={<MusicaCadastradas/>}/>
      <Route path='/ArtistaCadastrados' element={<ArtistaCadastrados/>}/>
      <Route path='/HomeLoginFeito' element={<HomeLoginFeito/>}/>
      <Route path='/Genero' element={<Genero/>}/>
      <Route path='/Consulta' element={<Consulta/>}/>
      <Route path='/Reproduzir' element={<Reproduzir/>}/>



    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


