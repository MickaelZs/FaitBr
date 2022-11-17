import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../api/config';
import { buscarMusicaPorId } from '../../api/musicaAPI'
import './index.scss'
import AudioPlayer from 'react-audio-player'

export default function Play(){

    const [musica,setMusica] = useState ([]);
   
    const {idParam} = useParams()


    async function carregarMusica(){
        const x = await buscarMusicaPorId(idParam)
        setMusica(x)
        console.log(x)
    }

   
      

    useEffect(() => { 
        carregarMusica()
    },[])
    return(
        <main className="pagina-playy">
          {musica.map(item => 
            <div className='div-center'>
                <img src={`${API_URL}/${item.imagem}`} className='imagem'></img>
                <div className="h1h3">
                <h1>{item.nome}</h1>
                <h3>Gênero</h3>
                </div>
                <div>
	  <button onclick="document.getElementById('player').play()">Play</button>
	  <button onclick="document.getElementById('player').pause()">Pause</button>
	  <button onclick="document.getElementById('player').volume+=0.1">Aumentar volume</button>
	  <button onclick="document.getElementById('player').volume-=0.1">Diminuir volume</button>
	</div>

                
                <audio className="audio" id="player" preload='auto|metadata|none'  controls src={`${API_URL}/${item.musica}`}></audio>
            </div>
         
            )}
        </main>
    )
}