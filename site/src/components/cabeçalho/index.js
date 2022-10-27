import { API_URL } from '../../api/config'
import './index.scss'

export default function Cabeçario(props){
    return(
       <main className='cabecalho'>
        <div className='logo'>
            <img src='/images/logooo.png' width="120px"></img>
        </div>
        <div className='div1'>
            <div className='lupa'>
            <img src='/images/lupa.png'></img>
            </div>
            <div className='playlist'>
            <img src='/images/playlist.png'></img>
            </div>
            <div className='logoconta'>
            <img className='usuario' src={`${API_URL}/${props.usuario.imagem}`}></img>
            </div>
        </div>

       </main>
    )
}