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

    async function carregarArtista (){
        const resp = await buscarPorId(idParam)
        setArtista(resp)
    }

    async function carregarArtistaPorMusica(){
        const resp = await buscarArtistaPorMusicaId(idParam)
            setMusica(resp)
    }

    useEffect (() => {
        carregarArtista()
        carregarArtistaPorMusica()

    },[])
    return(
        <div>

         <DetalheArtista artista={artista} musica={musica} />
       

        </div>
    )
}