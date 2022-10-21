import './index.scss'
import { listaMusicaArtista } from "../../api/musicaAPI"
import { useEffect, useState } from 'react'
import { API_URL } from '../../api/config.js'


export default function Index(){

    const [musica,setMusica] = useState([])
    

    async function carregarMusica(){
        const resp = await listaMusicaArtista()
        setMusica(resp)
    }

    useEffect(() =>{
        carregarMusica();

    },[])

    

    return(
        <div className='add'>
            {musica.map( item => 
            <div className='card'>
               
               
                <img src={`${API_URL}/${item.imagem}`} alt="" />
               <h1> {item.musica}</h1>
                <h2> {item.artista}</h2>
                <h2> {item.genero}</h2>
                <audio controls  src={`${API_URL}/${item.audio}`}></audio>
                <input type="radio"  />
                
                </div>
           
                
                
            )}
        </div>
    )
}

