import './index.scss'
import Cabeçario from '../../components/cabeçalho'

export default function Playlist(){
    return(
        <main className="pag-playlist">
            <Cabeçario/>
            <section className='section-musicas'>
            <h2 className='titulos'>Musicas</h2>
                <div className="faixa-musicas">
                    <div className='music'>
                        <div className= 'caixa-musica'></div>
                        <div className='border0'>
                        <h3>Dia azul</h3>
                        <p>Teto</p>
                        </div>
                    </div>
                    <div className='music'>
                        <div className= 'caixa-musica'></div>
                        <div className='border0'>
                        <h3>Dia azul</h3>
                        <p>Teto</p>
                        </div>
                    </div>
                    <div className='music'>
                        <div className= 'caixa-musica'></div>
                        <div className='border0'>
                        <h3>Dia azul</h3>
                        <p>Teto</p>
                        </div>
                    </div>
                </div>
                <div>
                        <img className='bolinhas' src="./images/eclipse2.png"></img>
                        <img className='bolinhas' src="./images/eclipse2.png"></img>
                        <img className='bolinhas' src="./images/eclipse2.png"></img>
                    </div>
            </section>
            <section className='section-musicas'>
            <h2 className='titulos'>Artistas - Seguidos</h2>
                <div className="faixa-musicas">
                    <div className='music'>
                        <div className= 'caixa-musica'></div>
                        <div className='border0'>
                        <h3>Tarcisio</h3>
                        </div>
                    </div>
                    <div className='music'>
                        <div className= 'caixa-musica'></div>
                        <div className='border0'>
                        <h3>Thiaguinho</h3>
                        </div>
                    </div>
                    <div className='music'>
                        <div className= 'caixa-musica'></div>
                        <div className='border0'>
                        <h3>Lana del rey </h3>
                        </div>
                    </div>
                </div>
                <div>
                        <img className='bolinhas' src="./images/eclipse2.png"></img>
                        <img className='bolinhas' src="./images/eclipse2.png"></img>
                        <img className='bolinhas' src="./images/eclipse2.png"></img>
                    </div>
            </section>
            <section className='section-playlist'>
            <h2 className='titulo-playlist'>Playlist</h2>
            <div className='playlist'>
                <div className='caixa-musica'></div>
                <div className='nome-playlist'>
                    <h1>Plug...</h1>
                    <h1>De Mickael</h1>
                </div>

            </div>
            </section>
            <section className='faixa-criar-play'>
                    <div className='caixa-musica'></div>
                    <h1 className='criar-playlist'>Criar Playlist</h1>
            </section>
            <div className='finalização'></div>
        </main>
    )
}