import { API_URL } from '../../api/config';
import './index.scss'

export default function CardAudio(props){
    return(
        <div className='cardmusica'>
                <p className='p'>{} </p>
                <img src={`${API_URL}/${props.imagem}`} className="image-music" width="100px"/>
                <div className='div-ator'>
                    <p className='nome'>{props.musica}</p>
                    <p className='autor'></p>
                </div>
                <img src="./images/Curtida.svg" width="30px" />
                </div>
    );
}