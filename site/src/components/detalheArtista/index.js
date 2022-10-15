
import { API_URL } from '../../api/config';
import './index.scss';

export default function DetalheArtista(props) {
    return (
        <div className='comp-detalhe'>
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


                <div className='info'>
                    <h3>Sobre musica</h3>
                <p className='sinopse'>{props.musi.nome} </p>
                </div>
        
            </div>
        </div>
    )
}