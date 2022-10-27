import './index.scss'
import Cabeçario from '../../components/cabeçalho'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import { criarPlaylist, criarPlaylistItem,DeletaPlaylist, listarPlaylistPorIdUsuarioo,listaPlaylist, listarPlaylistItemUsuarioo } from '../../api/playlistAPI';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Storage from 'local-storage'
import { buscarUsuarioPorId } from '../../api/usuarioAPI';
import Modal from 'react-modal';
import { enviarArquivoMusica, listarCurtidas } from '../../api/musicaAPI';
import { API_URL } from '../../api/config';


const  customStyles  =  { 
    content : { 
      top : '50%' , 
      left : '50%' , 
      right : 'auto' , 
      bottom : 'auto' , 
      marginRight : '-50%' , 
      transform : 'translate(-50%, -50%)' , 
    } , 
  } ;

export default function Index(){

    const [nome,setNome] = useState('')
    const [musica,setMusica] = useState([])
    const [usu,setUsu] = useState([])
    const [modal,setModal] = useState (false)
    const [id,setId] = useState(0)
    const navigate = useNavigate()

    
        let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
      
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = '#f00';
        }
      
        function closeModal() {
          setIsOpen(false);
        }
   

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
        carregarCurtida()

    },[])

    function acessarPlaylist(id){
        navigate(`/ReproduzirPlaylist/${id}`)
    }


    async function carregarPlaylist(){
        const id = Storage('usuario-logado').id;
        const resp = await listarPlaylistPorIdUsuarioo(id)
        setUsu(resp)
 
    }

    async function carregarCurtida(){
      const id = Storage('usuario-logado').id;
      const resp = await listarCurtidas(id)
      setMusica(resp)
      console.log(resp)

    }

    async function DeletarPlaylist(id, nome) {

      confirmAlert({
        title: 'Remover playlist',
        message: `deseja remover a playlist ${id, nome}?`,
        buttons: [
          {
            label: 'sim',
            onClick: async () => {
              const filtro = await DeletaPlaylist(id, nome)
  
  
              if (filtro === '') {
                carregarPlaylist();
              }
              else
                carregarPlaylist()
                toast.dark('Playlist removida')
            }
          },
          {
            label: 'Não'
          }
        ]
      })
  
    }

      

        async function salvarClick(){
            try{ 

               let id = Storage('usuario-logado').id;
                
                    const NovaPlaylist = await criarPlaylist (nome,id); 
                    Storage('Playlist',NovaPlaylist)

                    navigate('/AdicionarMusica')
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
           
            <ToastContainer/>
            <section className='section-musicas'>
            <h2 className='titulos'>Musicas</h2>
                <div className="faixa-musicas">
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
                  {musica.map( (item) => 

                  
                    <div className='music'>
                       
                        <img className= 'caixa-musica' src={`${API_URL}/${item.imagem}`} alt=""/>
                        <div className='border0'>
                        <h3>{item.musica}</h3>
                        <p>Teto</p>
                        </div>
                    </div>
                    )}
                   </Carousel>
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
            
            <section className='section-playlist' >
               <img src='/images/excluir.png' onClick={() => DeletarPlaylist(item.id)} />
            <h2 className='titulo-playlist' onClick={() => acessarPlaylist (item.id)}>Playlist</h2>
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
                    <div  onClick={openModal} className='caixa-musica'></div>
                    <h1 className='criar-playlist'>Criar Playlist</h1>
                    
            </section>
            <div className='finalização'></div>


            
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Criar Playlist</h2>
        <button onClick={closeModal}>close</button>
        
       
          
      <input type='text' value={nome}  onChange={e => setNome(e.target.value)}/>
    
    <button onClick={salvarClick} >Continuar</button>
          
        
      </Modal>
      
        </main>
    )
}