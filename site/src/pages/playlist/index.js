import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import React, { useEffect, useState } from 'react'
import { criarPlaylist, DeletaPlaylist, listarPlaylistPorIdUsuarioo, listarPlaylistItemUsuarioo, listarPlaylistImagem } from '../../api/playlistAPI';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import Storage from 'local-storage'
import Modal from 'react-modal';
import { listarCurtidas } from '../../api/musicaAPI';
import { API_URL } from '../../api/config';
import { seguindoArtistaPorId } from '../../api/cadastroArtistaAPI';
import Cabecario from '../../components/cabeçalho';


const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(6px)",
    zIndex: 999
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: "40px",
    border: "none",
    background: "#121212",
    width: "400px",
    maxWidth: "90%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
  }
};


export default function Index() {

  const [nome, setNome] = useState('')
  const [musica, setMusica] = useState([])
  const [usu, setUsu] = useState([])
  const [artista, setArtista] = useState([])
  const [itemm, setItemm] = useState([])
  const [imagem, setImagem] = useState([])
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {

    setIsOpen(false);
  }


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  useEffect(() => {
    if (!Storage('usuario-logado')) {
      navigate('/LoginUsuario');
    }
    carregarPlaylist();
    carregarCurtida();
    carregarSeguidores();
    carregarMusica()
    carregarImagem()

  }, [])

  function acessarPlaylist(id) {
    const idPlaylist = ({
      "id": id
    })
    Storage('foi', idPlaylist)
    navigate(`/ReproduzirPlaylist/${id}`)

  }

  async function carregarSeguidores() {
    const id = Storage('usuario-logado').id
    const resp = await seguindoArtistaPorId(id)
    console.log(resp)
    setArtista(resp)

  }

  async function carregarMusica() {
    const id = Storage('usuario-logado').id
    const x = await listarPlaylistItemUsuarioo(id)
    setItemm(x)
    console.log(x)
  }


  async function carregarPlaylist() {
    const id = Storage('usuario-logado').id;
    const resp = await listarPlaylistPorIdUsuarioo(id)

    setUsu(resp)
  }

  async function carregarImagem() {
    const id = Storage('usuario-logado').id;
    const resp = await listarPlaylistImagem(id)
    setImagem(resp)

  }

  async function carregarCurtida() {
    const id = Storage('usuario-logado').id;
    const resp = await listarCurtidas(id)
    setMusica(resp)
  }

  async function DeletarPlaylist(id) {

    confirmAlert({
      title: 'Remover playlist',
      message: `deseja remover a playlist ${id}?`,
      buttons: [
        {
          label: 'sim',
          onClick: async () => {
            const filtro = await DeletaPlaylist(id)


            if (filtro === '') {
              carregarPlaylist();
            }
            else
              carregarPlaylist()
            toast.dark('Playlist removida')
          }
        },
        {
          label: 'Não'
        }
      ]
    })

  }

  function acessarArtista(id) {

    navigate(`/detalhe/artista/${id}`)
  }

  function acessarMusicaa(id) {
    navigate(`/play/${id}`)
  }



  async function salvarClick() {
    try {

      let id = Storage('usuario-logado').id;

      const NovaPlaylist = await criarPlaylist(nome, id);
      Storage('Playlist', NovaPlaylist)

      navigate('/AdicionarMusica')
      toast.dark('Playlist criada');

    }

    catch (err) {
      if (err.response)
        toast.error(err.response.data.erro)
      else
        toast.error(err.message);
    }
  }



  return (
    <main className="pag-playlist">
      <Cabecario />

      <ToastContainer />
      <div className='cont-playlist'>

        <section className='section-musicas'>
          <h2 className='titulos'>Musicas</h2>

          {musica.length === 0 ? (
            <div className="empty-state">
              <h3>Você ainda não curtiu nenhuma música 🎵</h3>
              <p>Explore artistas e comece a curtir suas músicas favoritas.</p>
            </div>
          ) : (
            <Carousel
              swipeable
              draggable
              responsive={responsive}
              ssr
              infinite={false}
              autoPlay={false}
              keyBoardControl
              containerClass="carousel-container"
              itemClass="carousel-item-padding-10-px"
            >
              {musica.map(item => (
                <div
                  key={item.IdMusica}
                  className='music'
                  onClick={() => acessarMusicaa(item.IdMusica)}
                >
                  <img
                    className='caixa-musica'
                    src={`${API_URL}/${item.imagem}`}
                    alt=""
                  />
                  <div className='textt'>
                    <h3>{item.musica}</h3>
                    <p>{item.nome}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </section>

        <section className='section-musicas'>
          <h2 className='titulos'>Artistas - Seguidos</h2>
          {artista.length === 0 ? (
            <div className="empty-state">
              <h3>Você ainda não segue nenhum artista 🎤</h3>
              <p>Comece a seguir artistas para vê-los aqui.</p>
            </div>
          ) : (
            <Carousel
              swipeable
              draggable
              responsive={responsive}
              ssr
              infinite={false}
              autoPlay={false}
              keyBoardControl
              containerClass="carousel-container"
              itemClass="carousel-item-padding-10-px"
            >
              {artista.map(item => (
                <div
                  key={item.IdArtista}
                  className='music'
                  onClick={() => acessarArtista(item.IdArtista)}
                >
                  <img
                    className='caixa-musica'
                    src={`${API_URL}/${item.imagem}`}
                    alt=""
                  />
                  <div className='textt'>
                    <h3>{item.artista}</h3>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </section>



        <Carousel
          swipeable
          draggable
          responsive={responsive}
          ssr
          infinite={false}
          autoPlay={false}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="carousel-item-padding-10-px"
        >
          {usu.map(item =>

            <section className='section-playlist' key={item.id} >

              <h1>Playlist de {item.usuario}</h1>


              <div className='container-titulos-play'>
                <h2 className='titulo-playlist'>{item.nome}</h2>
                <div className="acoes"><img src='/images/excluir.png' onClick={() => DeletarPlaylist(item.id, item.usu)} /></div>

              </div>


              <div className='playlist' onClick={() => acessarPlaylist(item.id)}>

                {imagem
                  .filter(img => img.idPlaylist === item.id)
                  .slice(0, 1)
                  .map(img => (
                    <img
                      key={img.id}
                      className='capP'
                      src={`${API_URL}/${img.imagem}`}
                      alt=""
                    />
                  ))}

                {imagem.map((item) => <img className='capP' src={`${API_URL}/${item.imagem}`} alt="" />)}


                <div className='nome-playlist'>
                  <h1>{item.nome}</h1>
                  <h1>{usu.id}</h1>
                </div>

              </div>

            </section>
          )}
        </Carousel>
        <section className='faixa-criar-play'>

          <div onClick={openModal} className='caixa-musica-playlist'>
            <img className='k' src="/images/add.png" alt="" />

          </div>
          <h1 className='criar-playlist'>Criar Playlist</h1>

        </section>
        <div className='finalização'></div>



        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="modal-header">
            <h2>Criar Playlist</h2>
            <button className="close-btn" onClick={closeModal}>✕</button>
          </div>

          <div className="modal-body">
            <input
              type="text"
              placeholder="Nome da playlist"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button className="btn-cancel" onClick={closeModal}>
              Cancelar
            </button>

            <button className="btn-primary" onClick={salvarClick}>
              Criar
            </button>
          </div>
        </Modal>

      </div>
    </main>
  )
}