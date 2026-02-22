import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BuscarArtistaPorNome, listaArtista } from '../../api/cadastroArtistaAPI';
import { API_URL } from '../../api/config';
import { buscarGeneroPorNome } from '../../api/generoAPI';
import Cabecario from '../../components/cabeçalho';
import storage from 'local-storage'
import './index.scss'

export default function Index(){

    const [filtro, setFiltro] = useState('')
    const [filtro2, setFiltro2] = useState('')
    const [genero,setGenero] = useState([])
    const [artista,setArtista] = useState ([])
    const navigate = useNavigate ()


    useEffect(() => {
            if(!storage('usuario-logado')){
                navigate('/LoginUsuario');
            }
        },[])

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

        <main className='pagina-buscar'>
            <Cabecario/>
            <body>

                <div className='caixa-busca'>  
           
                    <input type="text" placeholder='Buscar artista por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                <img src='./images/procurar.png'  onClick={filtrar} />
                </div>

                <div className='container'>
                    <div className='comp-card'>
                    {artista.map(item =>
                    <div className='section-music' onClick={() => acessarArtista (item.id)}>
                        <img className="imagem"src={`${API_URL}/${item.artista}`}/>
                        <div className="atorenome">
                            <div className="border">
                        <h1>{item.nome}</h1>
                        <h2>{item.genero}</h2>
                        </div>
                        </div>                        
                </div> 
                            
                )}
                </div>
                <div className='card-genero'>
                    {genero.map(item =>
                    <div className='section-music' onClick={() => acessarGenero (item.id)}>
                        <img src={`${API_URL}/${item.genero}`} className="imagem"/>
                        <div  className="atorenome">
                        <h1>{item.nome}</h1>
                        <div className="border">
                        <h3>{item.genero}</h3>
                        </div>
                        </div>
                    </div>
                    )}
                    </div>
                </div>
            </body>
        </main>


            

    )
}