import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarMusicaPorId } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';
import { ToastContainer, toast } from 'react-toastify';
import Storage from 'local-storage'
import { listarPlaylistItemUsuarioo, criarPlaylist, PlaylistItem } from '../../api/playlistAPI';
import Cabecario from '../../components/cabeçalho';


export default function Reproduzir() {
    const [playlist, setPlaylist] = useState([])
    const [audioPrincipal, setAudioPrincipal] = useState(0);
    const [imagemPrincipal, setImagemPrincipal] = useState(0);
    const [nomePrincipal, setNomePrincipal] = useState('');
    const [nomeArtista, setNomeArtista] = useState('');
    const navigate = useNavigate()
    const { idParam } = useParams();

    async function carregarMusica() {

        const x = await listarPlaylistItemUsuarioo(idParam)
        setPlaylist(x)
        console.log(x)
    }

    // function acessarMusica(id){
    //     navigate(`/Reproduzir/Playlist/${id}`)
    // }
    function exibirImagemProduto(imagem) {


        return API_URL + '/' + imagem


    }
    function exibirAudio(audio) {
        return API_URL + '/' + audio;

    }
    function exibirNome(musica) {
        return API_URL + '/' + musica;
    }


    useEffect(() => {
        carregarMusica()

    }, [])
    // function AdicionarMusicaPlaylist(id){

    //     navigate(`/AdicionarMusica/${id}`)
    // }

    async function AdicionarMusicaPlaylist(id) {
        try {
            Storage("nova", [id])
            navigate(`/adicionarMusicaPlaylist/${id}`)
        }

<<<<<<< HEAD
    return(
        <main className='pagina-reproduzir-playlist'>
            <Cabecario/>
            <section className='faixa-principal'>

                <div className='faixa-1'>
                    <img className='ImgPrincipal' src= {imagemPrincipal} alt="" />
                    <h2>{nomePrincipal}</h2>
                    <h3>{nomeArtista}</h3>
                    <audio controls autoPlay={true} src={audioPrincipal}/>
                    <div className='kk'>
                    <img onClick={() => AdicionarMusicaPlaylist(idParam)} className="botaoImg" src="/images/addM.png" alt="" width="35px"/>
                    <p>Adicionar Musica</p>
                    </div>
=======

        catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message);
        }
    }

    return (
        <main className='pagina-reproduzir'>
            <Cabecario />
            <section className='faixa-principal'>

                <div className='faixa-1'>
                    {!imagemPrincipal &&
                        <img className='usuarioo' src='/images/musica.png' />
                    }

                    {imagemPrincipal &&
                        <img src={imagemPrincipal} alt="" />
                    }
                    <h2>{nomePrincipal}</h2>
                    <h3>Mickael</h3>
                    <audio controls autoPlay={true} src={audioPrincipal} />
                    <button onClick={() => AdicionarMusicaPlaylist(idParam)}>adicionar musica</button>

>>>>>>> cc00af60bcb94ea0a4090ecd7a311a619f67bdb2
                </div>

                <div>

                    {playlist.map(item =>
<<<<<<< HEAD
                    
                    <div className='cardMusica' onClick={() => setAudioPrincipal(exibirAudio(item.audio)) & setImagemPrincipal(exibirImagemProduto(item.imagem)) & setNomePrincipal(item.musica) & setNomeArtista(item.artista) } >

                        <img src={exibirImagemProduto(item.imagem)}  className="image-music" />

                        <div className='div-ator'>
                            <h1>{item.musica}</h1>
                            <p>{item.artista}</p>
                           
=======

                        <div className='cardMusica' >

                            <img src={exibirImagemProduto(item.imagem)} onClick={() => setAudioPrincipal(exibirAudio(item.audio)) & setImagemPrincipal(exibirImagemProduto(item.imagem)) & setNomePrincipal(item.musica)} className="image-music" />

                            <div className='div-ator'>
                                <h1>{item.musica}</h1>
                                <p>Mickael</p>
                            </div>

>>>>>>> cc00af60bcb94ea0a4090ecd7a311a619f67bdb2
                        </div>
                    )}


                </div>

            </section>
        </main>
    );
}