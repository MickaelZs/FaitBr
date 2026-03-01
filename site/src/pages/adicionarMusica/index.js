import "./index.scss";
import { BuscarMusicaPorNome, listaMusicaArtista } from "../../api/musicaAPI";
import { useEffect, useState } from "react";
import { API_URL } from "../../api/config.js";
import { PlaylistItem } from "../../api/playlistAPI";
import { ToastContainer, toast } from "react-toastify";
import Storage from "local-storage";
import { useNavigate, useParams } from "react-router-dom";
import Cabecario from "../../components/cabeçalho/index.js";


export default function Index() {
  const { idParam } = useParams();
  const navigate = useNavigate()

  const [musicaa, setMusicaa] = useState([]);
  const [buscar, setBuscar] = useState('')

  async function filtrar() {
    const resp = await BuscarMusicaPorNome(buscar)
    setMusicaa(resp)
    console.log(resp)
  }

  async function salvar(position) {
    try {
      let id = Storage("Playlist").id;
      let musicaSelecionada = musicaa[position].id_musica
      const resp = await PlaylistItem(musicaSelecionada, id);
      toast.dark("Musica selecionada");
    } catch (err) {
      if (err.response) toast.error(err.response.data.erro);
      else toast.error(err.message);
    }
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

                    <button className="add" onClick={() => salvar(musicaa.indexOf(item))}>
                     +
                 </button>
    
                    
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



