import './index.scss'
import Storage from 'local-storage'

import "react-multi-carousel/lib/styles.css";

import CardGenero from '../../components/genero';

import { useEffect, useState } from 'react';
import { listaArtista } from '../../api/cadastroArtistaAPI';
import { listaGeneros } from '../../api/generoAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../api/config';
import { buscarUsuarioPorId } from '../../api/usuarioAPI';

import { listarCurtidas } from '../../api/musicaAPI';



import Faixa from '../../components/usuario'
import ArtistaSeguido from '../../components/artistas';
import Cabecario from '../../components/cabeçalho';



export default function Index() {

  const [artista,setArtista] = useState ([])
  const [genero,setGenero] = useState ([])
  const [usuario,setUsuario] = useState ([])
  const [curtidas,setCurtidas]  = useState([])
 
  const [imagem,setImagem] = useState ('')
  const navigate = useNavigate() 
  const {idParam} = useParams()

  function acessarPerfil(){
    const id = Storage('usuario-logado').id
    navigate(`/informacao/${id}`)
}

async function carregarUsuario(){
  const id = Storage('usuario-logado').id
  const reso = await buscarUsuarioPorId(id)
  setUsuario(reso)

  
}

async function carregarCurtidas(){
  const id = Storage('usuario-logado').id
  const resp = await listarCurtidas(id)
  setCurtidas(resp)
  console.log(resp)


}


  const rearrangedPlayer = [
    {
      className: "beatles",
      style: { cursor: "pointer" },
      innerComponents: [
        {
          type: "play"
        }
      ]
    }
  ];

  function escolherImagem() {
    document.getElementById('imagemCapa').click();
}

function mostrarImagem(imagem){
        
  if (typeof (imagem) == 'object') {
      return URL.createObjectURL(imagem);
  }
  else {
          
          return `${API_URL}/${imagem}`
  }
}

  async function carregarGenero(){
    const resp = await listaGeneros();
    setGenero(resp);
}

async function carregarArtista(){
  const resp = await listaArtista();
  setArtista(resp);
}

useEffect(() => {
  if(!Storage('usuario-logado')){
    navigate('/LoginUsuario');
}
  carregarUsuario();
  carregarArtista();
    carregarGenero();
    carregarCurtidas()
}, [])

let playlist = [
  { src: "/music.mp3",
    title: "Song",
    artist: "Singer" },
  { src: "/moreMusic.mp3",
    title: "Another Song",
    artist: "Another Singer" }
];

  return (

    <div className='pagina-home-login-feito'>
      <Cabecario/>
      
      <Faixa/>
      <CardGenero/>
      <Faixa/>

      <ArtistaSeguido/>
    
    
</div>
  );
}

