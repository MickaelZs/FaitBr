import { useEffect, useState } from 'react'
import { buscarMusicaPorId } from '../../api/musicaAPI'
import './index.scss'

export default function Play(){

    const [musica,setMusica] = useState ([]);


    async function carregarMusica(){
        const x = await buscarMusicaPorId()
        setMusica(x)
    }

    useEffect({ 

    },[])
    return(
        <main className="pagina-playy">
            <div className='div-center'>
                <img src="./images/image-play.png   " className='imagem'></img>
                <div className="h1h3">
                <h1>Musica</h1>
                <h3>Gênero</h3>
                </div>
                <h2 className="audio">Audio</h2>
            </div>

        </main>
    )
}