import { useEffect } from 'react'
import { buscarPorId, listaArtista } from '../../api/cadastroArtistaAPI';
import Artistas from '../../components/artista'
import './index.scss'
import { useState } from 'react';



export default function Index(){

const [artista, setArtista] = useState([]);


useEffect(() => {
    carregarArtista();
},[]);

async function carregarArtista(){
    const resposta = await listaArtista()
    setArtista(resposta)
}
    return(
        <div className='Artistas'>
             {artista.map(item =>
        <div className="generos">
       <img src={item.Artistas} />
      <p>{item.nome} </p>
      </div>
             )}

    </div>
    )
}