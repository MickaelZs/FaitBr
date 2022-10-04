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
<<<<<<< HEAD
                    <a href='/adm/cadastrarArtista'>Cadastrar artista</a>
=======
                    <a href='/adm/Cadastrarartista'>Cadastrar artista</a>
>>>>>>> 14e840f92d03dcda5874467242c9ab010fd6fe7a
                </div>
                <div>
                    <img src="images/cadastrarmusica.svg"/>
                    <div>Cadastrar musica</div>
                </div>

                <div>
                    <img src="/images/consulta.svg"  />
                    <div>Consultar</div>
                </div>

                <div>
                    <img src="/images/artistacadastrado.svg"/>
<<<<<<< HEAD
                    <a href='/adm/artistaCadastrados'>Artista cadastrado</a>
=======
                    <a href='/adm/ArtistaCadastrados'>Artista cadastrado</a>
>>>>>>> 14e840f92d03dcda5874467242c9ab010fd6fe7a
                    
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