import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPorId, ParaDeSeguir, seguirArtista } from "../../api/cadastroArtistaAPI"
import { ToastContainer, toast } from 'react-toastify';
import { buscarArtistaPorMusicaId, curtirMusica, deletarrCurtida, listaMusicaArtista, listarCurtidas } from "../../api/musicaAPI"
import { API_URL } from "../../api/config"
import AudioPlayer from 'react-modular-audio-player'
import './index.scss'


import Storage from 'local-storage'
import Cabecario from "../../components/cabeçalho";



export default function Index() {

    const [artista, setArtista] = useState([]);
    const [musica, setMusica] = useState([]);
    const [curtir, setCurtir] = useState(false);
    const [seguirr, setSeguirr] = useState(false);
    
    const { idParam } = useParams()
    const navigate = useNavigate()
   


    
    async function curtirr(position) {
        try {
            let id = Storage('usuario-logado').id;
            let musicaSelecionada = musica[position].id
            const resp = await curtirMusica(musicaSelecionada, id)
            Storage('Musica Curtida', resp)
            console.log(resp)
            
            toast.dark('musica curtidaa');
        }

        catch (err) {
            if (err.response) toast.error(err.response.data.erro);
            else toast.error(err.message);

        }

    }

    async function deletarClick(position) {
        try {
            console.log(position)
            const user = Storage('usuario-logado').id
            const resp = await deletarrCurtida(user, position)
            Storage.remove('Musica Curtida')
            console.log(resp)
            toast.dark('curtida deletada') 
        }
               catch (err) {
            if (err.response) toast.error(err.response.data.erro);
            else toast.error(err.message);
        }
    }

    async function ParaDeSeguirArtista(position) {
        try {
             
             const user = Storage('usuario-logado').id
             const resp = await ParaDeSeguir(user,position)
             Storage.remove('Artista Seguido')
             console.log(resp)
            
        }
        catch (err) {
            if (err.response) toast.error(err.response.data.erro);
            else toast.error(err.message);

        }
    }


    function acessarMusica(id) {
        navigate(`/Reproduzir/${id}`)
    }

    function mostrarImagem(imagem) {

        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {

            return `${API_URL}/${imagem}`
        }
    }
    function escolherImagem(objeto, mostrarNovaimagem) {
        document.querySelector(objeto).src = "./images/heart on.png";
    }

    // async function carregarCurtidas() {
    //     const id = Storage('usuario-logado').id;
    //     const resp = await listarCurtidas(id)
    //         (resp)


    // }

    async function seguir() {
        try {
            let id = Storage('usuario-logado').id;
            let artistas = artista.id
            const resp = await seguirArtista(id, artistas)
            Storage('Artista Seguido',resp)
            console.log(resp)
            toast.dark('vamosssss')
        }
        catch (err) {
            if (err.response) toast.error(err.response.data.erro);
            else toast.error(err.message);
        }

    }

    function sairClick(){
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
        carregarArtista()
        carregarArtistaPorMusica()
 

    }, [])
    //src={`${API_URL}/${artista.artista}`}


    return (
        <main className='comp-detalhe'>
            <Cabecario/>
            <ToastContainer />


            <body>
                <div className="comp-card">
                    <div className='aaaa'>

                        <div className="imagem">
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
                            <div onClick={()=> setSeguirr(!seguirr)}>
                                {seguirr ? 
                                <button className='botao' onClick={() => ParaDeSeguirArtista(artista.id) }>Seguindo</button>
                                :
                                <button className='botao' onClick={() => seguir(artista)}>Seguir</button>
                            
                            }
                           

                            </div>
                           

                        </div>

                    </div>



                    {musica.map((item, index) => (
                        <div className="Card-addmusica" >
                            <div className="section-music"  onClick={()=> acessarMusica(item.id)}>
                                <img src={`${API_URL}/${item.imagem} `} className="imagem" ></img>
                                <div className="atorenome">
                                    <h1>{item.nome}</h1> 
                                    <div className="border">
                                        <p>{item.genero}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="heart" onClick={() => setCurtir(!curtir)  } >
                            {curtir ?
                                <img className="l" src="/images/heart on.png" alt="" onClick={() => deletarClick(item.id)(index)} />
                                :
                                    <img className="l" src="/images/heart.png" alt="" onClick={() => curtirr (index)  } />}

                            </div>
                            
                        </div>

                    ))}

 

                </div>



            </body>
        </main>
    )
}
