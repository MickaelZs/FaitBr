import { API_URL } from '../../api/config'
import Storage from 'local-storage'
import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function HomeLogin (props){
  const navigate = useNavigate()

  function acessarPerfil(){
    const id = Storage('usuario-logado').id
    navigate(`/informacao/${id}`)
}

    return(
        <main className="faixa-home-login">
             <div className='texto-cabecalho'>
            <div className='uee'>
                <img src="/images/logooo.png" alt=""  width="100px"/>
                {/* <img src="/images/lupa.png" alt=""  width="40px"/>
                <img src="/images/playlist.png" alt=""  width="40px"/> */}
                
              <li><a href="#sec1">Musicas</a></li>
              <li><a href="#sec2">Gêneros</a></li>
              <li><a href="#sec3">Artistas</a></li>
            <img className='usuario' onClick={() => acessarPerfil (props.usuario.id)} src={`${API_URL}/${props.usuario.imagem}`} alt="" />
              </div>
              
              
          
              

          </div>
            <div className='container'>
                <h1>Viva <br/>a vida é uma <br/> Festa</h1>
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
         <h1>musica <br/> artista </h1>
         </div>
       </div>    
      </div>
      </div>
            </div>

        </main>
    )
}

