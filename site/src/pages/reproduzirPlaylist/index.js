import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarMusicaPorId } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';

import Storage from 'local-storage'
import { listarPlaylistItemUsuarioo } from '../../api/playlistAPI';
import Cabeçario from '../../components/cabeçalho';


export default function Reproduzir(){
    const [playlist,setPlaylist] = useState([])
    const navigate = useNavigate()
    const {idParam} = useParams()

    async function carregarMusica(){
        const id = Storage('usuario-logado').id
        const x =  await listarPlaylistItemUsuarioo(id)
        setPlaylist(x)
        console.log(x)
    }

    function acessarMusica(id){
        navigate(`/play/${id}`)
    }

    useEffect(() => {
        carregarMusica()

    },[])

    return(
        <main className='pagina-reproduzir'>
           
           
            {playlist.map(item => 
                 <section className='faixa1'>
<h1>{item.playlist}</h1>
                 </section>
                
                )}
           
            <section className='div-reproducao'>
                {playlist.map(item => 
                <div className='cardmusica' onClick={() => acessarMusica (item.id_playlist_item)}>
                <img src={`${API_URL}/${item.imagem}`} className="image-music" />
                
                <div className='div-ator'>
                    <p className='nome'>{item.musica}</p>
                    <p className='autor'>{item.genero}</p>
                </div>
                
               
                
                </div>

               
           
               
                    
                    )}
                
             
            </section>
        


        </main>
    );
}