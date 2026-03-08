import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BuscarArtistaPorNome } from '../../api/cadastroArtistaAPI';
import { buscarGeneroPorNome } from '../../api/generoAPI';
import { API_URL } from '../../api/config';
import Cabecario from '../../components/cabeçalho';
import storage from 'local-storage';
import './index.scss';

export default function Index() {

  const [filtro, setFiltro] = useState('');
  const [genero, setGenero] = useState([]);
  const [artista, setArtista] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!storage('usuario-logado')) {
      navigate('/LoginUsuario');
    }
  }, []);

  async function filtrar() {
    const resp = await BuscarArtistaPorNome(filtro);
    const resp2 = await buscarGeneroPorNome(filtro);

    setArtista(resp);
    setGenero(resp2);
  }

  function acessarArtista(id) {
    navigate(`/detalhe/artista/${id}`);
  }

  function acessarGenero(id) {
    navigate(`/genero/${id}`);
  }

  return (
    <main className='pagina-buscar'>
      <Cabecario />

      <section className="conteudo">

        <div className='caixa-buscaa'>
          <input
            type="text"
            placeholder='Buscar artista ou gênero'
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          />
          <button className="icon-btn" onClick={filtrar}>
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
            </svg>
          </button>
        </div>


        {/* <h2 className="titulo-secao">Artistas</h2> */}

        <div className='comp-card'>
          {artista.map(item =>
            <div
              key={item.id}
              className='card-artistaa'
              onClick={() => acessarArtista(item.id)}
            >
              <img
                className="imagem-artista"
                src={`${API_URL}/${item.artista}`}
                alt={item.nome}
              />

              <div className="info-artistaa">
                <h1>{item.nome}</h1>
                <h2>{item.genero}</h2>
              </div>
            </div>
          )}
        </div>


        {/* <h2 className="titulo-secao">Gêneros</h2> */}

        <div className='card-genero'>
          {genero.map(item =>
            <div
              key={item.id}
              className='card-genero-item'
              onClick={() => acessarGenero(item.id)}
            >
              {/* <img
                src={`${API_URL}/${item.genero}`}
                className="imagem-genero"
                alt={item.nome}
              /> */}

              <div className="overlay-genero">
                <h1>{item.nome}</h1>
                <p>{item.genero}</p>
              </div>
            </div>
          )}
        </div>

      </section>
    </main>
  );
}