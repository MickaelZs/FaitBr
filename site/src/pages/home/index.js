import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { listaGeneros } from '../../api/generoAPI';
import React, { useEffect, useState } from 'react';
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

const customStyles = {
  content: {
    top: '30%',
    left: '30%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Index() {

  const [genero, setGenero] = useState([])
  const [artista, setArtista] = useState([])
  const navigate = useNavigate()

  function AcessarFunk(id) {
    navigate(`/genero/${1}`)
  }
  function AcessarSertanejo(id) {
    navigate(`/genero/${2}`)
  }
  
  function AcessarPagode(id) {
    navigate(`/genero/${4}`)
  }

  function acessarLogin(id) {
    navigate(`/loginUsuario`)
  }

  async function carregarGenero() {
    const resp = await listaGeneros();
    setGenero(resp);
  }

  async function carregarArtista() {
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

      <Cabecario />

      {/* HERO */}
      <section className="landing__hero">
        <div className="hero-card">

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1>
              Sua Música, Seu <br /> Mundo
            </h1>

            <p>
              Descubra milhões de músicas, crie playlists personalizadas
              <br />
              e compartilhe suas paixões musicais com o mundo.
            </p>

            <button className="btn-comecar" onClick={acessarLogin} >
              Começar
            </button>
          </div>

        </div>
      </section>


      {/* GENEROS */}
      <section className="landing__section">

        <h2>Explore por Gênero</h2>
        <p>Milhões de músicas em todos os estilos que você ama</p>

        <div className="cards blue">

          <div className="card" onClick={AcessarFunk}>
            <img src="https://cdn.agenciamural.org.br/2022/09/09155216/Jovens-falam-sobre-o-funk-e-as-eleicoes-1.jpg" />
            <h2>Funk</h2>
          </div>

          <div className="card" onClick={AcessarPagode}>
            <img src="https://partiurolecwb.com.br/wp-content/uploads/2022/12/1-Me-Chama-que-eu-vou-Roda-de-samba-foto-Wallace-Machado-3.jpg" />
            <h2>Pagode</h2>
          </div>

          <div className="card" onClick={AcessarSertanejo}>
            <img src="https://cdn.folhape.com.br/upload/dn_arquivo/2023/11/14333227146-c60f381b92-c-1.jpg" />
            <h2>Sertanejo</h2>
          </div>

        </div>

      </section>


      {/* RECURSOS */}
      <section className="landing__section">

        <h2>Recursos Incríveis</h2>
        <p>Tudo que você precisa para aproveitar sua música ao máximo</p>

        <div className="cards dark">

          <div className="cardd">
            <div className='card'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
                <path d="M21 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
                <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
              </svg>
            </div>
            <div>
              <p>Áudio de Alta <br></br> Qualidade</p>
            </div>
          </div>

          <div className="cardd">
            <div className='card'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15V6"></path>
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                <path d="M12 13H3"></path>
                <path d="M12 18H3"></path>
                <path d="M12 8H3"></path>
              </svg>
            </div>
            <div>
              <p>Playlists <br></br> Personalizadas</p>
            </div>
          </div>

          <div className="cardd">
            <div className='card'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
                <path d="M21 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
                <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
              </svg>
            </div>
            <div>
              <p>Recomendações <br></br> Inteligentes</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}