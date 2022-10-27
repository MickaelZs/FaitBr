import { API_URL } from '../../api/config';
import './index.scss'

export default function CardGenero({item: {artista,nome}}) {

    return (
      <div className="generos">
        <img src={`${API_URL}/${artista}`} alt="" />
       <p> {nome}</p>
       <p> {nome}</p>
       
       <br/> 
      </div>
    );
  }