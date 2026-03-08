import { API_URL } from '../../api/config';
import { listaMusicaArtista, BuscarMusicaPorNome } from '../../api/musicaAPI';
import { PlaylistItem, listarPlaylistItemUsuarioo } from '../../api/playlistAPI';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Storage from 'local-storage';
import Cabecario from "../../components/cabeçalho";
import './index.scss';

export default function Index() {

  const [musicas, setMusicas] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [itensPlaylist, setItensPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { idParam } = useParams();

  async function add(musicaId) {

    if (musicaJaNaPlaylist(musicaId)) {
      toast.warning("Essa música já está na playlist 🎵");
      return;
    }

    try {

      const playlistId = Storage("nova");

      await PlaylistItem(musicaId, playlistId);

      toast.success("Música adicionada à playlist 🎵");

      carregarItensPlaylist();

    } catch (err) {
      toast.error(err.response?.data?.erro || err.message);
    }

  }

  async function carregarItensPlaylist() {
    try {
      const playlistId = Storage("nova");
      const resp = await listarPlaylistItemUsuarioo(playlistId);
      console.log("playlist:", resp);
      setItensPlaylist(resp);
    } catch (err) {
      toast.error("Erro ao carregar playlist");
    }
  }

  function musicaJaNaPlaylist(musicaId) {
    return itensPlaylist.some(item => item.idMusica === musicaId);
  }

  async function carregarMusica() {
    try {
      setLoading(true);
      const resp = await listaMusicaArtista(idParam);
      setMusicas(resp);
    } catch (err) {
      toast.error("Erro ao carregar músicas");
    } finally {
      setLoading(false);
    }
  }

  async function filtrar() {
    try {
      setLoading(true);
      const resp = await BuscarMusicaPorNome(buscar);
      setMusicas(resp);
    } catch (err) {
      toast.error("Erro ao buscar música");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!Storage('usuario-logado')) {
      navigate('/LoginUsuario');
      return;
    }

    carregarMusica();
    carregarItensPlaylist();
  }, []);

  return (
    <div className='addPlaylist'>
      <Cabecario />
      <ToastContainer />

      <div className="container">

        <div className='caixa-busca'>
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

        {loading ? (
          <div className="loading">Carregando...</div>
        ) : (
          <div className="faixa-musica">
            {musicas.map((item) => (
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
                  onClick={() => !musicaJaNaPlaylist(item.id_musica) && add(item.id_musica)}
                >
                  {musicaJaNaPlaylist(item.id_musica) ? "✓" : "+"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
