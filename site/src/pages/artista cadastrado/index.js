import { API_URL } from '../../api/config';
import Menu from '../../components/menu'
import { listaArtista, buscarPorId, buscarImagem } from '../../api/cadastroArtistaAPI';
import {useEffect, useState} from 'react'
import './index.scss'



export default function Index() {

    const [nomee, setNomee] = useState ([])


    async function carregarArtista(){
        const resp = await listaArtista();
        setNomee(resp);
    }


    useEffect(() => {
        carregarArtista();
       
       
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

                            {nomee.map(item => {
                            return (
                               
                                    <div className='card'>
                                    <div className='acoes'>

                                        <img src='' alt='editar' /> 
                                        <img src='' alt='remover' />
                                        
                                    </div>
                                    <div>
                                        <div className=''> 
                                        <img className='capas' src={`${API_URL}/storage/capaArtistas/${item.artista}`}/>      
                                      
                                        
                                        </div>
                                        
                                        <div className='id'>{item.id} </div>
                                        <div className='artista'>{item.nome} </div>
                                        <div className='genero'>{item.genero}</div>
                                    </div>
                                    <div>
                                        <div className='sobre'>{item.sobre}</div>
                                    </div>
                                    </div>
                            );
                            })} 
                        </div>
                    </div>  
                </div>
            </div>
        </main>
    )
}

