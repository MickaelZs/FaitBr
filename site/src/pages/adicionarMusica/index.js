import "./index.scss";
import { listaMusicaArtista } from "../../api/musicaAPI";
import { useEffect, useState } from "react";
import { API_URL } from "../../api/config.js";
import { PlaylistItem } from "../../api/playlistAPI";
import { ToastContainer, toast } from "react-toastify";
import Storage from "local-storage";
import { useParams } from "react-router-dom";

export default function Index() {
  const { idParam } = useParams();

  const [musicaa, setMusicaa] = useState([]);

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

  


    {musicaa.map((item, index) => (
        <div className="Card-addmusica">
        <h2>1.</h2>
        <div className="section-music"> 
        <img src={`${API_URL}/${item.imagem} `} className="imagem"></img>
        <div className="atorenome">
            <h1>{item.musica}</h1>
            <div className="border">
            <p>{item.artista}</p>
            </div>
        </div>
        </div>
        <button onClick={() => salvar(index)}>Adicionar</button>
    </div>
      ))}
    </div>
  );
}



