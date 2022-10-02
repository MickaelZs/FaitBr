import CardCadastromsc from '../../components/comp-cadastrar-musica'
import './index.scss'
import storage from 'local-storage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Cadastromsc(){

    const navigate = useNavigate ();

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/LoginAdm')
        }

    }, [])




    return(
        <main className='pagina-cadastro-musica'>
        <section className='faixa-icons'>
            <img src="images/fitbr.svg"  width='150px' className='image-fitbr'/>
            <div className='icons'>
            <CardCadastromsc categoria='images/casinha.svg' nome='Home' cardscss='div-card1' pclas='p'/>
           
            <CardCadastromsc categoria='images/artista.svg' nome='Cadastrar Artistas' cardscss='div-card1' pclas='p'/>
           
             <div className='background'>
            <CardCadastromsc categoria='images/cadastrarmusica.svg' nome='Cadastrar Musica' cardscss='div-card1' pclas='p'/>
            </div>
            <CardCadastromsc categoria='images/consulta.svg' nome='Consultar' cardscss='div-card1' pclas='p'/>
            <CardCadastromsc categoria='images/msccadastrada.svg' nome='Musicas Cadastradas' cardscss='div-card1' pclas='p'/>
            <CardCadastromsc categoria='images/artistacadastrado.svg' nome='Artistas Cadastrados' cardscss='div-card1' pclas='p'/>                
            </div>
            <div className='div-sair'>
            <CardCadastromsc categoria='images/sair.svg' nome='Sair' cardscss='div-card2' pclas='p2'/> 
            </div>
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