import './index.scss'
import Cabeçario from '../../components/cabeçalho'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import { criarPlaylist, criarPlaylistItem } from '../../api/playlistAPI';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Storage from 'local-storage'
import { buscarUsuarioPorId } from '../../api/usuarioAPI';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export default function Playlist(){

    const [nome,setNome] = useState('')
    const [idPlaylist,setIdPlaylist] = useState('')
    const [idMusica,setIdMusica] = useState('')
    const [idUsuario,setIdUsuario] = useState('')
    const [id,setId] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        carregarUsuario();

    },[])


    async function carregarUsuario(){
        const id = Storage('usuario-logado').id;
        const resp = await buscarUsuarioPorId(id)
        setIdUsuario(resp)

    }

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

        function acessarMusica(){
            navigate(`/adicionarMusica`)
        }


        async function salvarClick(){
            try{ 
                
    
                if(id === 0){
                
                    const NovaPlaylist = await criarPlaylist (nome,idUsuario);
                    setId(NovaPlaylist.id)
                
    
                    toast.dark('Playlist criada');
                }
    
                
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
            <section className='section-playlist'>
            <h2 className='titulo-playlist'>Playlist</h2>
            <div className='playlist'>
                <div className='caixa-musica'></div>
                <div className='nome-playlist'>
                    <h1>Plug...</h1>
                    <h1>De Mickael</h1>
                </div>

            </div>
            </section>
            <section className='faixa-criar-play'>
                    <div className='caixa-musica'></div>
                    <h1 className='criar-playlist'>Criar Playlist</h1>
                    <button ></button>
            </section>
            <div className='finalização'></div>



            <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Criar Playlist</h2>
        <button onClick={closeModal}>close</button>
        <form>
          <input type='text' value={nome}  onChange={e => setNome(e.target.value)}/>
          
          <button onClick={salvarClick} >Continuar</button>
          
        </form>
      </Modal>
      <input type='text' value={nome}  onChange={e => setNome(e.target.value)}/>
          
          <button onClick={salvarClick} >Continuar</button>
    </div>
        </main>
    )
}