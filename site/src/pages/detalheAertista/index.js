import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPorId, ParaDeSeguir, seguirArtista } from "../../api/cadastroArtistaAPI"
import { ToastContainer, toast } from 'react-toastify';
import { buscarArtistaPorMusicaId, curtirMusica, deletarrCurtida, listaMusicaArtista, listarCurtidas, } from "../../api/musicaAPI"
import { verificarSeSegue } from "../../api/cadastroArtistaAPI";
import { API_URL } from "../../api/config"
import AudioPlayer from 'react-modular-audio-player'
import './index.scss'


import Storage from 'local-storage'
import Cabecario from "../../components/cabeçalho";



export default function Index() {

    const [artista, setArtista] = useState([]);
    const [musica, setMusica] = useState([]);
    const [curtir, setCurtir] = useState([]);
    const [seguirr, setSeguirr] = useState(false);

    const { idParam } = useParams()
    const navigate = useNavigate()




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

    async function ParaDeSeguirArtista(artistaId) {
        try {
            const user = Storage('usuario-logado').id;
            await ParaDeSeguir(user, artistaId);

            setSeguirr(false); 
            
        } catch (err) {
            toast.error(err.message);
        }
    }

    async function verificarSeguimento() {
        const user = Storage('usuario-logado').id;
        const resp = await verificarSeSegue(user, idParam);
        setSeguirr(resp);
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

    async function seguir() {
        try {
            let id = Storage('usuario-logado').id;

            await seguirArtista(id, idParam);

            setSeguirr(true);
        } catch (err) {
            toast.error(err.message);
        }
    }


    function sairClick() {
        Storage.remove('music')
        navigate('/LoginUsuario')
    }


    async function carregarArtista() {
        const resp = await buscarPorId(idParam)
        setArtista(resp)
        console.log(resp)
    }

    async function carregarArtistaPorMusica() {
        const resp = await buscarArtistaPorMusicaId(idParam)
        setMusica(resp)
        console.log(resp)

    }

    useEffect(() => {
        if (!Storage('usuario-logado')) {
            navigate('/LoginUsuario');
            return;
        }

        async function carregarTudo() {
            await carregarArtista();
            await carregarArtistaPorMusica();
            await carregarCurtidas();
            await verificarSeguimento();
        }

        carregarTudo();

    }, [idParam])
    //src={`${API_URL}/${artista.artista}`}


    return (
        <main className='comp-detalhe'>
            <Cabecario />
            <ToastContainer />


            <body>
                <div className="comp-card">
                    <div className='aaaa'>


                        <div className="imagemm">
                            <img className="capa" src={`${API_URL}/${artista.artista}`}></img>
                        </div>

                        <div className='box-info'>

                            <h1 className="titulo-artista">{artista.nome}</h1>

                            <div className="genero">
                                <h3 >Genero:</h3>
                                <p className="--genero">{artista.genero}</p>
                            </div>

                            <div className='genero'>
                                <h3>Sobre</h3>
                                <p className='sinopse'>{artista.sobre} </p>
                            </div>
                            <div>
                                {seguirr ? (
                                    <button
                                        className='botao'
                                        onClick={() => ParaDeSeguirArtista(artista.id)}
                                    >
                                        Seguindo
                                    </button>
                                ) : (
                                    <button
                                        className='botao'
                                        onClick={seguir}
                                    >
                                        Seguir
                                    </button>
                                )}
                            </div>


                        </div>

                    </div>



                    {musica.map((item, index) => (
                        <div className="Card-addmusica" >
                            <div className="section-music" onClick={() => acessarMusica(idParam)}>
                                <img src={`${API_URL}/${item.imagem} `} className="imagem" ></img>
                                <div className="atorenome">
                                    <h1>{item.nome}</h1>
                                    <div className="border">
                                        <p>{item.genero}</p>
                                    </div>
                                </div>

                                <div
                                    className="heart"
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
                                                ? "/images/coracao (4).png"
                                                : "/images/coracao (2).png"
                                        }
                                    />
                                </div>

                            </div>



                        </div>

                    ))}



                </div>



            </body>
        </main>
    )
}
