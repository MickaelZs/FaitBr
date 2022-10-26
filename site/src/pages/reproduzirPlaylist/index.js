import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarMusicaPorId } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';

import Storage from 'local-storage'
import { listarPlaylistItemUsuarioo } from '../../api/playlistAPI';


export default function Reproduzir(){
    const [playlist,setPlaylist] = useState([])
    const navigate = useNavigate()
    const {idParam} = useParams()

    async function carregarMusica(){
        const id = Storage('usuario-logado').id
        const x =  await listarPlaylistItemUsuarioo(id)
        setPlaylist(x)
    }

    useEffect(() => {
        carregarMusica()

    },[])

    function acessarMusica(id){
        navigate(`/detalhe/artista/${id}`)
    }
    return(
        <main className='pagina-reproduzir'>
            <section className='faixa1'>

            </section>
            <section className='div-reproducao'>
                {playlist.map(item => 
                <div> 
                    <div>
                <img src={`${API_URL}/${item.imagem}`} width="500px"/>
                <h1>{item.musica}</h1>
                <audio controls src={`${API_URL}/${item.audio}`}  > </audio>
                </div>

                <div className='cardmusica'>
                <p className='p'>{} </p>
                <img src={`${API_URL}/${item.imagem}`} className="image-music" />
                <div className='div-ator'>
                    <p className='nome'>{item.musica}</p>
                    <p className='autor'>{item.genero}</p>
                </div>
                
                </div>

               
            </div>
               
                    
                    )}
                
             
            </section>
        


        </main>
    );
}