import './index.scss'
import storage from 'local-storage'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AudioPlayer from 'react-modular-audio-player' ;
import CardGenero from '../../components/genero';
import CardArtistas from '../../components/artistas';
import { useEffect, useState } from 'react';
import { listaArtista } from '../../api/cadastroArtistaAPI';
import { listaGeneros } from '../../api/generoAPI';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/config';



export default function Index() {

  const [artista,setArtista] = useState ([])
  const [genero,setGenero] = useState ([])
  const [usuario,setUsuario] = useState ('')
  const [imagem,setImagem] = useState ('')
  const navigate = useNavigate()

  function acessarPerfil(id){
    navigate(`/informacao/${id}`)
}


  const rearrangedPlayer = [
    {
      className: "beatles",
      style: { cursor: "pointer" },
      innerComponents: [
        {
          type: "play"
        }
      ]
    }
  ];

  function escolherImagem() {
    document.getElementById('imagemCapa').click();
}

function mostrarImagem(imagem){
        
  if (typeof (imagem) == 'object') {
      return URL.createObjectURL(imagem);
  }
  else {
          
          return `${API_URL}/${imagem}`
  }
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

    <div className='pagina-home-login-feito'>

      <div className='faixa1'>
        <header>
          <div className='texto-cabecalho'>
          <img  className='logo' src='./images/logooo.png' href='' width='100' />
        
        

              
              <li><a href="#sec2">Gêneros</a></li>
              <li><a href="#sec3">Artistas populares</a></li>
              
              
              <a href='/buscar'>
              <img className='icon-pesquisa' src='images/icon-pesquisa.png' />
              </a>
             
              <img className='icon-livraria' src='./images/icon-library.png'/>
              {usuario.map(item => 
              <div className='usuario' onClick={() => acessarPerfil (item.id)} >
                <span> </span>

         </div>
         )}
          </div>
        </header>
        <div className='faixa'>
          <h1>Play Music</h1>
           <img className='imag' src='/images/Music-pana.png'></img>

          <AudioPlayer
  audioFiles={[
    {
      src: "music/henriqueejulianooficial-completa-ai-part-marilia-mendonca-09f511dd.mp3",
      title: "Hey Jude",
      artist: "The Beatles"
    }
  ]}
  rearrange={rearrangedPlayer}
  playerWidth="10rem"
  iconSize="10rem"
  playIcon="/images/forro.png"
  playHoverIcon="/images/forro.png"
  pauseIcon="/images/forro.png"
  pauseHoverIcon="/images/forro.png"
/>
        </div>

      </div>

      <div>
      <section id="sec2"><h1>Gêneros</h1></section>
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
        {genero.map (item =>
        <div className="generos">
        <img src={`${API_URL}/${item.genero}`} />
        <p> {item.nome}</p>
       </div>
          )}
       

      </Carousel>

      <div>
      <section id="sec3"><h1>Artistas populares</h1></section>
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
        {artista.map (item =>
        <div className="generos">
        <img src={`${API_URL}/${item.artista}`} />
        <p> {item.nome}</p>
       </div>
          )}
        

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
          <p>Cauã R.</p>
        </div>

        <div>
          <h3>Apoiadores:</h3>
          <img src='./images/logo-frei.png'/>
        </div>

      </div>

      <a href='login usuario'></a>
      

    </div>
  );
}

