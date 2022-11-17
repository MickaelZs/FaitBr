import { API_URL } from '../../api/config'
import './index.scss'
import Storage from 'local-storage'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buscarUsuarioPorId } from '../../api/usuarioAPI'




export default function Cabecario() {
    const [usuario, setUsuario] = useState({})
    async function carregarUsuario() {
        const id = Storage('usuario-logado').id
        const reso = await buscarUsuarioPorId(id)
        setUsuario(reso)
    }

    useEffect(() => {
        carregarUsuario()
    }, [])

    const navigate = useNavigate();


    function acessarPerfil() {
        const id = Storage('usuario-logado').id
        navigate(`/informacao/${id}`)
    }
    function acessarBuscar() {

        navigate(`/buscar`)
    }
    function acessarPlaylist() {

        navigate(`/playlist`)
    }

    return (
        <main className='cabecalho'>

            <div className='logo'>
                <img src='/images/nova-logo.png' width="100px"></img>
            </div>
            <div className='div1'>
                <div className='lupa' onClick={acessarBuscar}>
                    <img src='/images/lupa.png' width="75px"></img>
                </div>
                <div className='playlist'>
                    <img src='/images/playlist.png' width="40px" onClick={acessarPlaylist}></img>
                </div>
                <div className='logoconta'>
                    <img className='usuario' onClick={() => acessarPerfil(usuario.id)} src={`${API_URL}/${usuario.imagem}`}></img>
                </div>
            </div>

        </main>
    )
}