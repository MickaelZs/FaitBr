import { API_URL } from '../../api/config';
import Menu from '../../components/menu'
import { confirmAlert } from 'react-confirm-alert'
import { listaArtista, buscarPorId, buscarImagem, BuscarArtistaPorNome, deletaArtista } from '../../api/cadastroArtistaAPI';
import {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './index.scss'



export default function Index() {

    const [nomee, setNomee] = useState ([])
    const [filtro, setFiltro] = useState ('')


    async function carregarArtista(){
        const resp = await listaArtista();
        setNomee(resp);
    }

    useEffect(() => {
        carregarArtista();
    }, [])

    async function filtrar(){
        const resp = await BuscarArtistaPorNome(filtro);
        setNomee(resp);
    }

    async function deletarArtista (id, nome){

        confirmAlert({
            title: 'Remover Agendamento',
            message: `deseja remover o agendamento ${id}?`,
            buttons: [
                {
                    label:'sim',
                    onClick: async () => {
                        const filtro = await deletaArtista (id, nome);
                          if(filtro === ''){
                         carregarArtista();
                      }
                          else
                          filtrar();
                          toast.dark('agendamento removido')
                    }
                },
                {
                    label:'Não'
                }
            ]
        })

        
    }



    return (
        <main className='page page-consultar'>
            <Menu />
            <ToastContainer/>
            <div className='container'>
                
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src='images/icon-pesquisa.png' alt='buscar' onClick={filtrar}/>
                    </div>
                    


                    <div className='card-container'>


                        <div className='comp-card'>

                            {nomee.map(item => {
                            return (
                               
                                    <div className='card'>
                                    <div className='acoes'>

                                        <img src='' alt='editar' /> 
                                        <img src='images/icon-pesquisa.png' alt='remover' onClick={() => deletarArtista(item.id, item.nome) } />
                                        
                                        
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

