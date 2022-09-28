import './index.scss'

export default function CardAudio(props){
    return(
        <main className='cardmusica'>
            <p className='p'>{props.id} </p>
            <img src={props.image} className="image-music" width="100px"/>
            <div className='div-ator'>
                <p className='nome'>{props.nome}</p>
                <p className='autor'>{props.autor}</p>
            </div>
            <img src="./images/Curtida.svg" width="30px" />
            </main>
    );
}