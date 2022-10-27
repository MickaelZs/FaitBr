
import {useParams} from 'react-router-dom'
import { buscarArtistaPorGeneroId } from '../../api/cadastroArtistaAPI';
import './index.scss'
import { useState,useEffect  } from 'react';
import CardGenero from '../../components/genero';
import { buscarGeneroPorId } from '../../api/generoAPI';
import { API_URL } from '../../api/config';




export default function Index(){


const [genero,setGenero] = useState ([])
const [ge,setGe] = useState ({})

const {idParam} = useParams();

async function carregarArtistaPorGenero(){
    const resp = await buscarArtistaPorGeneroId(idParam)
    setGenero(resp)
    console.log(resp)
}

async function carregarGenero(){
    const resp = await buscarGeneroPorId(idParam)
    setGe(resp)
}

 
useEffect(() => {
    carregarArtistaPorGenero();
    carregarGenero();
},[]);


    return(
        <div>                  
        <div className='Artistas'>
        <p>{ge.nme}</p>
      
        {genero.map(item =>
        <div className="generos">
        <img src={`${API_URL}/${item.artista}`} alt="" />
       <p> {item.nome}</p>
       
       
       <br/> 
      </div>
            
            )}
    </div>
    
   
    
    </div>
    )
}