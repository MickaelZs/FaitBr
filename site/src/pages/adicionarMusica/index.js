import "./index.scss";
import { BuscarMusicaPorNome, listaMusicaArtista } from "../../api/musicaAPI";
import { useEffect, useState } from "react";
import { API_URL } from "../../api/config.js";
import { PlaylistItem } from "../../api/playlistAPI";
import { ToastContainer, toast } from "react-toastify";
import Storage from "local-storage";
import { useParams } from "react-router-dom";

export default function Index() {
  const { idParam } = useParams();

  const [musicaa, setMusicaa] = useState([]);
  const [buscar,setBuscar] = useState('')

  async function filtrar(){
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

  async function carregarMusica() {
    const resp = await listaMusicaArtista(idParam);
    setMusicaa(resp);
  }

  useEffect(() => {
    carregarMusica();
  }, []);

 
    return(
        <div className='add'>
            <ToastContainer/>
            <div>
            <div className='caixa-busca'>             
                    <input type="text" placeholder='Buscar artista por nome' value={buscar} onChange={e => setBuscar(e.target.value)} />
                <img src='/images/procurar.png' onClick={filtrar}  />
                </div>

  
        
        <div className="faixa-musica">
    {musicaa.map((item, index) => (
        <div className="Card-addmusica">
        <div className="section-music"> 
        <img src={`${API_URL}/${item.imagem} `} className="imagem"></img>
        <div className="atorenome">
            <h1>{item.musica}</h1>
            <div className="border">
            <p>{item.artista}</p>
            </div>
        </div>
        </div>
        <img className="i" src="/images/i.png" alt="" onClick={() => salvar(index)} />
         </div>
      ))}
      </div>
      </div>
    </div>
  );
}



