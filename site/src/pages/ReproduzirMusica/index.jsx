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

export default function Reproduzir() {
    const [musica, setMusica] = useState([])
    const [imagemPrincipal, setImagemPrincipal] = useState();
    const [musicaPrincipal, setMusicaPrincipal] = useState('');
    const [generoPrincipal, setGeneroPrincipal] = useState('');
    const [audioPrincipal, setAudioPrincipal] = useState(0)
    const navigate = useNavigate()
    const { idParam } = useParams()

    function acessarMusica(id) {
        navigate(`/Reproduzir/${id}`)
    }

    function exibirImagemPrincipal(imagem) {
        if (musica.imagem > 0) {
            console.log(imagem)
            return API_URL + '/' + imagem[imagemPrincipal];
        }

        else {
            return '/images/teto.jpg';

        }


    }

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

    }, [])


    return (
        <main className='pagina-reproduzir-musicaaa'>
            <Cabecario />
            <section className='faixa-principal'>

                <div className='faixa-1'>
                <div  className='imgg'>
                    {!imagemPrincipal &&
                        <img  className='usuarioo' src='/images/botao-play (3).png'  />
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

                <div >

                    {musica.map((item, pos) =>

                        <div className='cardMusica' onClick={() => setImagemPrincipal(exibirImagemProduto(item.imagem)) & setAudioPrincipal(exibirAudio(item.audio)) & setMusicaPrincipal(item.nome) & setGeneroPrincipal(item.genero)}>

                            <img src={exibirImagemProduto(item.imagem)} className="image-music" />

                            <div className='div-ator'>
                                <h1>{item.nome}</h1>
                                <p>{item.genero}</p>

                            </div>


                        </div>
                    )}


                </div>

            </section>
        </main>
    );
}