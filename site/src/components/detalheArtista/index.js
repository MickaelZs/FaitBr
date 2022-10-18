
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/config';
import './index.scss';


export default function DetalheArtista(props) {
    const navigate = useNavigate()

    function acessarMusica(id){
        navigate(`/Reproduzir/${id}`)
    }

    


    return (
        <main className='comp-detalhe'>
        <div className=''>
            <img src={`${API_URL}/${props.artista.artista}`} />
            <div className='box-info'>
                <h1>{props.artista.nome}</h1>
                <div className='info'>
                    <h3>Genero</h3>
                    <p>{props.artista.genero}</p>
                </div>
                <div className='info'>
                    <h3>Sobre</h3>
                    <p className='sinopse'>{props.artista.sobre} </p>
                </div>

            


                <div className='card' onClick={() => acessarMusica (props.musica.id)}>
                <img className="capa" src={`${API_URL}/${props.musica.imagem}`}></img>
                <div className='text'>
                <p className='nome'>{props.musica.nome} </p>
                <p className='nome'>{props.musica.genero}</p>
                
                </div>    
                
                </div>
        
            </div>
        </div>
        </main>
    )
}