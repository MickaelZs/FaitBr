import "./index.scss"

export default function Cardaddmsc(props){
    return(
        <div className="Card-addmusica">
            <h2>{props.id}</h2>
            <div className="section-music"> 
            <img src={props.image} width="120px"></img>
            <div className="atorenome">
                <h1>{props.nome}</h1>
                <div className="border">
                <p>{props.ator}</p>
                </div>
            </div>
            </div>
        </div>
    )
}