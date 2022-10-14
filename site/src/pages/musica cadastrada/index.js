import './index.scss'
import Menu from '../../components/menu'
import { listaArtista } from '../../api/cadastroArtistaAPI';
import {useEffect, useState} from 'react'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { listaMusicaArtista, listaMusicaeArtista } from '../../api/musicaAPI';
import { API_URL } from '../../api/config';

export default function Index(){

    const [nomee, setNomee] = useState ([])

    const navigate = useNavigate ();


    async function carregarMusicaArtista(){
        const resp = await listaMusicaArtista()
        setNomee(resp)

       
    }
   

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/LoginAdm')
        }
        carregarMusicaArtista();
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

{nomee.map(item => {
return (
   
        <div className='card'>
        <div className='acoes'>

            <img src='/images/botao-editar.png' /> 
            <img src='/images/excluir.png' />
            
            
        </div>
        <div>
           
            <img className='capas' src={`${API_URL}/${item.imagem}`}/>      
          
            
            <div className='id'>{item.id} </div>
            <div className='artista'>{item.musica} </div>

            <div className='genero'>{item.genero}</div>
            <audio controls  src={`${API_URL}/${item.audio}`}></audio>
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