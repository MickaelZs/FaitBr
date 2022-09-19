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
                    <div>Home</div>
                </div>
                <div>
                    <img src="images/artista.svg" alt="cadastrar" />
                    <div>Cadastrar artista</div>
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
                    <div>Artista cadastrado</div>
                </div>

                <div>
                    <img src="images/msccadastrada.svg" alt="consultar" />
                    <div>Musica cadastrada</div>
                </div>
            </div>
        </div>

        <div className='menu-items'>
            <div>
                <img src="/assets/images/icon-sair.svg" alt="consultar" />
                <div>Sair</div>
            </div>
        </div>
    </nav>
        
    )
}