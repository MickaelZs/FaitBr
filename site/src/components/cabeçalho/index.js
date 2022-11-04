import { API_URL } from '../../api/config'
import './index.scss'
import Storage from 'local-storage'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Cabeçario(props){

    const navigate = useNavigate();


    function acessarPerfil(){
        const id = Storage('usuario-logado').id
        navigate(`/informacao/${id}`)
    }

    return(
       <main className='cabecalho'>
       
        <div className='logo'>
            <img src='/images/logooo.png' width="100px"></img>
        </div>
        <div className='div1'>
            <div className='lupa'>
            <img src='/images/lupa.png' width="40px"></img>
            </div>
            <div className='playlist'>
            <img src='/images/playlist.png' width="40px"></img>
            </div>
            <div className='logoconta'>
            <img className='usuario' onClick={() => acessarPerfil(props.usuario.id)} src={`${API_URL}/${props.usuario.imagem}`}></img>
            </div>
        </div>

       </main>
    )
}