import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarMusicaPorId, curtirMusica, deletarrCurtida } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';

import { ToastContainer, toast } from 'react-toastify';
import Storage from 'local-storage'
import { listarPlaylistItemUsuarioo, criarPlaylist, PlaylistItem, DeletarMusicaPlaylist } from '../../api/playlistAPI';
import Cabecario from '../../components/cabeçalho';


export default function Reproduzir() {
    const [playlist, setPlaylist] = useState([])
    const [audioPrincipal, setAudioPrincipal] = useState('');
    const [imagemPrincipal, setImagemPrincipal] = useState('');
    const [nomePrincipal, setNomePrincipal] = useState('');
    const [nomeArtista, setNomeArtista] = useState('');
    const [curtir, setCurtir] = useState(false);
    const navigate = useNavigate()
    const { idParam } = useParams();

    async function carregarMusica() {
        const x = await listarPlaylistItemUsuarioo(idParam)
        setPlaylist(x)
      
    }

    
    async function curtirr(position) {
        try {
            let id = Storage('usuario-logado').id;
            let musicaSelecionada = playlist[position].musica
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

    
    async function deletarMusicaClick(position) {
        try {
            alert(position)
            const p = Storage('foi').id
            console.log(p)
            const musica = playlist[position].idMusica
            console.log(musica)
            const resp = await DeletarMusicaPlaylist(p,musica, position)

            
            toast.dark('musica deletada da playlist') 
        }
               catch (err) {
            if (err.response) toast.error(err.response.data.erro);
            else toast.error(err.message);
        }
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
         if(!Storage('usuario-logado')){
                navigate('/LoginUsuario');
            }
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

        catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message);
        }
    }

    return (
        <main className='pagina-reproduzir-playlist-f'>
            <ToastContainer/>
            <Cabecario />
            <section className='faixa-principal'>

                <div className='faixa-1'>
                    {!imagemPrincipal &&
                        <img  className='usuarioo' src='/images/musica.png' />
                    }

                    {imagemPrincipal &&
                        <img className="imgMusica" src={imagemPrincipal} alt="" />
                    }
                    <h2>{nomePrincipal}</h2>
                    <h3>{nomeArtista}</h3>
                    <audio controls autoPlay={true} src={audioPrincipal} />
                    
                    <div className='kk'>
                    <img onClick={() => AdicionarMusicaPlaylist(idParam)} className="imgBotao" src="/images/addM.png" alt="" />
                    <p>Adicionar Musica</p>
                    </div>
                    

                </div>

                <div>

                    {playlist.map((item,index) =>
                    <div className='lo'>
                        <div className='cardMusica' >

                            <img src={exibirImagemProduto(item.imagem)} onClick={() => setAudioPrincipal(exibirAudio(item.audio)) & setImagemPrincipal(exibirImagemProduto(item.imagem)) & setNomePrincipal(item.musica) & setNomeArtista(item.artista)} className="image-music" />

                            <div className='div-ator'>
                                <h1>{item.musica}</h1>
                                <p>{item.artista}</p>
                               
                            </div>
                            

                        </div>
                        <div>
                            <button onClick={() => deletarMusicaClick (index)}>deletar</button>

                        </div>
                        {/* <div className="heart" onClick={() => setCurtir(!curtir)  } >
                            {curtir ?
                                <img className="l" src="/images/heart on.png" alt="" onClick={() => deletarClick(item.id)(index)}/>
                                :
                                    <img className="l" src="/images/heart.png" alt=""  onClick={() => curtirr (index) } />}

                            </div> */}
                        </div>
                    )}


                </div>

            </section>
        </main>
    );
}