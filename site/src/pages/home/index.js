import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { listaGeneros } from '../../api/generoAPI';
import React,{ useEffect, useState } from 'react';
import { listaArtista } from '../../api/cadastroArtistaAPI';
import { API_URL } from '../../api/config';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'

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


export default function Index() {
  const [genero,setGenero] = useState ([])
  const [artista,setArtista] = useState ([])
  const navigate = useNavigate ()

  function acessarArtista(id){
    navigate(`/detalhe/artista/${id}`)
}

  async function carregarGenero(){
    const resp = await listaGeneros();
    setGenero(resp);
}

async function carregarArtista(){
  const resp = await listaArtista();
  setArtista(resp);
}

useEffect(() => {
  carregarArtista();
    carregarGenero();
}, [])

let subtitle;
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
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

  return (

    <div className='pagina-home'>

      <div className='faixa1'>
        <header >
          <div className='texto-cabecalho'>
            <div className='uee'>
              <li><a href="#sec1">Artistas mais escutados</a></li>
              <li><a href="#sec2">Gêneros</a></li>
              <li><a href="#sec3">Artistas populares</a></li>
              </div>
              
              
          
              <div class="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <ul class="menu__box">
                <li><a class="menu__item" href="/LoginUsuario">Login</a></li>
                <li><a class="menu__item" href="/CadastroUsuario">Cadastro</a></li>
                <li><a class="menu__item" href="/LoginAdm">Area ADM</a></li>
                
              </ul>
              </div>

          </div>
        </header>

        <div className='faixa2'>
          <div className='containerdafaixa2'>
          <h1 className='text-pass'>Without music, life would be aﾠﾠﾠﾠﾠﾠﾠ mistake</h1>
          <div className='caixa-incisivel2'></div>
          </div>  
          <div>
            <div className='caixa-invisivel'></div>
          <div className='caixa-do-artista'>
            <div className='img-artista'>
            <img src='/images/manobrown.png' className='image'></img>
            </div>
            <div className='nome-artista'>
              <div className='ball-transparent'></div>
              <h3 >Mano Brown</h3>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div>
      <section id="sec2"><h1 className='artistasegener'>Gêneros</h1></section>
      </div>

     

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={20}
        centerMode
      >
        {genero.map (item =>
        <div className="generos">
        <img src={`${API_URL}/${item.genero}`} />
        <p> {item.nome}</p>
       </div>
          
          )}

      </Carousel>

      <div>
      <section id="sec3"><h1 className='artistasegener'>Artistas populares</h1></section>
      </div>

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
        
        
        

      </Carousel>

      <div className='rodape'>

        <div>
          <img className='logo' src='./images/logo.png'/>
        </div>

        <div className='texto-rodape' >
          <h3>Redes Sociais:</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

        <div>
        <h3>Desenvolvedores:</h3>
          <p>João Paulo</p>
          <p>Mickael V.</p>
          <p>Lucas Tatsuo</p>
          <p>Cauã G.</p>
          <p>Cauan R.</p>
        </div>

        <div>
          <h3>Apoiadores:</h3>
          <img src='/images/logo-frei.png'  width='10px'/>
        </div>

      </div>

      <a href='login usuario'></a>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Para ter o acesso é preciso do cadastro</h2>
        <button onClick={closeModal}>Fechar</button>
        <br/>
        
       
          
      
          
        
      </Modal>
      

    </div>
  );
}