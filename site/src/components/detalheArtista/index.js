
import { API_URL } from '../../api/config';
import './index.scss';


export default function DetalheArtista(props) {
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


                <div className='card'>
                <img className="capa" src={`${API_URL}/${props.musi.imagem}`}></img>
                <div className='text'>
                <p className='nome'>{props.musi.nome} </p>
                <p className='nome'>{props.musi.genero}</p>
                
                </div>    
                
                </div>
        
            </div>
        </div>
        </main>
    )
}