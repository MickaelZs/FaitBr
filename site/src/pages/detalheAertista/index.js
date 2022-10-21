import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPorId } from "../../api/cadastroArtistaAPI"
import DetalheArtista from "../../components/detalheArtista"
import Cabeçario from "../../components/cabeçalho"
import { buscarArtistaPorMusicaId, listaMusicaArtista } from "../../api/musicaAPI"
import { API_URL } from "../../api/config"
import './index.scss'


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
    //src={`${API_URL}/${artista.artista}`}
    //<img className="capa" src={`${API_URL}/${item.imagem}`}></img>

    return(
        <main className='comp-detalhe'>
            <body>
            <div className="comp-card">
                <div className='aaaa'>

                        <div className="imagem">
                            <img src='/images/teto.jpg' />
                        </div>

                    <div className='box-info'>
                        <p>{artista.id}</p>
                        <h1 className="titulo-artista">mc poze{artista.nome}</h1>

                        <div className="genero">
                            <h3 >Genero:</h3>
                            <p className="--genero">Funk{artista.genero}</p>
                        </div>

                        <div className='genero'>
                            <h3>Sobre</h3>
                            <p className='sinopse'>Marlon Brandon Coelho Couto Silva, mais conhecido pelo seu nome artístico MC Poze do Rodo ou simplesmente MC Poze, é um rapper e cantor brasileiro de funk carioca.{artista.sobre} </p>
                        </div>
                        <button className='botao'>Seguir</button>

                    </div>

                </div>
                
                    <div className='card-musica'>
                        {musica.map(item => 
                        <div  onClick={() => acessarMusica(item.id)}>
                            <img className="capa" src='/images/teto.jpg'></img>
                            <div className='text'>
                            <p className='nome'>aaaaa{item.nome} </p>
                            <p className='nome'>aaaaaaaaaaa{item.genero}</p>
                            </div>

                        </div>    
                        )}
                    </div>
            </div>

            </body>
        </main>
    )
}