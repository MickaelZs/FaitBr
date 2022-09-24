import './index.scss'
import { buscarImagem } from '../../api/cadastroArtistaAPI'

export default function Artistas (props){
    return(
        <div>
        <div className="artista">
       <img src={buscarImagem( props.artista.artista)} />
       <p> {props.artista.nome}</p>
      </div>

        </div>
    )
}