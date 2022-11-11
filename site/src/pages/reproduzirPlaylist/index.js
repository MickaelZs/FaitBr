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
        navigate(`/Reproduzir/${id}`)
    }

    useEffect(() => {
        carregarMusica()

    },[])

    return(
        <main className='pagina-reproduzir'>
            <section className='faixa-principal'>

                <div className='faixa-1'>
                    <img src="./images/anitta..jpg" alt="" />
                    <h2>Musica do mickael de novo</h2>
                    <h3>Mickael</h3>
                </div>

                <div>
                    {playlist.map(item => 
                    <div className='cardmusica' onClick={() => acessarMusica(item.id_playlist_item)}>

                        <img src={`${API_URL}/${item.imagem}`} className="image-music" />

                        <div className='div-ator'>
                            <h1>{item.musica}</h1>
                            <p>Mickael</p>
                        </div>

                    </div>
                    )}
 

                </div>

            </section>
        </main>
    );
}