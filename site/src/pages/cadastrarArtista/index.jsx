import './index.scss'

export default function cadartista(){
    return(
        <main className='pagina-cadastro-artista'>
            <section className='faixa-icons'>

            </section>
            <section className='faixa-cadastro'>
                <div className='margin-cadastro'>
                    <div className='div1-cadastro'>
                        <p className='p'>
                            Adicionar capa
                        </p>
                        <div className='border-image'>
                            <img src='./images/image-bottom212.svg' width='170px'/>
                        </div>
                    </div>
                    <div className='div2-cadastro'>
                        <div className='div-input'>
                        <input type="text" placeholder="Artista" required></input>
                        </div>
                        <div className='div-input'>
                        <input type="text" placeholder="Artista" required></input>
                        </div>
                        <div className='div-input'>
                        <input type="text" placeholder="Artista" required></input>
                        </div>
                        

                    </div>
                </div>

            </section>
        </main>
    );
}