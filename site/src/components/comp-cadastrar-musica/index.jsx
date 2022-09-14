import './index.scss'

export default function CardCadastromsc(props){
    return(
        <div className='card-faixa1'>
            <img src={props.categoria}/>
            <p>{props.nome}</p>
        </div>
    );
}