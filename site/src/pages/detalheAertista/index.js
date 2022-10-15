import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPorId } from "../../api/cadastroArtistaAPI"
import DetalheArtista from "../../components/detalheArtista"
import Cabeçario from "../../components/cabeçalho"
import { buscarArtistaPorMusicaId, listaMusicaArtista } from "../../api/musicaAPI"


export default function Index(){
    const[artista, setArtista] = useState ({})
    const[musi, setMusi] = useState ({})
    const {idParam} = useParams ()

    async function carregarArtista (){
        const resp = await buscarPorId(idParam)
        setArtista(resp)
    }

    async function carregarArtistaPorMusica(){
        const resp = await buscarArtistaPorMusicaId(idParam)
            setMusi(resp)

        
    }

    

    useEffect (() => {
        carregarArtista()
        carregarArtistaPorMusica()

    },[])
    return(
        <div>
           

            <DetalheArtista artista={artista}  musi={musi}/>

        </div>
    )
}