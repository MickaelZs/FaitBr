import './index.scss'

export default function CardGenero(props) {
    return (
      <div className="generos">
       <p> {props.genero.id}</p>
       <p> {props.genero.nome}</p>
       <br/>
       <p>{props.artista.nome}</p>
       <p>{props.artista.nome}</p>
      </div>
    );
  }