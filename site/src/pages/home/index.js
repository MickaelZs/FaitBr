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
import CardArtistaHome from '../../components/artista';
import GeneroHome from '../../components/generoHome';
import Cabecario from '../../components/cabeçalho';

const  customStyles  =  { 
  content : { 
    top : '30%' , 
    left : '30%' , 
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

   

      <div className="landing">
     <Cabecario/>

      {/* HERO */}
      <section className="landing__hero">
        <div className="hero-card"></div>
      </section>

      {/* FEATURES */}
      <section className="landing__section">
        <h2>Recursos Incríveis</h2>
        <p>Tudo que você precisa para aproveitar sua música ao máximo</p>

        <div className="cards blue">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>

      {/* GENRES */}
      <section className="landing__section">
        <h2>Explore por Gênero</h2>
        <p>Milhões de músicas em todos os estilos que você ama</p>

        <div className="cards dark">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
    </div>
     
    
  );
}