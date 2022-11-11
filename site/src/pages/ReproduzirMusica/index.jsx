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

    function exibirImagemPrincipal(imagem) {
        if (musica.imagem > 0) {
            console.log(imagem)
            return  API_URL + '/' + imagem[imagemPrincipal];
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

                <div className='faixa-1'>
                    <img src={exibirImagemPrincipal()} alt="" />
                    <h2>Musica do mickael de novo</h2>
                    <h3>Mickael</h3>
                </div>

                <div >

                {musica.map((item,pos) =>
//  onClick={() => acessarMusica(item.id_playlist_item)}
<div className='cardmusica'>

    <img src={exibirImagemProduto(item.imagem)} onClick={() => setImagemPrincipal(pos)} className="image-music" />

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