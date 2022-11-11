import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarMusicaPorId } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';
import { listarPlaylistItemUsuarioo } from '../../api/playlistAPI';
import Storage from 'local-storage'

export default function Reproduzir() {
    const [musica, setMusica] = useState([])
    const [imagemPrincipal, setImagemPrincipal] = useState(0);
    const navigate = useNavigate()
    const { idParam } = useParams()

    function acessarMusica(id){
        navigate(`/Reproduzir/${id}`)
    }

    function exibirImagemPrincipal() {
        if (musica.imagem) {
            return  API_URL + '/' + musica.imagem[imagemPrincipal];
        }
         
        else {
            return '/images/teto.jpg';
            
        }

      
    }

    function exibirImagemProduto(imagem) {
        return  API_URL + '/' + imagem;
       
    }



    async function carregarMusica() {
        const id = Storage('usuario-logado').id
        const x =  await listarPlaylistItemUsuarioo(id)
       
        setMusica(x)
        console.log(x)
        
    }

    useEffect(() => {
        carregarMusica()

    }, [])

   
    return (
        <main className='pagina-reproduzir'>
            <section className='faixa-principal'>

               
                <div className='faixa1'>
                    
                <img src={exibirImagemPrincipal()} />
                    <h2>Musica do mickael de novo</h2>
                    <h3>Mickael</h3>
                </div>

                <div>
                    <label>1</label>
                    {musica.map((item,pos) =>
                    <div className='cardmusica'  onClick={() => acessarMusica(item.id_playlist_item)}>
                            
                            <img className='image-music' src={exibirImagemProduto(item.imagem)} onClick={() => setImagemPrincipal(pos)}  />

                        <div className='div-ator'>
                            <p className='nome'>{item.musica}</p>
                            <p className='autor'>Mickael</p>
                        </div>

                    </div>
                    )}

                    <div className='cardmusica'>

                        <img src="./images/ftneymar.svg" className="image-music" />

                        <div className='div-ator'>
                            <p className='nome'>musica do Mickael</p>
                            <p className='autor'>Mickael</p>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}