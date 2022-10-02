import './index.scss'
import Menu from '../../components/menu'
import { listaArtista } from '../../api/cadastroArtistaAPI';
import {useEffect, useState} from 'react'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

export default function Index(){

    const [nome, setNOME] = useState ([])

    const navigate = useNavigate ();


    async function carregarTodosArtista(){
        const resp = await listaArtista();
        setNOME(resp);
    }

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/LoginAdm')
        }
        carregarTodosArtista();
    }, [])



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
                                {nome.map(item =>
                                <div>
                                    <div className='nomeArtisata'> {item.nome} </div>
                                    <div className='genero'> {item.genero} </div>
                                    <div className='sobre'> {item.sobre} </div>
                                    </div>
                                    
                                    
                                    
                                )}    
                                </div>
                                <div className='genero'>Genero</div>
                                    <div className='sobre'>Sobre</div>
                        
                            </div>
                        </div>

                        
                        
                    </div>


                    
                </div>
            </div>
        </main>
        
    )
}