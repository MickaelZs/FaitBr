import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { listaGeneros } from '../../api/generoAPI';
import React,{ useEffect, useState } from 'react';
import { listaArtista } from '../../api/cadastroArtistaAPI';
import { API_URL } from '../../api/config';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import ArtistaSeguido from '../../components/artista';
import CardMusica from '../../components/coracao';
import Home from '../../components/vamos';
import CardGenero from '../../components/genero';
import Faixa from '../../components/usuario';

const  customStyles  =  { 
  content : { 
    top : '50%' , 
    left : '50%' , 
    right : 'auto' , 
    bottom : 'auto' , 
    marginRight : '-50%' , 
    transform : 'translate(-50%, -50%)' , 
  } , 
} ;


export default function Index() {
  const [genero,setGenero] = useState ([])
  const [artista,setArtista] = useState ([])
  const navigate = useNavigate ()

  function acessarArtista(id){
    navigate(`/detalhe/artista/${id}`)
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
  carregarArtista();
    carregarGenero();
}, [])

let subtitle;
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}



  return (

    <div className='pagina-home'>
      <Home/>
      
       <Faixa/>
        <CardGenero/>
        <Faixa/>
        <ArtistaSeguido/>

      <div className='rodape'>

        <div>
          <img className='logo' src='./images/logo.png'/>
        </div>

        <div className='texto-rodape' >
          <h3>Redes Sociais:</h3>
          <p>Instagram</p>
          <p>fitbr2023@gmail.com</p>
        </div>

        <div>
        <h3>Desenvolvedores:</h3>
          <p>João Paulo</p>
          <p>Mickael V.</p>
          <p>Lucas Tatsuo</p>
          <p>Cauã G.</p>
          <p>Cauan R.</p>
        </div>

        <div>
          <h3>Apoiadores:</h3>
          <img src='/images/logo-frei.png'  width='10px'/>
        </div>

      </div>

    </div>
  );
}