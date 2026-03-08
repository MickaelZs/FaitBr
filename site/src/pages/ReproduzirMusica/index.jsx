import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarArtistaPorMusicaId, buscarMusicaPorId } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';
import { listarPlaylistItemUsuarioo } from '../../api/playlistAPI';
import Storage from 'local-storage'
import Cabecario from '../../components/cabeçalho';
import {  curtirMusica, deletarrCurtida, listaMusicaArtista, listarCurtidas, } from "../../api/musicaAPI"
import { ToastContainer, toast } from 'react-toastify';

export default function Reproduzir() {
    const [musica, setMusica] = useState([])
    const [imagemPrincipal, setImagemPrincipal] = useState();
    const [musicaPrincipal, setMusicaPrincipal] = useState('');
    const [generoPrincipal, setGeneroPrincipal] = useState('');
    const [audioPrincipal, setAudioPrincipal] = useState(0)
    const [curtir, setCurtir] = useState([]);
    


    const navigate = useNavigate()
    const { idParam } = useParams()


    function exibirImagemProduto(imagem) {
        return API_URL + '/' + imagem;
    }

    function exibirAudio(audio) {
        return API_URL + '/' + audio;
    }



    async function carregarMusica() {
        const x = await buscarArtistaPorMusicaId(idParam)
        setMusica(x)
        console.log(x)

    }

    useEffect(() => {
        if (!Storage('usuario-logado')) {
            navigate('/LoginUsuario');
        }
        carregarMusica()
        carregarCurtidas()

    }, [])



      async function curtirr(musicaId) {
            try {
                let id = Storage('usuario-logado').id;
    
                setCurtir(prev => [...prev, { IdMusica: musicaId }]);
                await curtirMusica(musicaId, id);
            } catch (err) {
    
            }
        }
    
        function musicaJaCurtida(musicaId) {
            return curtir.some(item => item.IdMusica === musicaId);
        }
    
        async function carregarCurtidas() {
            const id = Storage('usuario-logado').id;
            const resp = await listarCurtidas(id);
    
            setCurtir(resp);
        }
    
        async function deletarClick(musicaId) {
            try {
                const user = Storage('usuario-logado').id;
    
                await deletarrCurtida(user, musicaId);
    
                await carregarCurtidas();
    
            } catch (err) {
                if (err.response) toast.error(err.response.data.erro);
                else toast.error(err.message);
            }
        }
    
    
  
    
        function acessarMusica(id) {
            navigate(`/Reproduzir/${id}`)
        }
    
        // function mostrarImagem(imagem) {
    
        //     if (typeof (imagem) == 'object') {
        //         return URL.createObjectURL(imagem);
        //     }
        //     else {
    
        //         return `${API_URL}/${imagem}`
        //     }
        // }
        // function escolherImagem(objeto, mostrarNovaimagem) {
        //     document.querySelector(objeto).src = "./images/heart on.png";
        // }
    
        // async function carregarCurtidas() {
        //     const id = Storage('usuario-logado').id;
        //     const resp = await listarCurtidas(id)
        //         (resp)
    
    
        // }
    
    
    
        function sairClick() {
            Storage.remove('music')
            navigate('/LoginUsuario')
        }
    
    
        async function carregarArtistaPorMusica() {
            const resp = await buscarArtistaPorMusicaId(idParam)
            setMusica(resp)
            console.log(resp)
    
        }


    return (
        <main className='pagina-reproduzir-musicaaa'>
            <Cabecario />
           

            <section className='faixa-principal'>

                <div className='faixa-1'>
                    <div className='imgg'>
                        {!imagemPrincipal &&
                            <img className='usuarioo' src='/images/play (1).png' />
                            
                        }


                        {imagemPrincipal &&
                            <img className="imgMusica" src={imagemPrincipal} alt="" />
                        }
                    </div>
                    <div className='text'>
                        <h1>{musicaPrincipal}</h1>
                        <h3>{generoPrincipal}</h3>

                    </div>
                    <audio controls autoPlay={true} src={audioPrincipal}></audio>
                </div>

                <div className='contan-cardMusica'>

                    {musica.map((item, pos) =>

                        <div className='cardMusica' onClick={() => setImagemPrincipal(exibirImagemProduto(item.imagem)) & setAudioPrincipal(exibirAudio(item.audio)) & setMusicaPrincipal(item.nome) & setGeneroPrincipal(item.genero)}>

                            <img src={exibirImagemProduto(item.imagem)} className="image-music" />

                            <div className='div-ator'>
                                <h1>{item.nome}</h1>
                                <p>{item.genero}</p>

                            </div>

                             <div
                                    className="heartt"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        musicaJaCurtida(item.id)
                                            ? deletarClick(item.id)
                                            : curtirr(item.id);
                                    }}
                                >
                                    <img
                                        src={
                                            musicaJaCurtida(item.id)
                                                ? "/images/heart (1).png"
                                                : "/images/coracao (2).png"
                                        }
                                    />
                                </div>


                        </div>
                    )}


                </div>

            </section>
        </main>
    );
}