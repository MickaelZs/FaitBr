import './index.scss'

export default function CardGenero(props) {
    return (
      <div className="generos">
       <img src={props.avatar} />
       <p> {props.nome}</p>
      </div>
    );
  }