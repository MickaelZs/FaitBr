import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BuscarArtistaPorNome, listaArtista } from '../../api/cadastroArtistaAPI';
import { buscarGeneroPorNome } from '../../api/generoAPI';
import './index.scss'

export default function Index(){

    const [filtro, setFiltro] = useState('')
    const [filtro2, setFiltro2] = useState('')
    const [genero,setGenero] = useState([])
    const [artista,setArtista] = useState ([])
    const navigate = useNavigate ()


   

    async function filtrar(){
        const resp = await BuscarArtistaPorNome (filtro);
        const reps2 = await buscarGeneroPorNome (filtro)
        setArtista(resp);
        setGenero(reps2)
    }

    function acessarArtista(id){
        navigate(`/detalhe/artista/${id}`)
    }

    function acessarGenero(id){
        navigate(`/genero/${id}`)
    }

        return(

            <div className='pagina-buscar'>
        <div className='caixa-busca'>             
         <input type="text" placeholder='Buscar artista por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
         <img src='./images/procurar.png'  onClick={filtrar} />
        </div>
        <div className='container'>
            {artista.map(item =>
            <div className='card_artistas' onClick={() => acessarArtista (item.id)}>
                <h1>{item.nome}</h1>
                <h3>{item.genero}</h3>

            </div>
            
            )}
            </div>


            {genero.map(item =>
            <div className='card_artistas' onClick={() => acessarGenero (item.id)}>
                <h1>{item.nome}</h1>
                <h3>{item.genero}</h3>
            </div>
            )}
            </div>
            
      


    )
}