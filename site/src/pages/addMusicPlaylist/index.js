import { API_URL } from '../../api/config';
import { listaMusicaArtista, BuscarMusicaPorNome } from '../../api/musicaAPI';
import { PlaylistItem } from '../../api/playlistAPI';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Storage from 'local-storage';
import Cabecario from "../../components/cabeçalho";
import './index.scss';

export default function Index() {

  const [musicas, setMusicas] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { idParam } = useParams();

  async function add(musicaId) {
    try {
      const playlistId = Storage("nova");
      await PlaylistItem(musicaId, playlistId);
      toast.success("Música adicionada à playlist 🎵");
    } catch (err) {
      toast.error(err.response?.data?.erro || err.message);
    }
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
          <img src='/images/procurar.png' onClick={filtrar} alt="Buscar" />
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

                <button
                  className="btn-add"
                  onClick={() => add(item.id_musica)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
