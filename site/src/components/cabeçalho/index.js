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

    function irPraHome() {
        if (Storage('usuario-logado').id) {
            navigate(`/`)
        }
        else {
            navigate(`/`)
        }
    }

    function handlePerfilClick() {
  const usuarioLogado = Storage('usuario-logado');

  if (!usuarioLogado) {
    navigate('/LoginUsuario');
    return;
  }

  navigate(`/informacao/${usuarioLogado.id}`);
}

    return (
        <main className='cabecalho'>

            

            <header class="music-header">

                <div class="left" onClick={irPraHome}>
                    <button class="play-btn">
                        <svg viewBox="0 0 24 24">
                            <polygon points="8,5 19,12 8,19"></polygon>
                        </svg>
                    </button>
                </div>


                <div class="center">
                    <div class="search-bar">
                        <input type="text" placeholder="" />
                        <svg class="search-icon" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7"></circle>
                            <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
                        </svg>
                    </div>
                </div>


                <div class="right">
                    <button class="icon-btn" onClick={acessarPlaylist}>
                        <svg viewBox="0 0 24 24">
                            <path d="M9 18V5l12-2v13"></path>
                            <circle cx="6" cy="18" r="3"></circle>
                            <circle cx="18" cy="16" r="3"></circle>
                        </svg>
                    </button>

                    <button className="icon-btn" onClick={handlePerfilClick}>
                        {!usuario.imagem &&

                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="4"></circle>
                            <path d="M4 21c0-4 4-7 8-7s8 3 8 7"></path>
                        </svg>
                    }

                    {usuario.imagem &&

                        <img className='usuario' src={`${API_URL}/${usuario.imagem}`}></img>

                    }
                        
                    </button>
                </div>
            </header>

        </main>
    )
}