import './index.scss'

export default function CardArtistas(props) {
    return (
      <div className="Artistas">
       <img src={props.avatar} />
       <p>{props.nome}</p>
      </div>
    );
  }