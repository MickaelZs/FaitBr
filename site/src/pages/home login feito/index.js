import './index.scss'
import Storage from 'local-storage'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AudioPlayer from 'react-modular-audio-player' ;
import CardGenero from '../../components/genero';
import CardArtistas from '../../components/artistas';
import { useEffect, useState } from 'react';
import { listaArtista } from '../../api/cadastroArtistaAPI';
import { listaGeneros } from '../../api/generoAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../api/config';
import { buscarUsuarioPorId } from '../../api/usuarioAPI';
import Perfil from '../../components/perfilUsuario';
import { listarCurtidas } from '../../api/musicaAPI';
import Cabeçario from '../../components/cabeçalho';
import CardMusica from '../../components/coracao';
import ArtistaSeguido from '../../components/artista';
import HomeLogin from '../../components/homeLogin';
import Faixa from '../../components/usuario'



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
  carregarUsuario();
  carregarArtista();
    carregarGenero();
    carregarCurtidas()
}, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (

    <div className='pagina-home-login-feito'>
      
      <HomeLogin usuario={usuario} />


      
      <Faixa/>
      <CardGenero/>
      <Faixa/>

      <ArtistaSeguido/>
    
</div>
  );
}

