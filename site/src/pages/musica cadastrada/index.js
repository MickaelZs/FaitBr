import './index.scss'
import Menu from '../../components/menu'

export default function Index(){
    return(
        <main className='page page-consultar'>
            <Menu />
            <div className='container'>
                
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar artista por nome' />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' />
                    </div>
                    


                    <div className='card-container'>


                        <div className='comp-card'>
                            <div className='card'>
                                <div className='acoes'>

                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                    
                                </div>
                                <div>
                                    
                                    <div className='nomeArtisata'> Nome </div>
                                    <div className='genero'>Genero</div>
                                    <div className='sobre'>Sobre</div>
                                </div>
                        
                            </div>
                        </div>

                        
                        
                    </div>


                    
                </div>
            </div>
        </main>
        
    )
}