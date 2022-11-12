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
    const [audioPrincipal, setAudioPrincipal] = useState(0);
    const [imagemPrincipal, setImagemPrincipal] = useState(0);
    const [nomePrincipal, setNomePrincipal] = useState('');
    const navigate = useNavigate()
    const {idParam} = useParams()

    async function carregarMusica(){
       
        const x =  await listarPlaylistItemUsuarioo(idParam)
        setPlaylist(x)
        console.log(x)
    }

    // function acessarMusica(id){
    //     navigate(`/Reproduzir/Playlist/${id}`)
    // }
    function exibirImagemProduto(imagem) {
        
      
        return API_URL + '/' + imagem
         
        
    }
    function exibirAudio(audio){
        return API_URL + '/' + audio;

    }
    function exibirNome(musica){
        return API_URL + '/' + musica;

    }

    useEffect(() => {
        carregarMusica()

    },[])

    return(
        <main className='pagina-reproduzir'>
            <section className='faixa-principal'>

                <div className='faixa-1'>
                    <img src= {imagemPrincipal} alt="" />
                    <h2>{nomePrincipal}</h2>
                    <h3>Mickael</h3>
                    <audio controls autoPlay={true} src={audioPrincipal}/>
                </div>

                <div>
                    {playlist.map(item => 
                    <div className='cardmusica' >

                        <img src={exibirImagemProduto(item.imagem)} onClick={() => setAudioPrincipal(exibirAudio(item.audio)) & setImagemPrincipal(exibirImagemProduto(item.imagem)) & setNomePrincipal(item.musica) } className="image-music" />

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