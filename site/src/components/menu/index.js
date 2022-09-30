import './index.scss'

export default function Menu (){
    return(
        <nav className="comp-menu">
        <div>
            <div className='logo'>
                <img src="images/logooo.png" alt="logo" />
                
            </div>

            <div className='menu-items'>
                <div>
                    
                    <img src="images/casinha.svg" alt="home" />
                    <div >Home</div>
                </div>
                <div>
                    <img src="images/artista.svg" alt="cadastrar" />
                    <a href='/Cadastrarartista'>Cadastrar artista</a>
                </div>
                <div>
                    <img src="images/cadastrarmusica.svg" alt="consultar" />
                    <div>Cadastrar musica</div>
                </div>

                <div>
                    <img src="images/consulta.svg" alt="consultar" />
                    <div>Consultar</div>
                </div>

                <div>
                    <img src="images/artistacadastrado.svg" alt="consultar" />
                    <a href='/ArtistaCadastrados'>Artista cadastrado</a>
                    
                </div>

                <div>
                    <img src="images/msccadastrada.svg" alt="consultar" />
                    <a href='/MusicaCadastradas'>Musicas cadastradas</a>
                </div>
            </div>
        </div>

        <div className='menu-items'>
            <div>
                <img src="/images/logout.png" alt="consultar" />
                <div>Sair</div>
            </div>
        </div>
    </nav>
        
    )
}