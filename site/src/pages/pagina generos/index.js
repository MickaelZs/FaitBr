
import {useNavigate, useParams} from 'react-router-dom'
import { buscarArtistaPorGeneroId, BuscarArtistaPorNome } from '../../api/cadastroArtistaAPI';
import './index.scss'
import { useState,useEffect  } from 'react';
import CardGenero from '../../components/genero';
import { buscarGeneroPorId, buscarGeneroPorNome } from '../../api/generoAPI';
import { API_URL } from '../../api/config';
import Cabecario from '../../components/cabeçalho';
import Storage from 'local-storage'




export default function Index(){


const [genero,setGenero] = useState ([])
const [ge,setGe] = useState ({})
const [buscar,setBuscar] = useState ('')

const {idParam} = useParams();
const navigate = useNavigate()

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

function acessarArtista(id){
    navigate(`/detalhe/artista/${id}`)
  }

 
useEffect(() => {
     if(!Storage('usuario-logado')){
                navigate('/LoginUsuario');
            }
    carregarArtistaPorGenero();
    carregarGenero();
},[]);


    return(
        <div className='pagina-genero'> 
        <Cabecario/>
         
            <div className="genero-nome">
            <h1>{ge.nome}</h1>
            </div>           
            <div className='opa'>      
        <div className='Artistas'>
            
       
      
        {genero.map(item =>
        <div className="card" onClick={() => acessarArtista (item.id)}>
        <div className="generos">
        <img src={`${API_URL}/${item.artista}`} alt="" />
       <p> {item.nome}</p>
       
       
       <br/> 
      </div>
      </div>
            
            )}
    </div>
    </div>
    
   
    
    </div>
    )
}