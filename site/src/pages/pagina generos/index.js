
import {useParams} from 'react-router-dom'
import { buscarImagem, buscarPorId, listaArtista } from '../../api/cadastroArtistaAPI';
import Artistas from '../../components/artista'
import './index.scss'
import { useState,useEffect  } from 'react';
import { API_URL } from '../../api/config';
import { buscarGeneroPorId, listaGeneros } from '../../api/generoAPI';
import { selectArtistaeGeneros } from '../../api/selectArtistasPorGenerosAPI.js';
import { set } from 'local-storage';
import CardGenero from '../../components/genero';



export default function Index(){


const [genero,setGenero] = useState ({})
const [artista,setArtista] = useState ({})


const {idParam} = useParams();



async function carregarGenero (){
    const resp = await buscarGeneroPorId(idParam)
    setGenero(resp)
}

async function carregarArtista(){
    const resp = await buscarPorId()
    setArtista (resp)
}
 
useEffect(() => {
    carregarArtista();
  
        carregarGenero();
},[]);


    return(
        <div>
            
            
        <div className='Artistas'>
           
            
        <p>  </p>
        <CardGenero genero={genero} artista={artista} />
        <p></p>

    </div>
    
   
    
    </div>
    )
}