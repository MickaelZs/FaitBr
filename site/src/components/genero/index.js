import { API_URL } from '../../api/config';
import './index.scss'

export default function CardGenero(props) {

    return (
      <div className="generos">
        <img src={`${API_URL}/${props.genero.artista}`} alt="" />
       <p> {props.genero.nome}</p>
       <p> {props.ge.nome}</p>
       
       <br/>
      </div>
    );
  }