import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../api/config';
import { buscarMusicaPorId } from '../../api/musicaAPI'
import './index.scss'

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
                <audio className="audio" controls src={`${API_URL}/${item.musica}`}></audio>
            </div>
         
            )}
        </main>
    )
}