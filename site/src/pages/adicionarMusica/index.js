import "./index.scss";
import { BuscarMusicaPorNome, listaMusicaArtista } from "../../api/musicaAPI";
import { useEffect, useState } from "react";
import { API_URL } from "../../api/config.js";
import { PlaylistItem, listarPlaylistItemUsuarioo } from "../../api/playlistAPI";
import { ToastContainer, toast } from "react-toastify";
import Storage from "local-storage";
import { useNavigate, useParams } from "react-router-dom";
import Cabecario from "../../components/cabeçalho/index.js";


export default function Index() {
  const { idParam } = useParams();
  const navigate = useNavigate()

  const [musicaa, setMusicaa] = useState([]);
  const [buscar, setBuscar] = useState('')
  const [itensPlaylist, setItensPlaylist] = useState([]);

  async function filtrar() {
    const resp = await BuscarMusicaPorNome(buscar)
    setMusicaa(resp)
    console.log(resp)
  }

  async function salvar(position) {

    try {

      let playlistId = Storage("Playlist").id;
      let musicaSelecionada = musicaa[position].id_musica;

      if (musicaJaNaPlaylist(musicaSelecionada)) {
        toast.warning("Essa música já está na playlist 🎵");
        return;
      }

      await PlaylistItem(musicaSelecionada, playlistId);

      toast.success("Música adicionada 🎵");

      carregarItensPlaylist();

    } catch (err) {
      if (err.response) toast.error(err.response.data.erro);
      else toast.error(err.message);
    }

  }

  async function carregarItensPlaylist() {
    try {

      const playlistId = Storage("Playlist").id;

      const resp = await listarPlaylistItemUsuarioo(playlistId);

      setItensPlaylist(resp);

    } catch (err) {
      toast.error("Erro ao carregar playlist");
    }
  }

  function musicaJaNaPlaylist(musicaId) {
    return itensPlaylist.some(item => item.idMusica === musicaId);
  }

  function sairClick() {
    Storage.remove('Playlist')
    navigate('/playlist')
  }

  async function carregarMusica() {
    const resp = await listaMusicaArtista(idParam);
    setMusicaa(resp);
  }

  useEffect(() => {
    if (!Storage('usuario-logado')) {
      navigate('/LoginUsuario')
    }
    carregarMusica();
    carregarItensPlaylist();
  }, []);


  return (

    <div className='addPlaylist'>
      <Cabecario />
      <ToastContainer />

      <div className="container">

        <div className='caixa-buscaa'>
          <input
            type="text"
            placeholder='Buscar música...'
            value={buscar}
            onChange={e => setBuscar(e.target.value)}
          />
          <button className="icon-btn" onClick={filtrar}>
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
            </svg>
          </button>
        </div>
        <div className="faixa-musica">
          {musicaa.map((item) => (
            <div className="card-musica" key={item.id_musica}>
              <img
                src={`${API_URL}/${item.imagem}`}
                alt={item.musica}
                className="imagem"
              />

              <div className="info">
                <h3>{item.musica}</h3>
                <span>{item.artista}</span>
              </div>

              <div
                className={`btn-add ${musicaJaNaPlaylist(item.id_musica) ? "disabled" : ""}`}
                onClick={() =>
                  !musicaJaNaPlaylist(item.id_musica) &&
                  salvar(musicaa.indexOf(item))
                }
              >
                {musicaJaNaPlaylist(item.id_musica) ? "✓" : "+"}
              </div>



            </div>
          ))}
        </div>

      </div>
    </div>

    // <div className='add'>
    //   <Cabecario />
    //   <ToastContainer />

    //     <div className="container">
    //       <div className='caixa-busca'>
    //         <input className="inptsss" type="text" placeholder='Buscar artista por nome' value={buscar} onChange={e => setBuscar(e.target.value)} />
    //         <img src='/images/procurar.png' onClick={filtrar} />
    //       </div>



    //       <div className="faixa-musica">
    //         {musicaa.map((item, index) => (
    //           <div className="Card-addmusica">
    //             <div className="section-music">
    //               <img src={`${API_URL}/${item.imagem}`} className="imagem" />

    //               <div className="atorenome">
    //                 <h1>{item.musica}</h1>
    //                 <div className="borderr">
    //                   <p>{item.artista}</p>
    //                 </div>
    //               </div>

    //               <button className="btn-add" onClick={() => salvar(index)}>
    //                 +
    //               </button>
    //             </div>
    //           </div>
    //         ))}

    //       </div>
    //     </div>

    // </div>
  );
}



