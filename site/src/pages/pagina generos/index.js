
import {useParams} from 'react-router-dom'
import { buscarArtistaPorGeneroId } from '../../api/cadastroArtistaAPI';
import './index.scss'
import { useState,useEffect  } from 'react';
import CardGenero from '../../components/genero';
import { buscarGeneroPorId } from '../../api/generoAPI';



export default function Index(){


const [genero,setGenero] = useState ({})
const [ge,setGe] = useState ({})

const {idParam} = useParams();

async function carregarArtistaPorGenero(){
    const resp = await buscarArtistaPorGeneroId(idParam)
    setGenero(resp)
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
        <CardGenero genero={genero} ge={ge} />
    </div>
    
   
    
    </div>
    )
}