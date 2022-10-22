import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPorId } from "../../api/cadastroArtistaAPI"
import { ToastContainer, toast } from 'react-toastify';
import DetalheArtista from "../../components/detalheArtista"
import Cabeçario from "../../components/cabeçalho"
import { buscarArtistaPorMusicaId, curtirMusica, listaMusicaArtista, listarCurtidas } from "../../api/musicaAPI"
import { API_URL } from "../../api/config"
import './index.scss'
import Storage from 'local-storage'



export default function Index(){

    const [like,setLike] = useState(false)
    const[artista, setArtista] = useState ([])
    const[musica, setMusica] = useState ([])
    const {idParam} = useParams ()
    const navigate = useNavigate()





          
     

    function acessarMusica(id){
        navigate(`/Reproduzir/${id}`)
    }

    
    async function carregarCurtidas(){
        const id = Storage('usuario-logado').id;
        const resp = await listarCurtidas(id)
        (resp)

    }

    





    async function curtir (){
        try{
             let id = Storage('usuario-logado').id;
            const resp = await curtirMusica(like,id)
  
            toast.dark('musica curtidaa'); 

        }

        catch{

        }
       
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
        carregarCurtidas()

    },[])
    //src={`${API_URL}/${artista.artista}`}
   

    return(
        <main className='comp-detalhe'>
            <ToastContainer/>
            <body>
            <div className="comp-card">
                <div className='aaaa'>

                        <div className="imagem">
                        <img className="capa" src={`${API_URL}/${artista.artista}`}></img>
                        </div>

                    <div className='box-info'>
                        <p>{artista.id}</p>
                        <h1 className="titulo-artista">{artista.nome}</h1>

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
                {musica.map(item => 
                    <div className='card-musica'>
                        
                        <div  onClick={() => acessarMusica(item.id)}>
                            <img className="capaMusic" src={`${API_URL}/${item.imagem}`}></img>
                            <div className='text'>
                            <p className='nome'>aaaaa{item.nome} </p>
                            <p className='nome'>aaaaaaaaaaa{item.genero}</p>
                            </div>
                           
                        </div> 
                        
                        <div>
                         
                                
                              
            
             
            
                
           
          </div> 
                        
                    </div>
                    )}
            </div>

            </body>
        </main>
    )
}
