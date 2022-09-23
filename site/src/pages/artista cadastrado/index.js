import Menu from '../../components/menu'
import { listaArtista, buscarPorId, buscarImagem } from '../../api/cadastroArtistaAPI';
import {useEffect, useState} from 'react'
import './index.scss'


export default function Index() {

    const [nomee, setNomee] = useState ([])


    async function carregarTodosArtista(){
        const resp = await listaArtista();
        setNomee(resp);
    }


    useEffect(() => {
        carregarTodosArtista();
    }, [])



    return (
        <main className='page page-consultar'>
            <Menu />
            <div className='container'>
                
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' />
                        <img src='images/icon-pesquisa.png' alt='buscar' />
                    </div>
                    


                    <div className='card-container'>


                        <div className='comp-card'>

                            {nomee.map(item =>

                                    <div className='card'>
                                    <div className='acoes'>

                                        <img src='/assets/images/icon-editar.svg' alt='editar' />
                                        
                                        <img src='/assets/images/icon-remover.svg' alt='remover' />
                                        
                                    </div>
                                    <div>
                                        <div className='imgg'> 
                                        <img src={item.artistas}></img>
                                        </div>
                                        <div className='id'>{item.id} </div>
                                        <div className='artista'>{item.nome} </div>
                                        <div className='genero'>{item.genero}</div>
                                    </div>
                                    <div>
                                        <div className='sobre'>{item.sobre}</div>
                                    </div>
                                    </div>

                                
                                
                                )}
                            
                        </div>

                        
                        
                    </div>


                    
                </div>
            </div>
        </main>
    )
}

