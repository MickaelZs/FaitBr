import './index.scss'

export default function CardCadastromsc(props){
    return(
        <div className='card-faixa1'>
            <div className={props.cardscss}>
            <img src={props.categoria}/>
            <p className={props.pclas}>{props.nome}</p>
            </div>
        </div>
    );
}