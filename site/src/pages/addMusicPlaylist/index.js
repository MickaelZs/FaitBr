import { API_URL } from '../../api/config';
import { listaMusicaArtista } from '../../api/musicaAPI';
import { PlaylistItem } from '../../api/playlistAPI';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import './index.scss'
import { useEffect, useState } from 'react';
import Storage from 'local-storage'

export default function Index (){

    const [musicaa, setMusicaa] = useState([]);
    const [buscar,setBuscar] = useState('')

    const navigate = useNavigate()
    const { idParam } = useParams()

    async function add(position) {
        try {
          let id = Storage("nova")
          let musicaSelecionada = musicaa[position].id_musica;
          const resp = await PlaylistItem(musicaSelecionada, id);
          console.log(resp)
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
       
          if(!Storage('usuario-logado')){
              navigate('/LoginUsuario')
          }
     
        carregarMusica();
      }, []);

    //   function sairClick(){
    //     Storage.remove('Playlist')
    //     navigate('/playlist')
    // }
    return(
        <div className='addPlaylist'>
            <ToastContainer/>
            <div>
            <div className='caixa-busca'>             
                    <input type="text" placeholder='Buscar artista por nome' value={buscar} onChange={e => setBuscar(e.target.value)} />
                <img src='/images/procurar.png'   />
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
        <img className="i" src="/images/i.png" alt="" onClick={() => add (index)} />
         </div>
      ))}
      </div>
      </div>
    </div>
    )
}