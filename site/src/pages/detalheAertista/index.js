import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPorId } from "../../api/cadastroArtistaAPI"
import DetalheArtista from "../../components/detalheArtista"
import Cabeçario from "../../components/cabeçalho"


export default function Index(){
    const[artista, setArtista] = useState ({})
    const {idParam} = useParams ()

    async function carregarArtista (){
        const resp = await buscarPorId(idParam)
        setArtista(resp)
    }

    useEffect (() => {
        carregarArtista()

    },[])
    return(
        <div>
           

            <DetalheArtista artista={artista}/>

        </div>
    )
}