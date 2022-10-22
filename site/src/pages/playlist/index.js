import './index.scss'
import Cabeçario from '../../components/cabeçalho'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import { criarPlaylist, criarPlaylistItem, listarPlaylistPorIdUsuarioo } from '../../api/playlistAPI';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Storage from 'local-storage'
import { buscarUsuarioPorId } from '../../api/usuarioAPI';

export default function Playlist(){

    const [nome,setNome] = useState('')
    const [idUsuario,setIdUsuario] = useState('')
    const [usu,setUsu] = useState([])
 //   const [id,setId] = useState(0)
    const navigate = useNavigate()

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

    useEffect(() => {
        carregarPlaylist();

    },[])


    async function carregarPlaylist(){
        const id = Storage('usuario-logado').id;
        const resp = await listarPlaylistPorIdUsuarioo(id)
        setUsu(resp)

    }

      

        async function salvarClick(){
            try{ 

               let id = Storage('usuario-logado').id;
                
                    const NovaPlaylist = await criarPlaylist (nome,id); 
                    
                
                    toast.dark('Playlist criada');

                    

            
                  
                }
     
            catch (err){
                    if(err.response)
                    toast.error(err.response.data.erro)
                    else
                    toast.error(err.message);
                }

                console.log(salvarClick)

              
            }

   



    return(
        <main className="pag-playlist">
            <Cabeçario/>
            <ToastContainer/>
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
                        <img className='bolinhas' src="/images/eclipse2.png"></img>
                        <img className='bolinhas' src="/images/eclipse2.png"></img>
                        <img className='bolinhas' src="/images/eclipse2.png"></img>
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

            <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        centerMode
      >
            {usu.map(item =>
            <section className='section-playlist'>
            <h2 className='titulo-playlist'>Playlist</h2>
            <div className='playlist'>
                
                <div className='caixa-musica'></div>
                <div className='nome-playlist'>
                    <h1>{item.nome}</h1>
                    <h1>De Mickael</h1>
                </div>
                

            </div>
            </section>
            )}
            </Carousel>
            <section className='faixa-criar-play'>
                    <div className='caixa-musica'></div>
                    <h1 className='criar-playlist'>Criar Playlist</h1>
                    <button ></button>
            </section>
            <div className='finalização'></div>



            <div>
    
   
      <input type='text' value={nome}  onChange={e => setNome(e.target.value)}/>
    
          <button onClick={salvarClick} >Continuar</button>
    </div>
        </main>
    )
}