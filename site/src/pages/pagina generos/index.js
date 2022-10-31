
import {useParams} from 'react-router-dom'
import { buscarArtistaPorGeneroId, BuscarArtistaPorNome } from '../../api/cadastroArtistaAPI';
import './index.scss'
import { useState,useEffect  } from 'react';
import CardGenero from '../../components/genero';
import { buscarGeneroPorId, buscarGeneroPorNome } from '../../api/generoAPI';
import { API_URL } from '../../api/config';




export default function Index(){


const [genero,setGenero] = useState ([])
const [ge,setGe] = useState ({})
const [buscar,setBuscar] = useState ('')

const {idParam} = useParams();

async function filtrar (){
    const resp = await BuscarArtistaPorNome (buscar)
    setGenero(resp)
    console.log(resp)
    
}

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
        <div className='pagina-genero'> 
         <div className='caixa-busca'>             
                    <input type="text" placeholder='Buscar artista por nome' value={buscar} onChange={e => setBuscar(e.target.value)} />
                <img src='/images/procurar.png'  onClick={filtrar} />
                </div>
            <div className="genero-nome">
            <h1>{ge.nome}</h1>
            </div>                 
        <div className='Artistas'>
            
       
      
        {genero.map(item =>
        <div className="card">
        <div className="generos">
        <img src={`${API_URL}/${item.artista}`} alt="" />
       <p> {item.nome}</p>
       
       
       <br/> 
      </div>
      </div>
            
            )}
    </div>
    
   
    
    </div>
    )
}