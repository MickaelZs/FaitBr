import { API_URL } from '../../api/config'
import Storage from 'local-storage'
import './index.scss'
import { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function HomeLogin(props) {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({})


  function acessarPerfil() {
    const id = Storage('usuario-logado').id
    navigate(`/informacao/${id}`)
  }

  function acessarPlaylist() {

    navigate(`/playlist`)
  }

  function acessarBuscar() {

    navigate(`/buscar`)
  }


  return (
    <main className="faixa-home-login">
      <div className='texto-cabecalho'>
        <div className='uee'>
          <img classsName='logo' src="/images/nova-logo.png" alt="" width='85px' height='55px' />
          {/* <img src="/images/lupa.png" alt=""  width="40px"/>
                <img src="/images/playlist.png" alt=""  width="40px"/> */}

          <li><a href="#sec1">Musicas</a></li>
          <li><a href="#sec2">Gêneros</a></li>
          <li><a href="#sec3">Artistas</a></li>

          <div className='div1'>

            <div className='lupa' onClick={acessarBuscar}>
              <img src='/images/lupa.png' width="75px"></img>
            </div>

            <div className='playlist1'>
              <img src='/images/playlist.png' width="40px" onClick={acessarPlaylist}></img>
            </div>

            <div className='logoconta1'>
            {!usuario.imagem &&

<img className='usuario' src='/images/usuario.png'  onClick={() => acessarPerfil(usuario.id)}


 />
}

{usuario.imagem &&

<img className='usuario' onClick={() => acessarPerfil(usuario.id)} src={`${API_URL}/${usuario.imagem}`}></img>

}
            
            </div>

          </div>
        </div>





      </div>
      <div className='container'>
        <h1>Viva <br />a vida é uma <br /> Festa</h1>
        <div className='oi'>

          <div className='card' >

            <div>
              <img src='/images/teto.jpg' alt="" />
            </div>

            <div className='baixo'>
              <div className='circulo'>
                <img src='/images/teto.jpg' alt="" />
              </div>
              <div className="text">
                <h1>musica <br /> artista </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

