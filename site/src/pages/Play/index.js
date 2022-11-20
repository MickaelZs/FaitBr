import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../api/config';
import { buscarMusicaPorGenero, buscarMusicaPorId } from '../../api/musicaAPI'
import './index.scss'
import AudioPlayer from 'react-audio-player'
import Cabecario from '../../components/cabeçalho';

export default function Play(){

    const [musica,setMusica] = useState ([]);
    const [genero,setGenero] = useState ([])
   
    const {idParam} = useParams()
    async function carregarGeneroPorMusica(){
        const x = await buscarMusicaPorGenero(idParam)
        setGenero(x)
        console.log(x)
    }
    async function carregarMusica(){
        const x = await buscarMusicaPorId()
        setMusica(x)
        console.log(x)
    }

   
      

    useEffect(() => { 
        carregarMusica()
        carregarGeneroPorMusica()
    },[])
    return(
        <main className="pagina-playy-musica">
        <Cabecario/>
        
           <section className='faixa-play'>
          {musica.map(item => 
            <div className='div-center'>
                <img src={`${API_URL}/${item.imagem}`} className='imagem'></img>
                <div className="h1h3">
                <h1>{item.nome}</h1>
                <h3>{item.genero}</h3>
                </div>
                

                
                <audio className="audio" autoPlay={true}  controls src={`${API_URL}/${item.musica}`}></audio>
            </div>
         
            )}
           

            <div>
            {genero.map(item =>
            <div className='cardMusica'>
                <img src={`${API_URL}/${item.imagem}`} alt="" width='20px' />
                <div className='text'>
                <h1>{item.nome}</h1>
                <h3>{item.genero}</h3>

                </div>
                
            </div>
                
                )}
            </div>
            </section>
           
        </main>
    )
}