import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPorId } from "../../api/cadastroArtistaAPI"
import DetalheArtista from "../../components/detalheArtista"
import Cabeçario from "../../components/cabeçalho"
import { buscarArtistaPorMusicaId, listaMusicaArtista } from "../../api/musicaAPI"
import { API_URL } from "../../api/config"


export default function Index(){
    const[artista, setArtista] = useState ([])
    const[musica, setMusica] = useState ([])
    const {idParam} = useParams ()
    const navigate = useNavigate()

    function acessarMusica(id){
        navigate(`/Reproduzir/${id}`)
    }


    async function carregarArtista (){
        const resp = await buscarPorId(idParam)
        setArtista(resp)
    }

    async function carregarArtistaPorMusica(){
        const resp = await buscarArtistaPorMusicaId(idParam)
            setMusica(resp)
            console.log(resp)
    }

    useEffect (() => {
        carregarArtista()
        carregarArtistaPorMusica()

    },[])
    return(
        <main className='comp-detalhe'>
        <div className=''>
            <img src={`${API_URL}/${artista.artista}`} />
            <div className='box-info'>
                <p>{artista.id}</p>
                <h1>{artista.nome}</h1>
                <div className='info'>
                    <h3>Genero</h3>
                    <p>{artista.genero}</p>
                </div>
                <div className='info'>
                    <h3>Sobre</h3>
                    <p className='sinopse'>{artista.sobre} </p>
                </div>

                {musica.map(item => 
                <div className='card' onClick={() => acessarMusica(item.id)}>
                <img className="capa" src={`${API_URL}/${item.imagem}`}></img>
                <div className='text'>
                <p className='nome'>{item.nome} </p>
                <p className='nome'>{item.genero}</p>
                
                </div>    
                
                </div>
                )}
        
            </div>
        </div>
        </main>
    )
}