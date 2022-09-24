import {useParams} from 'react-router-dom'
import { buscarImagem, buscarPorId, listaArtista } from '../../api/cadastroArtistaAPI';
import Artistas from '../../components/artista'
import './index.scss'
import { useState,useEffect  } from 'react';



export default function Index(){

const [artista, setArtista] = useState({});

const {idParam} = useParams();


useEffect(() => {
    carregarArtista();
    async function carregarArtista(){
        const resposta = await buscarPorId(idParam)
        setArtista(resposta);
    }
},[]);


    return(
        <div className='Artistas'>
            <Artistas artista={artista}/>
           

    </div>
    )
}