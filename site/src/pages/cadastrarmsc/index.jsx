import CardCadastromsc from '../../components/comp-cadastrar-musica'
import './index.scss'
import storage from 'local-storage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../components/menu'


export default function Cadastromsc(){

    const navigate = useNavigate ();

    useEffect(() => {
       
    }, [])




    return(
        <main className='pagina-cadastro-musica'>
            <Menu/>
        <section className='faixa-cadastro'>
            <div className='margin-cadastro'>
                <div className='div1-cadastro'>
                    <p className='p'>
                        Adicionar capa
                    </p>
                    <div className='border-image'>
                        <img src='/images/image-bottom212.svg' width='170px'/>
                    </div>
                </div>
                <div className='div2-cadastro'>
                    <div className='div-input'>
                    <input type="text"  placeholder="Artista"  required></input>
                    </div>
                    <div className='div-input'>
                    <input type="text" placeholder="Nome" required></input>
                    </div>
                    <div className='div-input'>
                    <input type="text" placeholder="Musica" required></input>
                    </div>
                    <div className='div-input'>
                    <input type="text" placeholder="Gênero" required></input>
                    </div>
                    <div className='div-input'>
                    <input type="number" placeholder="Tempo" required></input>
                    </div>
                    
                            <button className='botao'>Cadastrar</button>
                </div>
            </div>

        </section>
    </main>
    )
}