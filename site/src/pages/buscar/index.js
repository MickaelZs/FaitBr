import { useState } from 'react';
import { BuscarArtistaPorNome, listaArtista } from '../../api/cadastroArtistaAPI';
import './index.scss'

export default function Index(){

    const [filtro, setFiltro] = useState('')
    const [nome,setNome] = useState([])

    async function carregarArtista(){
        const resp = await listaArtista();
        setNome(resp);
    }

    async function filtrar(){
        const resp = await BuscarArtistaPorNome(filtro);
        setNome(resp);
    }

        return(

            <div className='pagina-buscar'>
        <div className='caixa-busca'>             
         <input type="text" placeholder='Buscar artista por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
         <img src='./images/procurar.png'  onClick={filtrar}/>
        </div>
        <div className='container'>
            <div className='card_artistas'>
                <h1>artista</h1>
                <h3>genero</h3>


            </div>

        </div>
        </div>


    )
}