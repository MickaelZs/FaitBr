import CardCadastromsc from '../../components/comp-cadastrar-musica'
import './index.scss'
import Emojihome from './casinha.svg'
import cadastrarmusica from './cadastrarmusica.svg'
import consulta from './consulta.svg'
import msccadastrada from './msccadastrada.svg'
import artistacadastrado from './artistacadastrado.svg'
import sair from './sair.svg'
import artista from './artista.svg'
import fitbr from './fitbr.svg'
import imagem from './imagem.svg'


export default function Cadastromsc(){
    return(
        <main className='pagina-cadastro-musica'>
            <section className='faixa-menu'>
                <img src={fitbr} width='150px'/>
                <CardCadastromsc categoria={Emojihome} nome="Home"/>
                <CardCadastromsc categoria={artista} nome="Cadastrar Artista"/>
                <CardCadastromsc categoria={cadastrarmusica} nome="Cadastrar Música"/>
                <CardCadastromsc categoria={consulta} nome="Consultar"/>
                <CardCadastromsc categoria={msccadastrada} nome="Músicas Cadastradas"/>
                <CardCadastromsc categoria={artistacadastrado} nome="Artistas cadastrados"/>
                <CardCadastromsc categoria={sair} nome="Sair"/>
            </section>
            <section className='faixa-cadastrar'>
                <div className='faixa-branca'>
                    <div>
                        <p>Adicionar música</p>
                        <div>
                        <img src={imagem}/>
                        </div>
                    </div>
                    <div>
                            <lab
                            <input type="text"></input>
                            
                    </div>
                </div>

            </section>
        </main>
    )
}