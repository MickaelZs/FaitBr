import './index.scss'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

export default function Menu (){

    const navigate = useNavigate ();

    function sairClick(){
        storage.remove('usuario-logado')
        navigate('/LoginAdm')
    }


    return(
        <nav className="comp-menu">
        <div>
            <div className='logo'>
                <img src="/images/logooo.png" alt="logo" />
                
            </div>

            <div className='menu-items'>
                <div>
                    
                    <img src="/images/casinha.svg"  />
                    <div >Home</div>
                </div>
                <div>
                    <img src="/images/artista.svg"/>
                    <a href='/adm/cadastrarArtista'>Cadastrar artista</a>
                </div>
                <div>
                    <img src="/images/cadastrarmusica.svg"/>
                    <a href='/adm/cadastromusica'>Cadastrar Musica </a>
                </div>

                <div>
                    <img src="/images/consulta.svg"  />
                    <div>Consultar</div>
                </div>

                <div>
                    <img src="/images/artistacadastrado.svg"/>
                    <a href='/adm/artistaCadastrados'>Artista cadastrado</a>
                    
                </div>

                <div >
                    <img src="/images/msccadastrada.svg"  />
                    <a href='/adm/MusicaCadastradas'>Musicas cadastradas</a>
                </div>
            </div>
        </div>

        <div className='menu-items'>
            <div onClick={sairClick}>
                <img src="/images/logout.png" />
                <div>Sair</div>
            </div>
        </div>
    </nav>
        
    )
}